<<<<<<< HEAD
const Discord = require("discord.js");
const sourcebin = require("sourcebin_js");
const config = require("@config");
=======
const Discord = require ("discord.js");
const sourcebin = require('sourcebin_js');
const config = require('../../../config.json');
>>>>>>> ff32359562338ea542d857f3b6d2c638e3efdc1c
module.exports = {
  name: "eval",
  description: "Evaluates arbituary JavaScript.",
  ownerOnly: true,
  args: true,
  run: async (message, args) => {
    const clean = (text) => {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    };
    try {
      const code = args.join(" ");
      let evaled = eval(code);
<<<<<<< HEAD
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled, { depth: 4 });
      if (evaled.includes(config.token) || evaled.includes(config.mongouri)) {
        message.channel.send({
          embed: {
            title: "Eval Error.",
            description:
              "This eval has the bot credentials! Please try without using the bot's credentials.",
          },
        });
        return;
      }

      if (clean(evaled).length > 1024 || code.length > 1024) {
        await sourcebin
          .create([
            {
              name: `Code by ${message.author.tag}`,
              content: clean(evaled),
              languageId: "js",
            },
          ])
          .then(async (src) => {
            var embed = new Discord.MessageEmbed()
              .setColor("#ffb6c1")
              .addField("Evaled: :inbox_tray:", `\`\`\`js\n${code}\n\`\`\``)
              .addField(
                "Output: :outbox_tray:",
                `Output is to large! [Click here.](${src.url})`
              );
            await message.reply({ embed: embed });
          })
          .catch(async (e) => {
            await message.reply(`Error: ${e}`);
          });
      } else {
=======

      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled, { depth: 0 });
                   if (evaled.includes(config.token) || evaled.includes(config.mongouri)) {
message.channel.send({ embed: {
    title: "Eval Error.",
    description: "This eval has the bot credentials! Please try without using the bot's credentials."
}});
                       return;
                   }

        if (clean(evaled).length > 1024 || code.length > 1024) {
          await sourcebin.create([{
            name: `Code by ${message.author.tag}`,
            content: clean(evaled),
            languageId: 'js'
          }]).then(async src => {
         var embed = new Discord.MessageEmbed()
         .setColor("#ffb6c1")
         .addField("Evaled: :inbox_tray:",  `\`\`\`js\n${code}\n\`\`\``)
         .addField("Output: :outbox_tray:", `Output is to large! [Click here.](${src.url})`)
         await message.reply({ embed: embed })
          }).catch(async e => {
            await message.reply(`Error: ${e}`)
      });
} else {
>>>>>>> ff32359562338ea542d857f3b6d2c638e3efdc1c
        var embed2 = new Discord.MessageEmbed()
          .setColor("#ffb6c1")
          .addField("Evaled: :inbox_tray:", `\`\`\`js\n${code}\n\`\`\``)
          .addField(
            "Output: :outbox_tray:",
            `\`\`\`js\n${clean(evaled)}\n\`\`\``
          );
        await message.reply({ embed: embed2 });
      }
    } catch (err) {
      const code = args.join(" ");
      if (clean(err).length > 1024 || code.length > 1024) {
        sourcebin
          .create([
            {
              name: `Code by ${message.author.tag}`,
              content: clean(err),
              languageId: "js",
            },
          ])
          .then(async (src) => {
            var embed = new Discord.MessageEmbed()
              .setColor("#ffb6c1")
              .addField("Evaled: :inbox_tray:", `\`\`\`js\n${code}\n\`\`\``)
              .addField(
                "Output: :outbox_tray:",
                `Output is to large! [Click here.](${src.url})`
              );
            await message.reply({ embed: embed });
          });
      }
      var embed3 = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
        .addField("Evaled: :inbox_tray:", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Output: :outbox_tray:", `\`\`\`js\n${clean(err)}\n\`\`\``);
      await message.reply({ embed: embed3 });
    }
<<<<<<< HEAD
  },
};
=======
  }
}
>>>>>>> ff32359562338ea542d857f3b6d2c638e3efdc1c
