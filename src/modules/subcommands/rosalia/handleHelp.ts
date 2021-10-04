/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed containing information on how to interact with Rosalia,
 * links to the support server, docs, and code.
 */
export const handleHelp: CommandHandler = async (Rosa, interaction) => {
  try {
    const helpEmbed = new MessageEmbed();
    helpEmbed.setTitle("How to Interact with Rosa");
    helpEmbed.setDescription(
      "Heya! I'm an RPG game on Discord! To see what I can do, type `/` and select my section from the pop-up menu."
    );
    helpEmbed.addField(
      "Support Server",
      "If you need some extra guidance, [join my support server](https://chat.nhcarrigan.com) where our team will be more than happy to guide you."
    );
    helpEmbed.addField(
      "Documentation",
      "As an alternative, you are welcome to view my [documentation](https://docs.rosalianightsong.com) to see what I can do."
    );
    helpEmbed.addField(
      "Source Code",
      "You can also dive in to my [source code](https://github.com/RosaliaNightsong/discord-bot) and look at my code yourself."
    );
    helpEmbed.addField(
      "Bug Report",
      "Have I failed you in some way? You can [report an issue](https://github.com/RosaliaNightsong/discord-bot/issues/choose), or let us know in the support server."
    );
    helpEmbed.addField(
      "Privacy Policy",
      "As part of my services, I collect and use some specific Discord related information. This information includes, but may not be limited to, your user name, nickname, this server's name, and your Discord ID. [View my full policy](https://docs.rosalianightsong.com/#/privacy.md)"
    );
    await interaction.editReply({ embeds: [helpEmbed] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "help command",
      err,
      interaction.guild?.name
    );
    await interaction
      .reply({
        embeds: [errorEmbedGenerator(Rosa, "help", errorId)],
        ephemeral: true,
      })
      .catch(
        async () =>
          await interaction.editReply({
            embeds: [errorEmbedGenerator(Rosa, "help", errorId)],
          })
      );
  }
};
