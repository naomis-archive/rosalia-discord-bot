import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  EmbedBuilder,
  Message,
} from "discord.js";

import { Character } from "../../interfaces/game/Character";
import { Monster } from "../../interfaces/game/Monster";
import { RosaliaNightsong } from "../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../utils/rosaErrorHandler";

import { battleDefeat } from "./results/battleDefeat";
import { battleFlee } from "./results/battleFlee";
import { battleMonsterFlee } from "./results/battleMonsterFlee";
import { battleVictory } from "./results/battleVictory";

/**
 * Handles the logic for the battle system.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character data.
 * @param {Monster} monster The opposing monster data.
 */
export const handleBattle = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  monster: Monster
): Promise<void> => {
  try {
    let { mana: monsterMana, health: monsterHealth } = monster.stats;
    const {
      attack: monsterAttack,
      defence: monsterDefence,
      magic: monsterMagic,
    } = monster.stats;
    let { mana: playerMana, health: playerHealth } = character.stats;
    const {
      attack: playerAttack,
      defence: playerDefence,
      magic: playerMagic,
    } = character.stats;

    const attackButton = new ButtonBuilder()
      .setLabel("Attack")
      .setStyle(ButtonStyle.Success)
      .setCustomId("attack");
    const magicButton = new ButtonBuilder()
      .setLabel("Magic")
      .setStyle(ButtonStyle.Primary)
      .setCustomId("magic");
    const fleeButton = new ButtonBuilder()
      .setLabel("Flee")
      .setStyle(ButtonStyle.Danger)
      .setCustomId("flee");
    const enabledRow = new ActionRowBuilder<ButtonBuilder>().addComponents([
      attackButton,
      magicButton,
      fleeButton,
    ]);

    const initialEmbed = new EmbedBuilder();
    initialEmbed.setTitle("Battle Started!");
    initialEmbed.setDescription(
      `A ${monster.name} has appeared before you!\n${monster.description}`
    );
    initialEmbed.setAuthor({
      name: interaction.user.tag.toString(),
      iconURL: interaction.user.displayAvatarURL(),
    });
    initialEmbed.addFields([
      { name: "Monster Health", value: monsterHealth.toString(), inline: true },
      { name: "Monster Mana", value: monsterMana.toString(), inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
      { name: "Player Health", value: playerHealth.toString(), inline: true },
      { name: "Player Mana", value: playerMana.toString(), inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
    ]);
    initialEmbed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    const response = (await interaction.editReply({
      embeds: [initialEmbed],
      components: [enabledRow],
    })) as Message;

    const collector = response.createMessageComponentCollector({
      filter: (click) => click.user.id === interaction.user.id,
    });

    collector.on("collect", async (click) => {
      let resultString = "";
      await click.deferUpdate();
      // player turn!
      if (click.customId === "attack") {
        const damage = playerAttack - monsterDefence;
        if (damage > 0) {
          monsterHealth -= damage;
          resultString = `You dealt ${damage} damage to ${monster.name}`;
        } else {
          resultString = `Your attack was not effective.`;
        }
      }
      if (click.customId === "magic") {
        if (playerMagic > playerMana) {
          resultString = "You do not have enough mana to cast a spell!";
        } else {
          const magicDamage = playerMagic - Math.round(monsterDefence / 2);
          playerMana -= playerMagic;
          if (magicDamage > 0) {
            monsterHealth -= magicDamage;
            resultString = `You dealt ${magicDamage} magic damage to ${monster.name}!`;
          } else {
            resultString = `Your spell was not effective.`;
          }
        }
      }
      if (click.customId === "flee") {
        const canFlee = Math.ceil(Math.random() * 100) <= 20;
        if (canFlee) {
          await battleFlee(
            Rosa,
            interaction,
            character,
            monster,
            playerHealth,
            playerMana
          );
          return;
        } else {
          resultString = `You failed to escape the ${monster.name}`;
        }
      }
      // break the line
      resultString += "\n";
      // did monster die?
      if (monsterHealth <= 0) {
        await battleVictory(
          Rosa,
          interaction,
          character,
          monster,
          playerHealth,
          playerMana
        );
        return;
      }
      // which button does monster click?
      const monsterChoice = Math.ceil(Math.random() * 100);

      // run
      if (monsterChoice <= 10) {
        await battleMonsterFlee(
          Rosa,
          interaction,
          character,
          monster,
          playerHealth,
          playerMana
        );
        return;
      }

      // magic
      if (monsterChoice > 20 && monsterChoice <= 50) {
        if (monsterMagic > monsterMana) {
          resultString += `${monster.name} tried to cast a spell, but did not have the mana!`;
        } else {
          const magicDamage = monsterMagic - Math.round(playerDefence / 2);
          monsterMana -= monsterMagic;
          if (magicDamage > 0) {
            playerHealth -= magicDamage;
            resultString += `${monster.name} dealt ${magicDamage} magic damage to you!`;
          } else {
            resultString += `${monster.name}'s spell was not effective.`;
          }
        }
      }

      // attack
      if (monsterChoice > 50) {
        const damage = monsterAttack - playerDefence;
        if (damage > 0) {
          playerHealth -= damage;
          resultString += `${monster.name} dealt ${damage} damage to you!`;
        } else {
          resultString += `${monster.name}'s attack was not effective.`;
        }
      }
      // does nothing
      if (monsterChoice > 10 && monsterChoice <= 20) {
        resultString += `${monster.name} is waiting and observing.`;
      }

      // did player die?
      if (playerHealth <= 0) {
        await battleDefeat(Rosa, interaction, character, monster);
        return;
      }

      // if we reach here, then time for another battle round so update the embed.
      const resultEmbed = new EmbedBuilder();
      resultEmbed.setTitle("Battle continues!");
      resultEmbed.setDescription(resultString);
      resultEmbed.setAuthor({
        name: interaction.user.tag.toString(),
        iconURL: interaction.user.displayAvatarURL(),
      });
      resultEmbed.addFields([
        {
          name: "Monster Health",
          value: monsterHealth.toString(),
          inline: true,
        },
        { name: "Monster Mana", value: monsterMana.toString(), inline: true },
        { name: "\u200b", value: "\u200b", inline: true },
        { name: "Player Health", value: playerHealth.toString(), inline: true },
        { name: "Player Mana", value: playerMana.toString(), inline: true },
        { name: "\u200b", value: "\u200b", inline: true },
      ]);
      resultEmbed.setFooter({
        text: "Join our server: https://chat.naomi.lgbt",
        iconURL: "https://cdn.nhcarrigan.com/profile.png",
      });

      await interaction.editReply({ embeds: [resultEmbed] });
    });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "battle handler module",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "battle handler", errorId)],
    });
  }
};
