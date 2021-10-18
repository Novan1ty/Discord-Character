// Rune ~ 8/31/21; August 31, 2021

const Discord = require('discord.js')
const { Open, Save } = require('discord-character')

module.exports = {
    name: 'set-rune',
    description: 'Sets the channel for Rune.',
    async execute(client, message, args) {
        const Permission = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription('```You dont have any permission to use this command.```')
        .setColor("#c98aff")
        if (!message.member.permissions.has("ADMINISTRATOR" || !message.member.permissions.has("MANAGE_SERVER"))) return message.channel.send({ embeds: [ Permission ] })

        const Path = 'PATH'
        let Runes_Channels = Open(Path)

        const Runes_Channel = Runes_Channels.find(Runes_Channel => {
            return Runes_Channel.Guild_ID === parseInt(message.guild.id)
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
            Provide_Channel.addField('Rune\'s Channel', `\`\`\`${Runes_Channel.Name || 'Has not been set.'}\`\`\``)
            return message.channel.send({ embeds: [ Provide_Channel ] })
        }
        if (!Channel && !Runes_Channel) {
            Provide_Channel.addField('Rune\'s Channel', `\`\`\`Has not been set.\`\`\``)
            return message.channel.send({ embeds: [ Provide_Channel ] })
        }
        if (Runes_Channel !== undefined && parseInt(Channel.id) === Runes_Channel.Channel_ID) return message.channel.send({ embeds: [ Already_Been ] })

        const Set = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle('Rune\'s Channel has been set.')
        .setDescription(`\`\`\`You can now chat with Rune in ${Channel.name}\`\`\``)
        .setColor("#c98aff")

        if (!Runes_Channel) {
            Set_Rune()
            Save(Runes_Channels, Path)

            return message.channel.send({ embeds: [ Set ] })
        }

        Runes_Channels = Runes_Channels.filter(Runes_Channel => {
            return Runes_Channel.Guild_ID !== parseInt(message.guild.id)
        })

        Set_Rune()
        Save(Runes_Channels, Path)

        return message.channel.send({ embeds: [ Set ] })

        function Set_Rune() {
            Runes_Channels.push(
                {
                    Guild_ID: parseInt(message.guild.id),
                    Channel_ID: parseInt(Channel.id),
                    Name: Channel.name
                }
            )
        }
    }
}