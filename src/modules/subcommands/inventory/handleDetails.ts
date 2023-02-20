/* eslint-disable jsdoc/require-param */
import { EmbedBuilder } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { sellables } from "../../../config/data/sellables";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../../utils/getRandomValue";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic to display information about an item.
 */
export const handleDetails: CommandHandler = async (Rosa, interaction) => {
  try {
    const target = interaction.options.getString("item", true);

    const item = [...equippables, ...consumables, ...sellables].find(
      (i) => i.name.toLowerCase() === target.toLowerCase()
    );

    const itemEmbed = new EmbedBuilder();

    if (!item) {
      itemEmbed.setTitle("Item not found");
      itemEmbed.setDescription(
        "That item does not appear to exist. Please try again."
      );
      await interaction.editReply({ embeds: [itemEmbed] });
      return;
    }

    itemEmbed.setTitle(item.name);
    itemEmbed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    itemEmbed.setDescription(getRandomValue(item.description));
    itemEmbed.addFields({
      name: "Value",
      value: `${item.value} gold.`,
      inline: true,
    });
    if (item.type !== "sellable") {
      itemEmbed.addFields(
        item.effects.map((effect) => ({
          name: `${effect.stat} bonus:`,
          value: String(effect.bonus),
          inline: true,
        }))
      );
    }
    itemEmbed.setFooter({
      text: "Join our server: https://discord.gg/nhcarrigan",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    await interaction.editReply({ embeds: [itemEmbed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "view command",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "view", errorId)],
    });
  }
};
