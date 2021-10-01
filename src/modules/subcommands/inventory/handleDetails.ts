/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { sellables } from "../../../config/data/sellables";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
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

    const itemEmbed = new MessageEmbed();

    if (!item) {
      itemEmbed.setTitle("Item not found");
      itemEmbed.setDescription(
        "That item does not appear to exist. Please try again."
      );
      await interaction.editReply({ embeds: [itemEmbed] });
      return;
    }

    itemEmbed.setTitle(item.name);
    itemEmbed.setDescription(item.description);
    itemEmbed.addField("Value", `${item.value} gold.`, true);
    if (item.type !== "sellable") {
      item.effects.forEach((effect) =>
        itemEmbed.addField(`${effect.stat} bonus:`, `${effect.bonus}`, true)
      );
    }

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
