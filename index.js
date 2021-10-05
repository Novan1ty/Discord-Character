// Character Classes ~ 10/2/21; October 2, 2021

const Discord = require('discord.js')
const fs = require('fs')
const Simple = require('simplified-javascript')

/*
Character Set ~ 10/2/21; October 2, 2021

Finished: 10/3/21; October 3, 2021
*/

/**
 * An already set up Character Class.
 */
class Character_Set {
    /**
     * The Constructor for Character_Set.
     * 
     * You cannot add custom responses into this Character Class.
     * @param {Discord.Client} Client
     * @param {Discord.Message} Activator
     * @param {String} Name
     * @param {String | URL} Avatar
     * @param {String} Pat
     */
    constructor(Client, Activator, Name, Avatar, Path) {
        this.Client = Client
        this.Activator = Activator
        this.Name = Name
        this.Avatar = Avatar
        this.Path = Path
        
        this.Not = 'This has not been set.'
        this.Has = '"Responses" has to be an Array of Strings.'
    }

    /**
     * Returns an Object of all the responses
     * that has been set.
     */
    get Set() {
        if (!this.Main) throw new ReferenceError(this.Not)

        const Strings = [
            'Main', 'Status', 'Name', 'Age',
            'Cant_Tell', 'Hobbies', 'Good',
            'Bad', 'Where', 'It_Looks', 'Mean',
            'Nothing', 'Hello', 'Thanks',
            'Thanks_Info', 'Lies', 'Can_You',
            'Insulted', 'Called_Me', 'Corona', 
            'Bye', 'Because', 'Sad',
            'Making_Sure', 'Nice', 'Too_Bad',
            'Joking', 'Heck_No', 'Challenge',
            'Confuse', 'Attachments'
        ]
        const Responses = [
            this.Main, this.Status, this.Name,
            this.Age, this.Cant_Tell, this.Hobbies,
            this.Good, this.Bad, this.Where,
            this.It_Looks, this.Mean, this.Nothing,
            this.Hello, this.Thanks, this.Thanks_Info,
            this.Lies, this.Can_You, this.Insulted,
            this.Called_Me, this.Corona, this.Bye,
            this.Because, this.Sad, this.Making_Sure,
            this.Nice, this.Too_Bad, this.Joking,
            this.Heck_No, this.Challenge, this.Confuse,
            this.Attachments
        ]

        const Set = {}

        for (let i = 0; i < Responses.length; i++) {
            if (Responses[i] !== undefined) {
                Set[Strings[i]] = true
            }
        }

        return Set
    }
    /**
     * Returns an Object of all the responses
     * that not has been set.
     */
    get Not_Set() {
        if (!this.Main) throw new ReferenceError(this.Not)

        const Strings = [
            'Main', 'Status', 'Name', 'Age',
            'Cant_Tell', 'Hobbies', 'Good',
            'Bad', 'Where', 'It_Looks', 'Mean',
            'Nothing', 'Hello', 'Thanks',
            'Thanks_Info', 'Lies', 'Can_You',
            'Insulted', 'Called_Me', 'Corona', 
            'Bye', 'Because', 'Sad',
            'Making_Sure', 'Nice', 'Too_Bad',
            'Joking', 'Heck_No', 'Challenge',
            'Confuse', 'Attachments'
        ]
        const Responses = [
            this.Main, this.Status, this.Name,
            this.Age, this.Cant_Tell, this.Hobbies,
            this.Good, this.Bad, this.Where,
            this.It_Looks, this.Mean, this.Nothing,
            this.Hello, this.Thanks, this.Thanks_Info,
            this.Lies, this.Can_You, this.Insulted,
            this.Called_Me, this.Corona, this.Bye,
            this.Because, this.Sad, this.Making_Sure,
            this.Nice, this.Too_Bad, this.Joking,
            this.Heck_No, this.Challenge, this.Confuse,
            this.Attachments
        ]

        const Not_Set = {}

        for (let i = 0; i < Responses.length; i++) {
            if (!Responses[i]) {
                Not_Set[Strings[i]] = false
            }
        }

        return Not_Set
    }

