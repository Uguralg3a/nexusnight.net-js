const Levels = require('discord-xp')
const { EmbedBuilder, PermissionsBitField } = require('discord.js')

module.exports = {
  name: 'addxp',
  UserPerms: ['ADMINISTRATOR'],
  description: 'Add XP to the mentioned user',
  run: async (client, message, args, Discord) => {
    if(message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
    const member = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0])
    if (!member) return message.reply({ content: 'Please specify the member you are adding XP to'})

    const xp = args.slice(1).join(' ')
    if (!xp || !Number(xp)) return message.reply({ content: 'XP must be a number'})

    await Levels.appendXp(member.id, message.guild.id, xp)
    const user = await Levels.fetch(member.id, message.guild.id)
    const xPR = await Levels.xpFor(user.level + 1)
    message.channel.send({ content: `Added ${xp} XP to ${member.user.tag}`}) 
  }
}
}