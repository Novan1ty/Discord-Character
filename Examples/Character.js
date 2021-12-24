/*
Copy and Paste this if running this is necessary.
~ 10/4/21; October 4, 2021
*/

const Characters = require('./Characters.js')

module.exports = client => {
    client.on('messageCreate', async message => {
        if (message.author.bot) return;
        
        return Characters.Rune(client, message).Chat()
    })
}