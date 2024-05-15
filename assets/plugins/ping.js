const { fromBuffer, mimeTypes } = require("file-type");
const { command, isPrivate } = require("../../lib/");
command(
  {
    pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage(message.jid, "_ρɪꪀɢ 🤷🏻‍♀️!_");
    const end = new Date().getTime();
    return await message.sendMessage(
      message.jid,
      "_ρꪮꪀɢ !_\n ```" + (end - start) + "``` _*ms 🏃🏻‍♀️*_"
    );
  }
);

