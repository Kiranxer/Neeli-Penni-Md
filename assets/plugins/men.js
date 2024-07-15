const plugins = require("../../lib/plugins");
const { command, isPrivate, pm2Uptime } = require("../../lib");
const axios = require('axios');
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange } = require('@whiskeysockets/baileys');

command(
  {
    pattern: "men",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match, m) => {

    let imageURL = 'https://telegra.ph/file/750e455ec12fb47ca5852.png';

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
            mediaType: 2,
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
