# Discord Character

## Description
`discord-character` ultimately allows one to *create their own chatbots for Discord*.

## Requirements
**Node.js 16.6.0 or newer is required.**
- [`discord.js`](https://discord.js.org/#/)

## Features
- Easy-to-use
- Beginner-friendly
- Discord Webhoonks

- - -

## Character
The `Character` class has a built-in AI, which are events.
You can add custom responses to certain keywords using an
array of string(s), you can set its type too; Type 1 is
equals to `message.content === 'KEYWORD'` and type 2 is
equals to `message.content.includes('KEYWORD')`.

### Methods
- `Chat()`
- `Set()`
- `Add()`
- `Get_Events()`

### Properties
- `Responses`

- - -

## Examples

```js
// Individual Characters

const { Character } = require('discord-character')

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const Avatar = 'https://cdn.discordapp.com/avatars/781224758355820555/de3ad39b494018d9e42336610d7691ef.jpg?size=4096'

    const Rune = new Character({
        Client: client, Activator: message,
        Name: 'Rune', Avatar: Avatar,
        Guilds: [
            Guild_ID: 'GUILD_ID: Number', // 12345...
            Channel_ID: 'CHANNEL_ID: Number', // 12345...
            Name: 'CHANNEL_NAME'
        ]
    })

    // I would recommended to parse a JSON file outside
    // of this `messageCreate` event.

    const Default = [
        'What?', 'Seriously.', 'Shut up.',
        'No?', 'Yeah?', 'Hm, no.', 'What.',
        'Uhhh', 'Idk.'
    ]
    Rune.Set('Default', Default)

    const Mitch = [ 'Mitch' ]
    const Mitch_Responses = [
        'Oh no-', 'Oh no.', 'Uh oh-', 'Uh oh.'
    ]

    const A = [ 'A', 'EA' ]
    const A_Responses = [ 'A.', 'a.', 'EA.', 'ea.' ]
    Rune.Add(Mitch, Mitch_Responses, 2)
    Rune.Add(A, A_Responses, 1)

    return Rune.Chat()
})
```

### Set.js
If you want a per-server chatbot(s).

```js
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
```

- - -

### Characters.js
```js
// Multiple Characters ~ 12/24/21; December 24, 2021

const { Character, Open } = require('discord-character')

const Res = Open('./Path/To/Res.json')
// console.log(Res)

/*
C = Character
Res_C = Response Character (e.g. Res['Mitch'])
C_Key = Character's Custom Res. Key (e.g. Res['Mitch']['Waffle'])

Example: Add(Rune, 'Rune', 'Mitch', 2)
*/

const Get_Keys = (Character, Key) => {
    return Res[Character][Key].Keys
}
const Get_Res = (Character, Key) => {
    return Res[Character][Key].Res
}
const Add = (C, Res_C, C_Key, Type) => {
    C.Add(Get_Keys(Res_C, C_Key), Get_Res(Res_C, C_Key), Type)
}

function Rune(Client, Message) {
    const Avatar = 'https://cdn.discordapp.com/avatars/781224758355820555/de3ad39b494018d9e42336610d7691ef.jpg?size=4096'
    
    // Character ~ 10/4/21; October 4, 2021

    const Rune = new Character({
        Client: Client, Activator: Message,
        Name: 'Rune', Avatar: Avatar,
        Guilds: [
            {
                Guild_ID: 'GUILD_ID: Number',
                Channel_ID: 'CHANNEL_ID: Number',
                Name: 'CHANNEL_NAME'
            }
        ]
        // Guilds: Open('./Storages/Rune.json')
    })

    Rune.Set('Default', Res.Rune.Default)
    Add(Rune, 'Rune', 'Mitch', 2)
    Add(Rune, 'Rune', 'A', 1)
    
    return Rune
}

function Mitch(Client, Message) {
    const Avatar = 'https://i.imgur.com/e50teWs.jpg'
    const Mitch = new Character({
        Client: Client,
        Activator: Message,
        Name: 'Mitch', Avatar: Avatar,
        Guilds: [
            {
                Guild_ID: 'Guild_ID',
                Channel_ID: 'Channel_ID',
                Name: 'CHANNEL_ID'
            }
        ]
    })

    Mitch.Set('Default', Res.Mitch.Default)
    Add(Mitch, 'Mitch', 'Rune', 2)
    Add(Mitch, 'Mitch', 'Waffle', 1)

    return Mitch
}

module.exports = { Rune, Mitch }
```

### Res.json
This is where the responses and keys are stored.
```json
{
    "Rune": {
        "Default": [
            "What?", "Seriously.", "Shut up.",
            "No?", "Yeah?", "Hm, no.", "What.",
            "Uhhh", "Idk."
        ],
        "Mitch": {
            "Keys": [ "Mitch"
            ],
            "Res": [
                "Oh no-", "Oh no.", "Uh oh-", "Uh oh."
            ]
        },
        "A": {
            "Keys": [ "A", "EA"
            ],
            "Res": [ "A.", "a.", "EA.", "ea."
            ]
        }
    },
    "Mitch": {
        "Default": [
            "Huh?", "W", "What?", "Wdym?",
            "I'm pretty sure that, that is not English."
        ],
        "Rune": {
            "Keys": [ "Rune" ],
            "Res": [ "He's a generous guy.", "Yes.", ":thinking:" ]
        },
        "Waffle": {
            "Keys": [ "Waffle" ],
            "Res": [
                "Gotta love waffle, mate.", "Give me a waffle.",
                "You know the rules, and so do i! Hand over the waffles."
            ]
        }
    }
}
```

## Miscellaneous
These uses the [`fs`](https://nodejs.org/api/fs.html) module.

```js
const { Open, Save } = require('discord-character')

const Path = './Responses/Rune.json'

const Responses = Open(Path)
console.log(Response)

Responses.push( /* Add anything here. */ )
Save(Responses)
```

- - -

## Updates

### _Version 1.2.17_
- The [`Character`](#Character) class has been improved and the structure of its code.
- Only the necessary main methods and properties have been set as public, this means that the "used to be public" methods and properties are now fixed and set to private.
- The `Channel_ID` property will now be set without getting an error.

### _Version 2_
- The [`Character`](#Character) class now takes an object parameter.
- The `Path` parameter has been replaced with `Guilds`. Instead of opening a JSON file, one can now just pass in an array with a single object for private characters. The `Open()` and `Save()` functions are now convenient for per-server characters.
- The `Chat()` method has been improved and is now efficient.
- More and better examples has been added in the package.