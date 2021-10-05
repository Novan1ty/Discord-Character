# Discord Character

## Description
`discord-character` is a basic project that allows you to **create your own chatbots for Discord.**

## Requirement
**Node.js 16.6.0 or newer is required.**
- [`discord.js`](https://discord.js.org/#/)

## Features
- Easy-to-use
- Beginner-Friendly
- Uses Discord Webhooks

- - -

## Classes
There are 2 Character Classes you can use:
- `Character_Set`
- `Character`

### Character_Set
Is an already set up Character Class; Already built-in responses; AI.

### Character
A completely empty Character Class.
You can manually add custom responses to
specific words using Arrays of String(s).

- - -

## Examples

### Set Up
```js
const { Character_Set, Character } = require('discord-character')

module.exports = client => {
    client.on('messageCreate', async message => {
        if (message.author.bot) return;

        const Name = 'Rune'
        const Runes_Avatar = 'https://cdn.discordapp.com/avatars/781224758355820555/de3ad39b494018d9e42336610d7691ef.jpg?size=4096'
        
        const Path = './Responses/JSON/Rune.json'

        // The rest of the code goes here...
    })
}
```

### Character_Set
```js
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
```

### Character
```js
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
```

- - -

## Miscellaneous
There is also a function if you want **to open JSON files**; access your responses.

**This uses the [`fs`](https://nodejs.org/api/fs.html) module.**
```js
const { Open } = require('discord-character')

const Path = './Responses/Rune.json'
const Responses = Open(Path)
```