    /**
     * This will start making your Character talk.
     * @returns {Discord.Message}
     */
    async Chat() {
        const message = this.Activator

        this.Save_Channel()

        const Channel = this.Channel
        if (!Channel) return;

        // console.log(Channel.Channel_ID) ~ 10/3/21; October 3, 2021

        await this.Save_Webhook()
        const Character = this.Webhook

        const Character_Responses = this.Main
        const Random_Response = this.Random(Character_Responses)

        const Name = this.Name
        const Avatar = this.Avatar

        if (!Character) {
            return await this.Create(Name, Avatar, this.Webhook_Channel)
            .then(Character => {
                this.Webhook = Character

                Character.send(Random_Response)
            })
        }

        const Attachment = [...message.attachments.values()]
        if (Attachment.length >= 1 && this.Attachments !== undefined) {
            const Attachment_Response = Simple.randomElement(this.Attachments)
            return this.Character_Send(Attachment_Response)
        }

        // This is the "Questioning" section ~ Me, April 26, 2021

        {
            const Characters_Feeling = [ 
                'how are you', 'how r u', 'how r you',
                'how are u', 'how do you feel',
                'how do u feel', 'how ar you', 'how ar u',
                'how r yu', 'how are yu', 'how are yo',
                'how r yo', 'how do yo feel', 'how do yu feel',
                'how is it going', "how's it going",
                "what's up?"
            ]
            for (let i = 0; i < Characters_Feeling.length; i++) {
                if (!this.Has_Response(this.Status)) break

                if (this.Includes(Characters_Feeling[i])) return this.Content_Includes(this.Status)
            }
    
            //-----------------------------------------------------------------------------
    
            const Characters_Name = [
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
            for (let i = 0; i < Characters_Name; i++) {
                if (!this.Has_Response(this.Name)) break
    
                if (this.Includes(Characters_Name[i])) return await this.Content_Includes(this.this.Name)
            }
    
            //-----------------------------------------------------------------------------
    
            const Characters_Age = [
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
            for (let i = 0; i < Characters_Age.length; i++) {
                if (!this.Has_Response(this.Age)) break
    
                if (this.Includes(Characters_Age[i])) return await this.Content_Includes(this.Age)
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
                if (!this.Has_Response(this.Cant_Tell)) break
    
                if (this.Includes(Characters_Info[i])) return await this.Content_Includes(this.Cant_Tell)
            }
            
            //-----------------------------------------------------------------------------
    
            const Characters_Hobbies = [
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
            for (let i = 0; i < Characters_Hobbies.length; i++) {
                if (!this.Has_Response(this.Hobbies)) break
    
                if (this.Includes(Characters_Hobbies[i])) return await this.Content_Includes(this.Characters_Hobbies[i], Hobby)
            }
        }

        // This is the "Answering" section ~ Me, April 26, 2021

        {
            const Good_Feeling = [ 
                'doing good', 'doing gud', 'doing fine',
                'doing okay', 'i\'m fine', 'im fine',
                'im good', 'i\'m good', 'i\'m gud',
                'doing pretty well', 'feeling pretty well',
                'doing just fine', 'feeling good',
                'feeling well', 'feeling much better',
                'feeling way better', 'doing way better',
                'doing much better'
            ]
            const Bad_Feeling = [
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
    
            for (let i = 0; i < Good_Feeling.length; i++) {
                if (!this.Has_Response(this.Good)) break
    
                if (this.Includes(Good_Feeling[i])) return await this.Content_Includes(this.Good)
            }
            for (let i = 0; i < Bad_Feeling.length; i++) {
                if (!this.Has_Response(this.Bad)) break
    
                if (this.Includes(Bad_Feeling[i])) return await this.Content_Includes(this.Bad)
            }
        }
        
        // This is the "Responsing" section ~ Me, February 15, 2021

        {          
            const Question = [ 'where', 'you think', 'mean' ]
            for (let i = 0; i < Question.length; i++) {
                if (!this.Has_Response(this.Where)) break
    
                if (this.Includes(Question[i])) return await this.Content_Includes(this.Where)
            }
    
            //-----------------------------------------------------------------------------   
    
            if (this.Includes('you think')) return await this.Content_Includes(this.Look)
    
            //-----------------------------------------------------------------------------
    
            const Asking = [ 'what', 'wdym', '?', 'wut' ]
            for (let i = 0; i < Asking.length; i++) {
                if (!this.Has_Response(this.Mean)) break
    
                if (this.Includes(Asking[i])) return await this.Content_Includes(this.Mean)
            }
    
            //-----------------------------------------------------------------------------
    
            const Pardon = [ 'pardon', 'excuse me', 'wat', 'i-' ]
            for (let i = 0; i < Pardon.length; i++) {
                if (!this.Has_Response(this.Nothing)) break
    
                if (this.Includes(Pardon[i])) return await this.Content_Includes(this.Nothing)
            }
    
            //----------------------------------------------------------------------------------
            
            const Thanking = [
                'thank', 'tsym', 'gracias', 'kind',
                'helpful', 'appreciate', 'thankful'
            ]
            for (let i = 0; i < Thanking.length; i++) {
                if (!this.Has_Response(this.Thanks)) break
    
                if (this.Includes(Thanking[i])) return await this.Content_Includes(this.Thanks)
            }
                
            //-----------------------------------------------------------------------------------
            
            const Fact = [ 'know', 'wondered', 'aware', 'realize', 'knew' ]
            for (let i = 0; i < Fact.length; i++) {
                if (!this.Has_Response(this.Thanks_Info)) break
    
                if (this.Includes(Fact[i])) return await this.Content_Includes(this.Thanks_Info)
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
                if (!this.Has_Response(this.Lies)) break
    
                if (this.Includes(Lying[i])) return await this.Content_Includes(this.Lies)
            }
    
            //-----------------------------------------------------------------------------------
            
            const Questioning = [
                'can you', 'would you', 'can you',
                'are you', 'can u', 'are u', 'r u',
                'cant you'
            ]
            for (let i = 0; i < Questioning.length; i++) {
                if (!this.Has_Response(this.Can_You)) break
    
                if (this.Includes(Questioning[i])) return await this.Content_Includes(this.Can_You)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Disagreeing = [
                'hate', 'ugly', 'dont like', 'not like',
                'do not like', 'doth not like', 'noob',
                'im smarter', 'despise', 'dislike',
                'distaste', 'bad', 'disgust', 'disgusting',
                'does not like', 'hideous',
                'not appreciate',
            ]
            for (let i = 0; i < Disagreeing.length; i++) {
                if (!this.Has_Response(this.Insulted)) break
    
                if (this.Includes(Disagreeing[i])) return await this.Content_Includes(this.Insulted)
            }
    
            //-------------------------------------------------------------------------------------
            
            if (
                message.content.toLowerCase().startsWith(
                        Simple.Capitalize(this.Name)
                    )
                ) return await this.Content_Includes(this.Called_Me)
    
            //-------------------------------------------------------------------------------------
            
            const Covid19 = [ 'covid', 'corona', 'virus', 'coronavirus' ]     
            for (let i = 0; i < Covid19.length; i++) {
                if (!this.Has_Response(this.Corona)) break
    
                if (this.Includes(Covid19[i])) return await this.Content_Includes(this.Corona)
            }
    
            //-------------------------------------------------------------------------------------
            
            const Leaving = [
                'bye', 'adios', 'cya',
                'see ya', 'see you',
                'bai'
            ]
            for (let i = 0; i < Leaving.length; i++) {
                if (!this.Has_Response(this.Bye)) break
    
                if (this.Includes(Leaving[i])) return await this.Content_Includes(this.Bye)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Cause = [ 'cause', 'cus', 'cuz' ]
            for (let i = 0; i < Cause.length; i++) {
                if (!this.Has_Response(this.Because)) break
    
                if (this.Includes(Cause[i])) return await this.Content_Includes(this.Because)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Feeling = [
                'depress', 'sad', 'feeling down', 
                'emotional', 'stressed'
            ]           
            for (let i = 0; i < Feeling.length; i++) {
                if (!this.Has_Response(this.Sad)) break
    
                if (this.Includes(Feeling[i])) return await this.Content_Includes(this.Sad)
            }
    
            //-------------------------------------------------------------------------------------
    
            if (this.Includes('hi ' + this.Name.toLowerCase())) return await this.Content_Includes(this.Hello)
    
            //-------------------------------------------------------------------------------------
            
            const Unfortunate = [ 'not', 'no' ]
            for (let i = 0; i < Unfortunate.length; i++) {
                if (!this.Has_Response(this.Just_Why)) break
    
                if (this.Includes(Unfortunate[i]) && Includes('not')) return await this.Content_Includes(this.Just_Why)
            }
            
            //-------------------------------------------------------------------------------------
    
            if (this.Includes('not')) return await this.Content_Includes(this.You_Sure)
    
            //-------------------------------------------------------------------------------------
    
            if (this.Includes('good')) return await this.Content_Includes(this.Nice)
    
            //----------------------------------------------------------------------------------
    
            if (this.Includes('do something')) return this.Character_Send('[https://aidn.jp/wowa/343792416](https://www.youtube.com/watch?v=xvFZjo5PgG0)')
    
            //----------------------------------------------------------------------------------
    
            if (this.Includes('something')) return this.Content_Includes(this.Confuse)
    
            //----------------------------------------------------------------------------------
    
            const Greeting = [ 
                'hello', 'hi', 'hey', 'ahoy',
                'oi', 'ey', 'heya', 'heyya',
                'heyo', 'heyyo', 'eya', 'eyya',
                'eyo', 'eyyo', 'hola', 'ola',
                'whats up', "what's up", 'wadup',
                'waddup', 'watup',
            ]
            for (let i = 0; i < Greeting.length; i++) {
                if (
                    this.Includes('thing') ||
                    this.Includes('this') ||
                    !this.Has_Response(this.Hello)
                ) break
    
                if (this.Includes(Greeting[i])) return await this.Content_Includes(this.Hello)
            }
    
            //-------------------------------------------------------------------------------------
    
            if (this.Content_Is('-')) return await this.Content_Includes(this.Sad)
    
            //-------------------------------------------------------------------------------------
    
            const Come_On = [ 'come on', 'comeon', 'cmon' ]
            for (let i = 0; i < Come_On.length; i++) {
                if (!this.Has_Response(this.Too_Bad)) break
    
                if (this.Includes(Come_On[i])) return this.Character_Send(this.Too_Bad)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Relief_or_Calm = [ 'sure', 'ok', 'okay', 'okey', 'ohk', 'finally' ]
            for (let i = 0; i < Relief_or_Calm.length; i++) {
                if (!this.Has_Response(this.Joking)) break
    
                if (this.Includes(Relief_or_Calm[i])) return await this.Content_Includes(this.Joking)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Challenging = [ 'fight', 'kill', 'hurt', 'slap', 'beat' ]
            for (let i = 0; i < Challenging.length; i++) {
                if (!this.Has_Response(this.Challenge)) break
    
                if (this.Includes(Challenging[i])) return await this.Content_Includes(this.Challenge)    
            }
    
            //-------------------------------------------------------------------------------------
    
            const No = [ 'kiss', 'love', 'touch' ]
            for (let i = 0; i < No.length; i++) {
                if (!this.Has_Response(this.Heck_No)) break
    
                if (this.Includes(No[i])) return await this.Content_Includes(this.Heck_No)
            }
    
            //-------------------------------------------------------------------------------------
    
            const Confused = [ 'ay', 'bruh', 'serious' ]
            for (let i = 0; i < Confused.length; i++) {
                if (!this.Has_Response(this.Confuse)) break
    
                if (this.Includes(Confused[i])) return await this.Content_Includes(this.Confuse)
            }
        }

        return this.Character_Send(Random_Response)
    }

    /**
     * Creates a Webhook of Mitch.
     * @param {String} Name 
     * @param {String | URL} Avatar 
     * @param {Discord.Webhook} Channel 
     * @returns {Promise<Discord.Webhook>}
     */
    async Create(Name, Avatar, Channel) {
        return await Channel.createWebhook(Name, {
            avatar: Avatar
        })
    }

    /**
     * Returns true if Responses is not undefined, otherwise false.
     * @param {String[]} Responses 
     * @returns {Boolean}
     */
    Has_Response(Responses) {
        if (Responses !== undefined) return true ; return false
    }

    /**
     * Sets the Channel ID of the Character, then
     * returns the Channel that is set for the Character.
     * @param {String} Path 
     * @returns {object}
     */
    Get_Channel(Path) {
        const Characters_Guilds = Open(Path)
    
        const Characters_Channel = Characters_Guilds.find(Character => {
            return Character.Guild_ID === parseInt(this.Activator.guild.id) &&
            Character.Channel_ID === parseInt(this.Activator.channel.id)
        })
        this.Channel_ID = Characters_Channel.Channel_ID || Characters_Channel.Channel_ID
        
        return Characters_Channel
    }
    /**
     * Gets the webhook of the channel.
     * @param {Discord.Channel} Characters_Channel
     * @returns {Discord.Webhook}
     */
    async Get_Webhook() { // ~ 10/3/21; October 3, 2021
        const Channel = this.Activator.guild.channels.cache.find(Channel => {
            return parseInt(Channel.id) === this.Channel_ID
        })
        // console.log(Channel)

        let Character = await Channel.fetchWebhooks()
        Character = await Character.first()

        return { Channel: Channel, Webhook: Character }
    }

    /**
     * Saves or Sets the Channel property as an Object or undefined.
     */
    Save_Channel() {
        const Channel = this.Get_Channel(this.Path)
        this.Channel = Channel
    }
    /**
     * Saves or Sets the Webhook & Webhook_Channel property as an Object or undefined.
     */
    async Save_Webhook() {
        const { Channel, Webhook } = await this.Get_Webhook()
        if (!Channel && !Webhook) return;

        this.Webhook_Channel = Channel
        this.Webhook = Webhook

        return true
    }

    // Set

    /**
     * Sets the main responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Main(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Main = Responses
    }
    /**
     * Sets the responses for status question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Status(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Status = Responses
    }
    /**
     * Sets the responses for name question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Name(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Name = Responses
    }
    /**
     * Sets the responses for age question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Age(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Age = Responses
    }
    /**
     * Sets the "Can't Tell" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Cant_Tell(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Cant_Tell = Responses
    }
    /**
     * Sets the responses for hobby questions.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Hobbies(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Hobbies = Responses
    }
    /**
     * Sets the responses for good responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Good(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Good = Responses
    }
    /**
     * Sets the responses for bad responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Bad(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Bad = Responses
    }
    /**
     * Sets the responses for "Where" question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Where(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Where = Responses
    }
    /**
     * Sets the responses for "It Looks" question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_It_Looks(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.It_Looks = Responses
    }
    /**
     * Sets the responses for mean responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Mean(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Mean = Responses
    }
    /**
     * Sets the responses for "Nothing" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Nothing(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Nothing = Responses
    }
    /**
     * Sets the responses for greetings.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Hello(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Hello = Responses
    }
    /**
     * Sets the responses for polite responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Thanks(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Thanks = Responses
    }
    /**
     * Sets the responses for responses that is
     * telling you or showing knowledge that you
     * probably don't know.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Thanks_Info(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Thanks_Info = Responses
    }
    /**
     * Sets the responses for lies.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Lies(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Lies = Responses
    }
    /**
     * Sets the responses for "Can You" question(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Can_You(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Can_You = Responses
    }
    /**
     * Sets the responses for being insulted.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Insulted(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Insulted = Responses
    }
    /**
     * Sets the responses for being called.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Called_Me(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Called_Me = Responses
    }
    /**
     * Sets the responses for "Corana" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Corona(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Corona = Responses
    }
    /**
     * Sets the responses for leaving responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Bye(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Bye = Responses
    }
    /**
     * Sets the "Because" responses
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Because(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Because = Responses
    }
    /**
     * Sets the responses for sad responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Sad(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Sad = Responses
    }
    /**
     * Sets the "Making Sure" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Making_Sure(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Making_Sure = Responses
    }
    /**
     * Sets the responses for nice and kind responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Nice(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Nice = Responses
    }
    /**
     * Sets the "Too Bad" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Too_Bad(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Too_Bad = Responses
    }
    /**
     * Sets the "Joking" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Joking(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Joking = Responses
    }
    /**
     * Sets the "Heck No" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Heck_No(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Heck_No = Responses
    }
    /**
     * Sets the responses for being challenged.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Challenge(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Challenge = Responses
    }
    /**
     * Sets the "Confuse" or "Confused" responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Confuse(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Confuse = Responses
    }
    /**
     * Sets the responses for attachment(s).
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Attachments(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Attachments = Responses
    }

    /**
     * Send a message by using a Character.
     * @param {String} Message 
     * @returns {Discord.Message}
     */
    async Character_Send(Message) { // ~ 10/3/21; October 3, 2021
        const Mitch = this.Webhook
        // console.log(Mitch)

        Mitch.send({ content: Message, username: this.Name, avatarURL: this.Avatar })
    }
    /**
     * Returns true if the message includes String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    Includes(String) {
        if (this.Activator.content.toLowerCase().includes(String.toLowerCase())) return true
        return false
    }
    /**
     * Returns a random element from the given array.
     * @param {Array} Array 
     * @returns {Element}
     */
    Random(Array) {
        return Simple.randomElement(Array)
    }
    /**
     * If the Message is an instance of Array, this will return random element from it.
     * @param {String | Array} Message 
     * @returns {String | Array}
     */
    The_Message(Message) {
        if (Message instanceof Array) {
            Message = this.Random(Message)
            return Message
        }
        return Message
    }
    /**
     * Returns true if the message is String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    Content_Is(String) {
        if (this.Activator.content.toLowerCase() === String.toLowerCase()) return true
        return false
    }
    /**
     * @param {String} Message
     * @returns {Discord.Message}
     */
    async Content_Includes(Message) {
        Message = this.The_Message(Message)
        await this.Character_Send(Message)
    }
}

/*
Character ~ 10/4/21; October 4, 2021

Finished: 10/4/21; October 4, 2021
*/

/**
 * A completely empty Character Class.
 * 
 * You can manually add custom responses to
 * specific words using Arrays of String(s).
 */
class Character {
    /**
     * The Constructor for Character.
     * 
     * You can add custom responses into this Character Class.
     * @param {Discord.Client} Client
     * @param {Discord.Message} Activator
     * @param {String} Name
     * @param {String | URL} Avatar
     * @param {String} Path
     */
    constructor(Client, Activator, Name, Avatar, Path) {
        this.Client = Client
        this.Activator = Activator
        this.Name = Name
        this.Avatar = Avatar
        this.Path = Path

        this.Type_1 = []
        this.Type_2 = []
        
        this.Not = 'This has not been set.'
        this.Has = '"Responses" has to be an Array of String(s).'
    }

    /**
     * This will start making your Character talk.
     * @returns {Discord.Message}
     */
    async Chat() {
        const message = this.Activator

        this.Save_Channel()

        const Channel = this.Channel
        if (!Channel) return;

        // console.log(Channel.Channel_ID) ~ 10/3/21; October 3, 2021
        
        await this.Save_Webhook()
        const Character = this.Webhook

        const Character_Responses = this.Main
        const Random_Response = this.Random(Character_Responses)

        const Name = this.Name
        const Avatar = this.Avatar

        if (!Character) {
            return await this.Create(Name, Avatar, this.Webhook_Channel)
            .then(Character => {
                this.Webhook = Character

                Character.send(Random_Response)
            })
        }

        const Attachment = [...message.attachments.values()]
        if (Attachment.length >= 1 && this.Attachments !== undefined) {
            const Attachment_Responses = this.Attachments
            const Attachment_Response = Simple.randomElement(Attachment_Responses)
            
            return this.Character_Send(Attachment_Response)
        }

        // Content Is.
        
        for (let i = 0; i < this.Type_1.length; i++) {
            const { Keywords, Responses } = this.Type_1[i]

            const Response = this.Get_Is(Keywords, Responses)
            if (!Response) ; else {
                return this.Content_Includes(Response)
            }
        }

        // Content Includes.

        for (let i = 0; i < this.Type_2.length; i++) {
            const { Keywords, Responses } = this.Type_2[i]

            const Response = this.Get_Includes(Keywords, Responses)
            if (!Response) ; else {
                return this.Content_Includes(Response)
            }
        }

        return this.Character_Send(Random_Response)
    }

    /**
     * Sends a response if the message is equals to the keyword.
     * @param {String[]} Keywords 
     * @param {String[]} Responses 
     * @returns {Discord.Message}
     */
    Get_Is(Keywords, Responses) {
        // console.log(Responses)

        for (let i = 0; i < Keywords.length; i++) {
            // console.log(Keywords[i], this.Content_Is(Keywords[i]))

            if (this.Content_Is(Keywords[i])) {
                // console.log('Is Equals.')

                const Response = Simple.randomElement(Responses)
                return Response
            }
        }
    }
    /**
     * Sends a response if the message includes the keyword.
     * @param {String[]} Keywords 
     * @param {String[]} Responses 
     * @returns {Discord.Message}
     */
    Get_Includes(Keywords, Responses) {
        for (let i = 0; i < Keywords.length; i++) {
            // console.log(Keywords[i], this.Includes(Keywords[i]))

            if (this.Includes(Keywords[i])) {
                // console.log('Includes.')
                
                const Response = Simple.randomElement(Responses)
                return Response
            }
        }
    }

    /**
     * Adds and Creates a new Response for the Character.
     * 
     * 1 - Content Is | Content === String
     * 
     * 2 - Content Includes | Content.Includes(String)
     * @param {String[]} Keywords
     * @param {String[]} Responses
     * @param {Number} Type
     */
    Add_Response(Keywords, Responses, Type) {
        if (!Keywords) throw new ReferenceError(this.Not)
        if (!(Keywords instanceof Array)) throw new TypeError('"Keywords" has to be an Array of String(s)')
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)
        if (!Type) throw new ReferenceError(this.Not)
        if (isNaN(Type)) throw new TypeError('"Type" has to be a number.')
        if (Type > 2 || Type < 1) throw new ReferenceError('There are only 2 Types of responses.')

        const Response = {
            Keywords: Keywords,
            Responses: Responses
        }
        if (Type === 1) Add(this.Type_1, Response)
        if (Type === 2) Add(this.Type_2, Response)

        function Add(Array, Object) { Array.push(Object) }
    }
    /**
     * Sets the main responses.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Main(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Main = Responses
    }
    /**
     * Sets the responses for attachments.
     * @param {String[]} Responses
     * @returns {Void}
     */
    Set_Attachments(Responses) {
        if (!Responses) throw new ReferenceError(this.Not)
        if (!(Responses instanceof Array)) throw new TypeError(this.Has)

        this.Attachments = Responses
    }

    /**
     * Creates a Webhook of Mitch.
     * @param {String} Name 
     * @param {String | URL} Avatar 
     * @param {Discord.Webhook} Channel 
     * @returns {Promise<Discord.Webhook>}
     */
    async Create(Name, Avatar, Channel) {
        return await Channel.createWebhook(Name, {
            avatar: Avatar
        })
    }

    /**
     * Sets the Channel ID of the Character, then
     * returns the Channel that is set for the Character.
     * @param {String} Path 
     * @returns {object}
     */
    Get_Channel(Path) {
        const Characters_Guilds = Open(Path)
    
        const Characters_Channel = Characters_Guilds.find(Character => {
            return Character.Guild_ID === parseInt(this.Activator.guild.id) &&
            Character.Channel_ID === parseInt(this.Activator.channel.id)
        })
        this.Channel_ID = Characters_Channel.Channel_ID || Characters_Channel.Channel_ID
        
        return Characters_Channel
    }
    /**
     * Gets the webhook of the channel.
     * @param {Discord.Channel} Characters_Channel
     * @returns {Discord.Webhook}
     */
    async Get_Webhook() { // ~ 10/3/21; October 3, 2021
        /*
        let Channel_ID = 0

        const The_Channel = Characters_Channel
        Channel_ID += The_Channel.Channel_ID

        // console.log(Channel_ID)
        */

        const Channel = this.Activator.guild.channels.cache.find(Channel => {
            return parseInt(Channel.id) === this.Channel_ID
        })
        // console.log(Channel)

        let Character = await Channel.fetchWebhooks()
        Character = await Character.first()

        return { Channel: Channel, Webhook: Character }
    }

    /**
     * Saves or Sets the Channel property as an Object or undefined.
     */
    Save_Channel() {
        const Channel = this.Get_Channel(this.Path)
        this.Channel = Channel
    }
    /**
     * Saves or Sets the Webhook & Webhook_Channel property as an Object or undefined.
     */
    async Save_Webhook() {
        const { Channel, Webhook } = await this.Get_Webhook()
        if (!Channel && !Webhook) return;

        this.Webhook_Channel = Channel
        this.Webhook = Webhook

        return true
    }

    /**
     * Returns all of the added responses.
     */
    get Responses() {
        return { Type_1: this.Type_1, Type_2: this.Type_2 }
    }

    /**
     * Send a message by using a Character.
     * @param {String} Message 
     * @returns {Discord.Message}
     */
    async Character_Send(Message) { // ~ 10/3/21; October 3, 2021
        const Mitch = this.Webhook
        // console.log(Mitch)

        Mitch.send({ content: Message, username: this.Name, avatarURL: this.Avatar })
    }
    /**
     * Returns true if the message includes String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    Includes(String) {
        if (this.Activator.content.toLowerCase().includes(String.toLowerCase())) return true
        return false
    }
    /**
     * Returns a random element from the given array.
     * @param {Array} Array 
     * @returns {Element}
     */
    Random(Array) {
        return Simple.randomElement(Array)
    }
    /**
     * If the Message is an instance of Array, this will return random element from it.
     * @param {String | Array} Message 
     * @returns {String | Array}
     */
    The_Message(Message) {
        if (Message instanceof Array) {
            Message = this.Random(Message)
            return Message
        }
        return Message
    }
    /**
     * Returns true if the message is String, otherwise this returns false.
     * @param {String} String 
     * @returns {Boolean}
     */
    Content_Is(String) {
        if (this.Activator.content.toLowerCase() === String.toLowerCase()) return true
        return false
    }
    /**
     * @param {String} Message
     * @returns {Discord.Message}
     */
    async Content_Includes(Message) {
        Message = this.The_Message(Message)
        await this.Character_Send(Message)
    }
}

/**
 * Opens a JSON file.
 * @param {String} Path 
 * @returns {Array | object | JSON}
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

module.exports = { Character_Set, Character, Open }