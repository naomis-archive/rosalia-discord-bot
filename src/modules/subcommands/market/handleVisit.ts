/* eslint-disable jsdoc/require-param */

import { MessageEmbed } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { markets } from "../../../config/data/markets";
import { sellables } from "../../../config/data/sellables";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../../utils/getRandomValue";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic for viewing a shoppe's items.
 */
export const handleVisit: CommandHandler = async (Rosa, interaction) => {
  try {
    const target = interaction.options.getString("location", true);
    const shoppe = markets.find(
      (el) => el.key.toLowerCase() === target.toLowerCase()
    );

    if (!shoppe) {
      await interaction.editReply({
        content: `You tried to visit ${target}, but no data was available. Please contact the developer!`,
      });
      return;
    }

    const itemData = [...consumables, ...equippables, ...sellables];

    const marketEmbed = new MessageEmbed();
    marketEmbed.setFooter("Having fun? Donate: https://donate.nhcarrigan.com");
    marketEmbed.setTitle(shoppe.name);
    marketEmbed.setDescription(shoppe.description);

    for (const ware of shoppe.wares) {
      const item = itemData.find((el) => el.name === ware);
      marketEmbed.addField(
        `${item?.name} - ${(item?.value || 0) * 5} gold` || "Unknown Item",
        getRandomValue(item?.description || [""]) ||
          `Could not load data for ${ware}`
      );
    }

    await interaction.editReply({ embeds: [marketEmbed] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "visit command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "visit", errorId)],
    });
  }
};
