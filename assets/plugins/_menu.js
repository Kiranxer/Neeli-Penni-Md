const plugins = require("../../lib/plugins");
const { command, isPrivate, pm2Uptime } = require("../../lib");

command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match, m) => {
    let data = {
      jid: message.jid,
      button: [
        // List Button (Main Menu)
        {
          type: "list",
          params: {
            title: "🤖 WhatsApp Bot Menu 🤖",
            sections: [
              {
                title: "𝐌𝐚𝐢𝐧 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬",
                rows: [
                  {
                    header: "𝐓𝐢𝐭𝐥𝐞 - 𝟏",
                    title: "𝐋𝐢𝐬𝐭", // Replace with actual command 1
                    description: "𝐋𝐢𝐬𝐭 𝐨𝐟 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬", // Replace with actual description
                    id: ":list", // Unique ID for this button
                  },
                  // Add more commands here
                ],
              },
              {
                title: "Under Maintenance 🫦",
                rows: [
                  {
                    header: "umb",
                    title: "umbikko",
                    description: "Get umbal with the bot",
                    id: ":plugin", // Unique ID for this button
                  },
                ],
              },
            ],
          },
        },

      // URL Button (GitHub Link)
        {
          type: "url",
          params: {
            display_text: "GitHub",
            url: "https://github.com/Kiranxer/Neeli-Penni-Md",
            merchant_url: "https://github.com/Kiranxer/Neeli-Penni-Md",
          },
        },
      ],
      header: {
        title: "𝚴𝛆𝛆ʟ𝛊  𝚸𝛆𝛆ꪀ𝛊  𝚳ᴅ  🧚🏻‍♀️",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "𝐊𝐢𝐫𝐚𝐧-𝐗𝐞𝐫 (𝐁𝐞𝐭𝐚) 𝐕𝟏",
      },
      body: {
        text: "*𝐈𝐟 𝐘𝐨𝐮𝐫 𝐌𝐢𝐧𝐝  𝐅𝐨𝐫𝐠𝐞𝐭 𝐀𝐛𝐨𝐮𝐭 𝐒𝐨𝐦𝐞𝐨𝐧𝐞, 𝐓𝐡𝐞 𝐇𝐞𝐚𝐫𝐭 𝐑𝐞𝐦𝐢𝐧𝐝𝐬 𝐓𝐡𝐚𝐭 𝐏𝐞𝐫𝐬𝐨𝐧 🫀🌸>!!*",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);
