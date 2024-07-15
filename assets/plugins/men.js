const plugins = require("../../lib/plugins");
const { command, isPrivate, pm2Uptime } = require("../../lib");
const axios = require('axios');
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange } = require('@adiwajshing/baileys');

command(
  {
    pattern: "men",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match, m) => {

    let imageURL = 'https://www.example.com/your_image.jpg'; // Replace with your image URL

    try {
      const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);
      await message.sendMessage(message.jid, buffer, MessageType.image, {
        caption: "Hello there! This is a custom image sent by the bot",
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "Kiran-Xer (Beta) V1",
            body: "WhatsApp Bot",
            mediaType: 2, // 1 for image, 2 for video, 3 for document
            mediaUrl: imageURL,
            sourceUrl: 'https://github.com/Kiranxer/Neeli-Penni-Md' 
          }
        }
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return await message.sendMessage(message.jid, 'Error loading image. Please try again later.', MessageType.text);
    }
  }
);
