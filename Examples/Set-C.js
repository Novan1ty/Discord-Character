// Rune ~ 8/31/21; August 31, 2021

// Make sure that you modify the code.

const Discord = require('discord.js')
const { Open, Save } = require('discord-character')

module.exports = {
    name: 'set-rune',
    description: 'Sets the server\'s channel for Rune.',
    async execute(client, message, args) {
        const Permission = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription('```You dont have any permission to use this command.```')
        .setColor("#c98aff")
        if (
            !message.member.permissions.has("ADMINISTRATOR") ||
            !message.member.permissions.has("MANAGE_SERVER")
        ) return message.channel.send({ embeds: [ Permission ] })

        const Path = './Path/to/JSON'
        let Channels = Open(Path)
        
        const Guild_ID = +message.guild.id
        const Runes_Channel = Channels.find(C => {
            return C.Guild_ID === Guild_ID
        })

        const Provide_Channel = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle('You need to provide a channel.')
        .setDescription('```M!set-rune <Channel>```')
        .setColor("#c98aff")
        const Already_Been = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription('```That channel has already been set as Rune\'s Channel.```')
        .setColor("#c98aff")

        const Channel = message.mentions.channels.first()
        if (!Channel && Runes_Channel !== undefined) {
            Provide_Channel.addField('Rune\'s Channel', `\`\`\`${
                Runes_Channel.Name || 'Has not been set.'
            }\`\`\``)
            return message.channel.send({ embeds: [ Provide_Channel ] })
        } else if (!Channel && !Runes_Channel) {
            Provide_Channel.addField('Rune\'s Channel', `\`\`\`Has not been set.\`\`\``)
            return message.channel.send({ embeds: [ Provide_Channel ] })
        } else if (
            Runes_Channel !== undefined &&
            +Channel.id === Runes_Channel.Channel_ID
        ) return message.channel.send({ embeds: [ Already_Been ] })

        const Set = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle('Rune\'s Channel has been set.')
        .setDescription(`\`\`\`You can now chat with Rune in ${Channel.name}\`\`\``)
        .setColor("#c98aff")

        if (!Runes_Channel) {
            Channels.push(
                {
                    Guild_ID: Guild_ID,
                    Channel_ID: +Channel.id,
                    Name: Channel.name
                }
            )
            Save(Channels, Path)

            return message.channel.send({ embeds: [ Set ] })
        }

        // This will update the guild's channel for Rune.

        Runes_Channel.Channel_ID = +Channel.id
        Runes_Channel.Name = Channel.name
        console.log(Channels)
        Save(Channels, Path)

        return message.channel.send({ embeds: [ Set ] })

    }
}