const Levels = require("discord-xp")
const { mongo } = require('../config.json')
Levels.setURL(mongo)
const client = require('../index')

client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  if (!message.guild) return

  const random = Math.floor(Math.random() * 98) + 1
  const leveledUp = await Levels.appendXp(message.author.id, message.guild.id, random)

  if (leveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id)
    message.channel.send({ content: `Congratulations <@${message.author.id}>, you have leveled up to level ${user.level}!`})
  }
})