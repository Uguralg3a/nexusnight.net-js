// const Levels = require('discord-xp')
// const { MessageEmbed } = require('discord.js')

// module.exports = {
//   name: 'removexp',
//   description: 'Remove xp from the mentioned member',
//   UserPerms: ['ADMINISTRATOR'],
//   run: async (client, message, args, Discord) => {
//     const member = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0])
//     if (!member) return message.reply({ content: 'Please specify the member you are removing XP from'})

//     const xp = args.slice(1).join(' ')
//     if (!xp || !Number(xp)) return message.reply({ content: 'XP must be a number'})

//     await Levels.subtractXp(member.id, message.guild.id, xp)
//     const user = await Levels.fetch(member.id, message.guild.id)
//     const xPR = await Levels.xpFor(user.level + 1)
//     message.channel.send({ content: `Removed ${xp} from ${member.user.tag}`}) 
//   }
// }