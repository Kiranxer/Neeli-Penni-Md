const { command, isPrivate } = require("../../lib/");

command({
  pattern: "test", // Command pattern
  fromMe: isPrivate, // Need to respond for everyone's message? true: only from sudo numbers, false: from everyone, isPrivate: same as false but will be considered as true if worktype is private
  desc: "To check ping", // Description of the command
  type: "user", // Command type
}, async (message, match) => 
  let content = "https://i.imgur.com/WYH3V5h.jpeg"; // Can also use a buffer
message.sendMessage(jid, content, {},"image");
});
