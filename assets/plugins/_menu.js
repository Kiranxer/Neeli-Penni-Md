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
    let buffer = "https://i.imgur.com/WYH3V5h.jpeg"
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
                title: "Main Features",
                rows: [
                  {
                    header: "title",
                    title: "Command 1", // Replace with actual command 1
                    description: "Description of command 1", // Replace with actual description
                    id: "#command1", // Unique ID for this button
                  },
                  {
                    header: "title",
                    title: "Command 2", // Replace with actual command 2
                    description: "Description of command 2", // Replace with actual description
                    id: "#command2", // Unique ID for this button
                  },
                  // Add more commands here
                ],
              },
              {
                title: "Other Options",
                rows: [
                  {
                    header: "title",
                    title: "Get Help",
                    description: "Get assistance with the bot",
                    id: "#help", // Unique ID for this button
                  },
                  {
                    header: "title",
                    title: "About",
                    description: "Learn more about this bot",
                    id: "#about", // Unique ID for this button
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
    return await message.sendMessage(message.jid, buffer, {}, "image", data, {}, "interactive");
  }
);
