export const translation = {
        // SCENE 0
        "scene0": {
            "key": "scene0",
            "description": 
                    `Ah, what a sunny day. Today is the final day of the tournament at the Colliseum. You have been waiting for this moment. Eager to attend, you get up prepare for the day. But first, you feeling like eating a delicious, copious meal.`
            ,
            "prompt": `What shall you consume?`,
            "location": "somewhere in the middle of Rome",
            "choices": [
                {
                    "buttonLabel": "Just bread, like usual.",
                    "nextScene": "scene0-1-1"
                },
                {
                    "buttonLabel": "Some meat.",
                    "nextScene": "scene0-2-1"
                },
                {
                    "buttonLabel": "Food? Give me some wine!",
                    "nextScene": "scene0-3-1"
                }
            ],
        },
        "scene0-1-1": {
            "key": "scene0-1-1",
            "description": 
                    `Great choice. A modest meal for a modest person.`
            ,
            "prompt": `You feel ready to make your way towards the Colliseum.`,
            "location": "somewhere in the middle of Rome",
            "choices": [
                {
                    "buttonLabel": "Head towards the Colliseum.",
                    "nextScene": "scene1"
                },
            ],
        },
        "scene0-2-1": {
            "key": "scene0-2-1",
            "description": 
                    `An adventure awaits you, so of course you choose to eat the meal of a warrior! You stuff yourself with meat and feel stronger than usual.`
            ,
            "prompt": `Finally, you feel ready to make your way towards the Colliseum`,
            "location": "somewhere in the middle of Rome",
            "choices": [
                {
                    "buttonLabel": "Head towards the Colliseum.",
                    "nextScene": "scene1"
                },
            ],
        },
        "scene0-3-1": {
            "key": "scene0-3-1",
            "description": 
                    `Who needs food when you have wine! Today is a day to celebrate, so why not have something proper for the occasion? You feel happier than usual and make your way towards the Colliseum.
    
                    Although you feel quite tipsy...
                    
                    Oops.`
            ,
            "prompt": `Oh well. You need to head out soon.`,
            "location": "somewhere in the middle of Rome",
            "choices": [
                {
                    "buttonLabel": "Head towards to the Colliseum.",
                    "nextScene": "scene1"
                },
            ],
        },
    
        // SCENE 1
        "scene1": {
            "key": "scene1",
            "description": 
                    `After some time, you finally enter the heart of the city. The Colliseum should not be far now. You find yourself facing several paths.`
            ,
            "prompt": `You decide to go...`,
            "location": "somewhere in the city of Rome",
            "choices": [
                {
                    "buttonLabel": "Left, towards the north.",
                    "nextScene": "sceneX"
                },
                {
                    "buttonLabel": "Straight ahead. The Colliseum should just be there... right?",
                    "nextScene": "sceneX"
                },
            ]
        },
    
        // SCENE X - unfinished game screen
        "sceneX": {
            "key": "sceneX",
            "description": 
                    `Perfect! But sadly, there's seems to be a problem....
                    
                    The project isn't finished yet! :( sorry dear player.
    
                    If you would like to follow any progress for this project, look at the following link: https://github.com/kpatenio/ovniAventures. Don't fret, for there will be more to do in this game one day!
                        
                    Thanks for looking at my project and take care!
                    `
            ,
            "prompt": `- Katherine Patenio`,
            "location": "somewhere in the middle of Rome",
            "choices": [
            ],
        },
  };