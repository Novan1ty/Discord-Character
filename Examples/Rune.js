/*
Copy and Paste this if running this is necessary.
~ 10/4/21; October 4, 2021
*/

const { Character } = require('discord-character')

module.exports = client => {
    client.on('messageCreate', async message => {
        if (message.author.bot) return;

        const Name = 'Rune'
        const Runes_Avatar = 'https://cdn.discordapp.com/avatars/781224758355820555/de3ad39b494018d9e42336610d7691ef.jpg?size=4096'
        
        const Path = './Storages/Characters/Rune.json'
        
        // Character ~ 10/4/21; October 4, 2021

        const Rune = new Character(client, message, Name, Runes_Avatar, Path)

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
}