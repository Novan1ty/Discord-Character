// Character Classes ~ 10/2/21; October 2, 2021

const fs = require('fs')
const Simple = require('simplified-javascript')

/*
Character Set ~ 10/2/21; October 2, 2021

Finished on: 10/3/21; October 3, 2021
*/

/**
 * An already set up Character Class.
 */
class Character {
    #Type_1 ; #Type_2 ; #Not ; #Has ;
    #Webhook_Channel ; #Webhook

    /**
     * @param {Object} Options
     * @param {*} Options.Client Discord Client
     * @param {*} Options.Activator Discord Message
     * @param {String} Options.Name
     * @param {String | URL} Options.Avatar
     * @param {object[]} Options.Guilds
     */
    constructor({ Client, Activator, Name, Avatar, Guilds }) {
        this.Client = Client
        this.Activator = Activator
        this.Name = Name
        this.Avatar = Avatar
        this.Guilds = Guilds

        this.#Type_1 = []
        this.#Type_2 = []
        
        this.#Not = 'This has not been set.'
        this.#Has = '"Responses" has to be an Array of String(s).'
    }

    /**
     * This will start making your Character talk.
     * @returns {void}
     */
    async Chat() {
        // const Start = new Date().getTime()

        await this.#Save_Channel()

        const message = this.Activator
        if (parseInt(message.channel.id) !== this.Channel_ID) return;

        await this.#Save_Webhook()
        const Character = this.#Webhook

        const Default = this.Default
        const Random_Response = this.#Random(Default)

        const Name = this.Name
        const Avatar = this.Avatar

        if (!Character) {
            return await this.#Create(Name, Avatar, this.#Webhook_Channel)
            .then(Character => {
                this.#Webhook = Character

                Character.send(Random_Response)
            })
        }

        const Attachment = [...message.attachments.values()]
        if (Attachment.length >= 1 && this.Attachments !== undefined) {
            const Attachment_Response = Simple.randomElement(this.Attachments)
            return this.#Character_Send(Attachment_Response)
        }

        // const End = new Date().getTime()
        // console.log(Math.round((End - Start)) + 'ms')

        // Content Is ~ 10/4/21; October 4, 2021
        
        const Length_1 = this.#Type_1.length
        for (let i = 0; i < Length_1; i++) {
            const { Keywords, Responses } = this.#Type_1[i]

            const Response = this.#Get_Is(Keywords, Responses)
            if (!Response) ; else {
                return this.#Content_Includes(Response)
            }
        }

        // Content Includes ~ 10/4/21; October 4, 2021

        const Length_2 = this.#Type_2.length
        for (let i = 0; i < Length_2; i++) {
            const { Keywords, Responses } = this.#Type_2[i]

            const Response = this.#Get_Includes(Keywords, Responses)
            if (!Response) ; else {
                return this.#Content_Includes(Response)
            }
        }

        // ~ April 26, 2021

        {
            const Status = [ 
                'how are you', 'how r u', 'how r you',
                'how are u', 'how do you feel',
                'how do u feel', 'how ar you', 'how ar u',
                'how r yu', 'how are yu', 'how are yo',
                'how r yo', 'how do yo feel', 'how do yu feel',
                'how is it going', "how's it going",
                "what's up?"
            ]
            for (let i = 0; i < Status.length; i++) {
                if (!this.#Has_Response(this.Status)) break

                if (this.#Includes(Status[i])) return this.#Content_Includes(this.Status)
            }
    
            //-----------------------------------------------------------------------------
    
            const Name = [
                'your name', 'ur name',
                'whats your name', "what's your name",
                'what is your name', 'whats ur name',
                "what's ur name", 'what is ur name',
                'wuts ur name', 'wats ur name',
                "wut's ur name", "wat's ur name",
                'wut is ur name', 'wat is ur name',
                'what your name', 'wat your name',
                'wut your name', 'what ur name',
                'wat ur name', 'wut ur name',
                'tell me your name',' tell me ur name',
            ]
            for (let i = 0; i < Name.length; i++) {
                if (!this.#Has_Response(this.Name)) break
    
                if (this.#Includes(Name[i])) return await this.#Content_Includes(this.Name)
            }
    
            //-----------------------------------------------------------------------------
    
            const Age = [
                'how old are you', 'how old r u',
                'how old are u', 'how old r you',
                'how old are yo', 'how old are yu',
                'how old r yo', 'how old r yu',
                'your age', 'ur age', 'what your age',
                'what ur age', "what's your age",
                "what's ur age", 'what is your age',
                'what is ur age', 'wat is your age',
                'wut is your age', 'wat is ur age',
                'wut is ur age', 'tell me your age',
                'tell me ur age'
            ]
            for (let i = 0; i < Age.length; i++) {
                if (!this.#Has_Response(this.Age)) break
    
                if (this.#Includes(Age[i])) return await this.#Content_Includes(this.Age)
            }
    
            //-----------------------------------------------------------------------------
    
            const Characters_Info = [
                'where are you from', 'where r you from',
                'where r u from', 'where are u from',
                'where do you live', 'where do u live',
                'where are you', 'where r you', 'where r u',
                'what is your phone number',
                'wat is your phone number',
                'what is ur phone number',
                "what's your phone number",
                'wat is ur phone number', "what's your number",
                'what is your number', 'what is ur number',
                'wat is your phone number',
                'wat is ur phone number', "what's your number",
                "what's ur number", "what's your email",
                'what is your email', 'wats your email',
                'wuts your email', "what's ur email",
                'what is ur email', 'wats ur email',
                'who\'s your crush', 'who is your crush',
                'your crush', 'ur crush', 'who is ur crush',
                'tell me your crush', 'tell me ur crush',
            ]
            for (let i = 0; i < Characters_Info.length; i++) {
                if (!this.#Has_Response(this.Speechless)) break
    
                if (this.#Includes(Characters_Info[i])) return await this.#Content_Includes(this.Speechless)
            }
            
            //-----------------------------------------------------------------------------
    
            const Hobbies = [
                'what are your hobbies', 'wat are your hobbies',
                'wat r your hobbies', 'wat r ur hobbies',
                'wut are your hobbies', 'wut r your hobbies',
                'wut r ur hobbies', 'whats your hobbies',
                "what's your hobbies", 'whats ur hobbies',
                "what's ur hobbies", 'wats your hobbies',
                'wats ur hobbies', 'what is your hobbies',
                'what is ur hobbies', 'wat is your hobbies',
                'wat is ur hobbies', 'wut is your hobbies',
                'wuts your hobbies', 'wut is your hobbies',
                'wuts ur hobbies', 'wut is ur hobbies'
            ]
            for (let i = 0; i < Hobbies.length; i++) {
                if (!this.#Has_Response(this.Hobbies)) break
    
                if (this.#Includes(Hobbies[i])) return await this.#Content_Includes(this.Hobbies)
            }

            //-----------------------------------------------------------------------------

            const Feeling_Good = [ 
                'doing good', 'doing gud', 'doing fine',
                'doing okay', 'i\'m fine', 'im fine',
                'im good', 'i\'m good', 'i\'m gud',
                'doing pretty well', 'feeling pretty well',
                'doing just fine', 'feeling good',
                'feeling well', 'feeling much better',
                'feeling way better', 'doing way better',
                'doing much better'
            ]
            const Feeling_Bad = [
                'not doing good', 'not doing okay',
                'not doing gud', 'not doing ok',
                'not doing k', 'not doing ohk',
                'not doing okey', 'not doing well',
                'feeling down', 'feeling bad',
                'not doing great', 'doing bad',
                'feeling down', 'feeling sad',
                'feel sad', 'feel down', 'im depressed',
                'i\'m depressed', 'i\'m sad',
                'feeling depressed', 'not doing good',
                'not doing gud', 'not doing so good',
                'not doing so gud', 'not doing great',
                'not doing pretty well', 'not doing well',
                'not feeling good', 'not feeling gud',
                'not feeling well', 'not feeling great'
            ]
    
            for (let i = 0; i < Feeling_Good.length; i++) {
                if (!this.#Has_Response(this.Kind)) break
    
                if (this.#Includes(Feeling_Good[i])) return await this.#Content_Includes(this.Kind)
            }
            for (let i = 0; i < Feeling_Bad.length; i++) {
                if (!this.#Has_Response(this.Mean)) break
    
                if (this.#Includes(Feeling_Bad[i])) return await this.#Content_Includes(this.Mean)
            }
        }
        
        // ~ February 15, 2021

        {          
            const Where = [ 'where', 'you think', 'mean' ]
            for (let i = 0; i < Where.length; i++) {
                if (!this.#Has_Response(this.Where)) break
    
                if (this.#Includes(Where[i])) return await this.#Content_Includes(this.Where)
            }
    
            //-----------------------------------------------------------------------------   
    
            if (this.#Includes('you think')) return await this.#Content_Includes(this.Appearance)
    
            //-----------------------------------------------------------------------------
    
            const Asking = [ 'what', 'wdym', '?', 'wut' ]
            for (let i = 0; i < Asking.length; i++) {
                if (!this.#Has_Response(this.Speechless)) break
    
                if (this.#Includes(Asking[i])) return await this.#Content_Includes(this.Speechless)
            }
    
            //-----------------------------------------------------------------------------
    
            const Excuse_Me = [ 'pardon', 'excuse me', 'wat', 'i-' ]
            for (let i = 0; i < Excuse_Me.length; i++) {
                if (!this.#Has_Response(this.Suspicion)) break
    
                if (this.#Includes(Excuse_Me[i])) return await this.#Content_Includes(this.Suspicion)
            }
    
            //----------------------------------------------------------------------------------
            
            const Gratitude = [
                'thank', 'tsym', 'gracias', 'kind',
                'helpful', 'appreciate', 'thankful'
            ]
            for (let i = 0; i < Gratitude.length; i++) {
                if (!this.#Has_Response(this.Gratitude)) break
    
                if (this.#Includes(Gratitude[i])) return await this.#Content_Includes(this.Gratitude)
            }
                
            //-----------------------------------------------------------------------------------
            
            const Facts = [ 'know', 'wondered', 'aware', 'realize', 'knew' ]
            for (let i = 0; i < Facts.length; i++) {
                if (!this.#Has_Response(this.Info)) break
    
                if (this.#Includes(Facts[i])) return await this.#Content_Includes(this.Info)
            }
                
            //--------------------------------------------------------------------------------------
    
            const Lying = [
                'idk', 'i dont know', "i don't know",
                'no idea', '0 idea', 'zero clue',
                '0 clue', 'no clue', 'i do not know',
                'doth', 'dunno', 'duno', 'donno',
                'dono', 'not sure', 'nothing', 'none'
            ]
            for (let i = 0; i < Lying.length; i++) {
                if (!this.#Has_Response(this.Lying)) break
    
                if (this.#Includes(Lying[i])) return await this.#Content_Includes(this.Lying)
            }
    
            //-----------------------------------------------------------------------------------
            
            const Challenging = [
                'can you', 'would you', 'can you',
                'are you', 'can u', 'are u', 'r u',
                'cant you', 'fight', 'kill',
                'hurt', 'slap', 'beat'
            ]
            for (let i = 0; i < Challenging.length; i++) {
                if (!this.#Has_Response(this.Challenging)) break
    
                if (this.#Includes(Challenging[i])) return await this.#Content_Includes(this.Challenging)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Insults = [
                'hate', 'ugly', 'dont like', 'not like',
                'do not like', 'doth not like', 'noob',
                'im smarter', 'despise', 'dislike',
                'distaste', 'bad', 'disgust', 'disgusting',
                'does not like', 'hideous',
                'not appreciate',
            ]
            for (let i = 0; i < Insults.length; i++) {
                if (!this.#Has_Response(this.Insults)) break
    
                if (this.#Includes(Insults[i])) return await this.#Content_Includes(this.Insults)
            }
    
            //-------------------------------------------------------------------------------------
            
            if (
                message.content.toLowerCase().startsWith(
                    Simple.Capitalize(this.Name)
                )
            ) return await this.#Content_Includes(this.Mentioned)
    
            //-------------------------------------------------------------------------------------
            
            const Covid19 = [ 'covid', 'corona', 'virus', 'coronavirus' ]     
            for (let i = 0; i < Covid19.length; i++) {
                if (!this.#Has_Response(this.Covid19)) break
    
                if (this.#Includes(Covid19[i])) return await this.#Content_Includes(this.Covid19)
            }
    
            //-------------------------------------------------------------------------------------
            
            const Goodbye = [
                'bye', 'adios', 'cya', 'see ya',
                'see you', 'bai'
            ]
            for (let i = 0; i < Goodbye.length; i++) {
                if (!this.#Has_Response(this.Goodbye)) break
    
                if (this.#Includes(Goodbye[i])) return await this.#Content_Includes(this.Goodbye)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Because = [ 'cause', 'cus', 'cuz' ]
            for (let i = 0; i < Because.length; i++) {
                if (!this.#Has_Response(this.Because)) break
    
                if (this.#Includes(Because[i])) return await this.#Content_Includes(this.Because)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Sad = [
                'depress', 'sad', 'feeling down', 
                'emotional', 'stressed'
            ]           
            for (let i = 0; i < Sad.length; i++) {
                if (!this.#Has_Response(this.Sad)) break
    
                if (this.#Includes(Sad[i])) return await this.#Content_Includes(this.Sad)
            }
    
            //-------------------------------------------------------------------------------------
    
            if (this.#Includes('hi ' + this.Name.toLowerCase())) {
                return await this.#Content_Includes(this.Greetings)
            }
    
            
            //-------------------------------------------------------------------------------------
    
            if (this.#Includes('not')) return await this.#Content_Includes(this.Assuring)
    
            //-------------------------------------------------------------------------------------
    
            if (this.#Includes('good')) return await this.#Content_Includes(this.Kind)
    
            //----------------------------------------------------------------------------------
    
            if (this.#Includes('do something')) {
                return this.#Character_Send(
                    '[https://aidn.jp/wowa/343792416](https://www.youtube.com/watch?v=xvFZjo5PgG0)'
                )
            }
    
            //----------------------------------------------------------------------------------
    
            if (this.#Includes('something')) return this.#Content_Includes(this.Unclear)
    
            //----------------------------------------------------------------------------------
    
            const Greetings = [ 
                'hello', 'hi', 'hey', 'ahoy',
                'oi', 'ey', 'heya', 'heyya',
                'heyo', 'heyyo', 'eya', 'eyya',
                'eyo', 'eyyo', 'hola', 'ola',
                'whats up', "what's up", 'wadup',
                'waddup', 'watup',
            ]
            for (let i = 0; i < Greetings.length; i++) {
                if (
                    this.#Includes('thing') ||
                    this.#Includes('this') ||
                    !this.#Has_Response(this.Greetings)
                ) break
    
                if (this.#Includes(Greetings[i])) {
                    return await this.#Content_Includes(this.Greetings)
                }
            }
    
            //-------------------------------------------------------------------------------------
    
            if (this.#Content_Is('-')) return await this.#Content_Includes(this.Sad)
    
            //-------------------------------------------------------------------------------------
    
            const Come_On = [ 'come on', 'comeon', 'cmon' ]
            for (let i = 0; i < Come_On.length; i++) {
                if (!this.#Has_Response(this.Come_On)) break
    
                if (this.#Includes(Come_On[i])) return this.#Character_Send(this.Come_On)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Really = [ 'sure', 'ok', 'okay', 'okey', 'ohk', 'finally' ]
            for (let i = 0; i < Really.length; i++) {
                if (!this.#Has_Response(this.Really)) break
    
                if (this.#Includes(Really[i])) return await this.#Content_Includes(this.Really)
            }
    
            //-------------------------------------------------------------------------------------
    
            const No = [ 'kiss', 'love', 'touch' ]
            for (let i = 0; i < No.length; i++) {
                if (!this.#Has_Response(this.Love)) break
    
                if (this.#Includes(No[i])) return await this.#Content_Includes(this.Love)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Unclear = [ 'ay', 'bruh', 'serious' ]
            for (let i = 0; i < Unclear.length; i++) {
                if (!this.#Has_Response(this.Unclear)) break
    
                if (this.#Includes(Unclear[i])) return await this.#Content_Includes(this.Unclear)
            }
        }

        return this.#Character_Send(Random_Response)
    }

    /**
     * Returns a random response if the content of the
     * message is exactly as one of the keywords.
     * @param {String[]} Keywords 
     * @param {String[]} Responses 
     * @returns {String}
     */
    #Get_Is(Keywords, Responses) {
        // console.log(Responses)

        const Length = Keywords.length
        for (let i = 0; i < Length; i++) {
            // console.log(Keywords[i], this.#Content_Is(Keywords[i]))

            if (this.#Content_Is(Keywords[i])) {
                // console.log('Is Equals.')

                const Response = Simple.randomElement(Responses)
                return Response
            }
        }
    }
    /**
     * Returns a random response if the content of the
     * message has one of the keywords.
     * @param {String[]} Keywords 
     * @param {String[]} Responses 
     * @returns {String}
     */
    #Get_Includes(Keywords, Responses) {
        const Length = Keywords.length
        for (let i = 0; i < Length; i++) {
            // console.log(Keywords[i], this.#Includes(Keywords[i]))

            if (this.#Includes(Keywords[i])) {
                // console.log('Includes.')
                
                const Response = Simple.randomElement(Responses)
                return Response
            }
        }
    }

    /**
     * Creates a Webhook of Mitch.
     * @param {String} Name 
     * @param {String | URL} Avatar 
     * @param {*} Channel Discord Channel
     * @returns {Promise} Discord Webhook
     */
    async #Create(Name, Avatar, Channel) {
        return await Channel.createWebhook(Name, {
            avatar: Avatar
        })
    }

    /**
     * Returns true if Responses is not undefined, otherwise false.
     * @param {String[]} Responses 
     * @returns {Boolean}
     */
    #Has_Response(Responses) {
        if (Responses !== undefined) return true ; return false
    }

    /**
     * Gets the webhook of the channel.
     * @returns {*} Discord Webhook
     */
    async #Get_Webhook() { // ~ 10/3/21; October 3, 2021
        const Channel_ID = this.Channel_ID
        const Channel = this.Activator.guild.channels.cache.find(C => {
            return +C.id === Channel_ID
        })
        // console.log(Channel)

        if (!Channel) return;

        let Character = await Channel.fetchWebhooks()
        Character = await Character.first()

        return { Channel: Channel, Webhook: Character }
    }

    async #Save_Channel() {
        const message = this.Activator
        const Guild_ID = +message.guild.id
        const Channel_ID = +message.channel.id

        const Channel = this.Guilds?.find(C => {
            return C.Guild_ID === Guild_ID &&
            C.Channel_ID === Channel_ID
        })
        
        return this.Channel_ID =
        !Channel ?
            undefined
        :
            await Channel.Channel_ID
    }
    async #Save_Webhook() {
        const Fetched = await this.#Get_Webhook()
        if (!Fetched) return;

        const { Channel, Webhook } = Fetched
        if (!Channel && !Webhook) return;

        this.#Webhook_Channel = Channel
        this.#Webhook = Webhook
    }

    // Set

    /**
     * Sets the responses of a certain event.
     * @param {String} Event 
     * @param {String[]} Responses 
     * @returns {Void}
     */
    Set(Event, Responses) { // ~ 11/9/21; November 9, 2021
        if (!Event) return;
        if (!Responses) throw new ReferenceError(this.#Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.#Has)

        Event = Event.toLowerCase()
        const Events = this.Get_Events(true)

        const Length = Events.length
        for (let i = 0; i < Length; i++) {
            if (Event === Events[i]) {
                // console.log(Event)

                // this.A = 'E'
                // console.log(this['A'])

                return this[Simple.Capitalize(Events[i])] = Responses
            }
        }
    }

    /**
     * Returns all the events.
     * @param {Boolean} Lowercase 
     * @returns {String[]}
     */
    Get_Events(Lowercase = false) {
        const Events = [
            'Default', 'Status', 'Age', 'Speechless',
            'Hobbies', 'Kind', 'Mean', 'Where',
            'Appearance', 'Suspicion', 'Greetings',
            'Gratitude', 'Info', 'Lying',
            'Challenging', 'Insults', 'Mentioned',
            'Covid19', 'Goodbye', 'Because', 'Sad',
            'Come-on', 'Assuring', 'Really', 'Love',
            'Unclear', 'Attachments'
        ]
        if (Lowercase) return Events.map(Event => {
            return Event.toLowerCase()
        })

        return Events
    }

    // Add

    /**
     * Adds and creates a new response for the character.
     * 
     * 1 - Content Is | Content === String
     * 
     * 2 - Content Includes | Content.Includes(String)
     * @param {String[]} Keywords
     * @param {String[]} Responses
     * @param {Number} Type
     */
    Add(Keywords, Responses, Type) {
        if (!Keywords || !Responses || !Type) throw new ReferenceError(this.#Not)
        if (!(Keywords instanceof Array)) throw new TypeError('"Keywords" has to be an Array of String(s)')
        if (!(Responses instanceof Array)) throw new TypeError(this.#Has)
        if (isNaN(Type)) throw new TypeError('"Type" has to be a number.')
        if (Type > 2 || Type < 1) throw new ReferenceError('There are only 2 Types of responses.')

        const Add = (Array, Object) => { Array.push(Object) }
        
        const Response = {
            Keywords: Keywords,
            Responses: Responses
        }
        if (Type === 1) Add(this.#Type_1, Response)
        if (Type === 2) Add(this.#Type_2, Response)
    }

    /**
     * Returns all of the added responses.
     */
    get Responses() {
        return { Type_1: this.#Type_1, Type_2: this.#Type_2 }
    }

    /**
     * Send a message by using a character.
     * @param {String} Message 
     * @returns {void}
     */
    #Character_Send(Message) { // ~ 10/3/21; October 3, 2021
        const Mitch = this.#Webhook
        // console.log(Mitch)

        Mitch.send({ content: Message, username: this.Name, avatarURL: this.Avatar })
    }
    /**
     * Returns true if the content of the message
     * includes String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    #Includes(String) {
        return this.Activator.content.toLowerCase().includes(
            String.toLowerCase()
        )
    }
    /**
     * Returns a random element from the given array.
     * @param {Array} Array 
     * @returns {Element}
     */
    #Random(Array) {
        return Simple.randomElement(Array)
    }
    /**
     * If Message is an instance of an array, this
     * will return a random element from it.
     * @param {String | Array} Message 
     * @returns {String | Array}
     */
    #The_Message(Message) {
        if (Message instanceof Array) {
            Message = this.#Random(Message)
            return Message
        }
        return Message
    }
    /**
     * Returns true if the content of the message is
     * exactly as String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    #Content_Is(String) {
        return this.Activator.content.toLowerCase() === String.toLowerCase()
    }
    /**
     * @param {String} Message
     * @returns {void}
     */
    async #Content_Includes(Message) {
        Message = this.#The_Message(Message)
        this.#Character_Send(Message)
    }
}

/*
Character ~ 10/4/21; October 4, 2021

Finished on: 10/4/21; October 4, 2021
*/

/**
 * Opens a JSON file.
 * @param {String} Path 
 * @returns {Array | object}
 * 
 * // Path Example
 * 
 * const Path = './JSON/Rune.json'
 */
function Open(Path) {
    const Has = new ReferenceError('"Path" has to be a valid path to a JSON file.')
    
    if (!Path) throw Has
    if (!Path.endsWith('.json')) throw Has
    
    let File;
    try {
        File = fs.readFileSync(Path, 'utf-8')
    } catch (Error) {
        throw Error
    }
    
    const Data = JSON.parse(File.toString())
    return Data
}
/**
 * Saves the given data into the JSON file.
 * @param {Array | object} Data
 * @param {String} Path
 * @returns {void}
 */
function Save(Data, Path) {
    const Has = new ReferenceError('"Path" has to be a valid path to a JSON file.')

    if (!Data) return new ReferenceError('You need to provide a data.')
    if (!Path) throw Has
    if (!Path.endsWith('.json')) throw Has

    const Saving = JSON.stringify(Data, null, 4)
    fs.writeFileSync(Path, Saving)

    const Saved = JSON.stringify(Data, null, 4)
    fs.writeFileSync(Path, Saved)
}

// Testings ~ 11/9/21; November 9, 2021

/*
const Rune = new Character('client', 'message', 'Rune', 'EA')

console.log(Rune.Get_Events())

Rune.Add([ 'Mitch' ], [ 'Heya' ], 1)
// console.log(Rune.Responses)

Rune.Set('Default', [ 'Heya.' ])
// console.log(Rune.Default)
*/

module.exports = { Character, Open, Save }