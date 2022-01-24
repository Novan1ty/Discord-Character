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