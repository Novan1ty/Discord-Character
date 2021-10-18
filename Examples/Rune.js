/*
Copy and Paste this if running this is necessary.
~ 10/4/21; October 4, 2021
*/

const { Character_Set, Character } = require('discord-character')

module.exports = client => {
    client.on('messageCreate', async message => {
        if (message.author.bot) return;

        const Name = 'Rune'
        const Runes_Avatar = 'https://cdn.discordapp.com/avatars/781224758355820555/de3ad39b494018d9e42336610d7691ef.jpg?size=4096'
        
        const Path = './Storages/Characters/Rune.json'
        
        // Character Set ~ 10/2/21; October 2, 2021
        /*
        {
            const Rune = new Character_Set(client, message, Name, Runes_Avatar, Path)

            const Main_Responses = [
                'What?', 'Seriously.', 'Shut up.',
                'No?', 'Yeah?', 'Hm, no.', 'What.',
                'Uhhh', 'Idk.'
            ]
            const Status_Responses = [
                'I\'m doing good, how about you? ' + message.author.username  + '.',
            ]

            Rune.Set_Main(Main_Responses)
            Rune.Set_Status(Status_Responses)

            return await Rune.Chat()
        }
        */
        
        // Character ~ 10/4/21; October 4, 2021

        const Rune = new Character(client, message, Name, Runes_Avatar, Path)

        const Main_Responses = [
            'What?', 'Seriously.', 'Shut up.',
            'No?', 'Yeah?', 'Hm, no.', 'What.',
            'Uhhh', 'Idk.'
        ]
        Rune.Set_Main(Main_Responses)

        const Mitch = [ 'Mitch' ]
        const Mitch_Responses = [
            'Oh no-', 'Oh no.', 'Uh oh-', 'Uh oh.'
        ]
        
        const A = [ 'A', 'EA' ]
        const A_Responses = [ 'A.', 'a.', 'EA.', 'ea.' ]
        Rune.Add_Response(Mitch, Mitch_Responses, 2)
        Rune.Add_Response(A, A_Responses, 1)

        return await Rune.Chat()
    })
}