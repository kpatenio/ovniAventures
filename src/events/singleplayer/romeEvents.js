const DESCRIPTION = "description";
const PROMPT = "prompt";
const LOCATION = "location";
const CHOICES = "choices";

export const romeEvents = {
    "scene0": {
        "description": 
                `Ah! quel matin magnifique et ensoleillé. Aujourd'hui, c'est la finale du tournoi au Colisée! Vous attendez ce grand moment depuis longtemps. Enthousiaste, vous vous levez et vous vous préparez pour le jour. Vous avez envie de manger un repas délicieux et copieux.`
        ,
        "prompt": `Qu'est-ce que vous voudriez consommer?`,
        "location": "quelque part à la ville de Rome",
        "choices": [
            {
                "buttonLabel": "Du pain, comme d'habitude.",
                "nextScene": "scene0-1-1"
            },
            {
                "buttonLabel": "De la viande.",
                "nextScene": "scene0-2-1"
            },
            {
                "buttonLabel": "Pas de nourriture! Plutôt... du vinsofkpd!",
                "nextScene": "scene0-3-1"
            }
        ],
    },
    "scene0-1-1": {
        "description": 
                `Un bon choix! Le pain, un tel repas simple pour une personne modeste.`
        ,
        "prompt": `Vous êtes prêt.e à vous diriger vers le Colisée.`,
        "location": "quelque part à la ville de Rome",
        "choices": [
            {
                "buttonLabel": "Avancer au Colisée",
                "nextScene": "scene1"
            },
        ],
    },
    "scene0-2-1": {
        "description": 
                `Une aventure vous attend, donc il faut manger le repas d'un guerrier! Vous bouffez de la viande et vous vous sentez plus fort.e que l'habitude.`
        ,
        "prompt": `Enfin, vous êtes prêt.e de partir pour aller au Colisée.`,
        "location": "quelque part à la ville de Rome",
        "choices": [
            {
                "buttonLabel": "Avancer au Colisée",
                "nextScene": "scene1"
            },
        ],
    },
    "scene0-3-1": {
        "description": 
                `Un repas? On s'en fiche! C'est un jour pour faire la fête, donc pourquoi pas boire du vin? Vous vous sentez plus heureux/heureuse que l'habitude, et vous continuez vers le Colisée.

                Mais... vous vous sentez un peu éméché.e.
                
                Oups.`
        ,
        "prompt": `Peu importe. Il faut continuer...`,
        "location": "quelque part à la ville de Rome",
        "choices": [
            {
                "buttonLabel": "Avancer au Colisée",
                "nextScene": "scene1"
            },
        ],
    },
    "scene1": {
        "description": 
                `Après du temps, vous entrez enfin le cœur de la ville. Le Colisée n'est pas maintenant très loin. Vous tombez sur une forche avec trois chemins possibles. `
        ,
        "prompt": `Vous allez...`,
        "location": "quelque part à la ville de Rome",
        "choices": [
            {
                "buttonLabel": "À gauche, vers le nord de la ville.",
                "nextScene": "sceneX"
            },
            {
                "buttonLabel": "Tout droit. Il faut que le Colisée soit là, non?",
                "nextScene": "sceneX"
            },
        ]
    },
    "sceneX": {
        "description": 
                `Parfait! Mais malheureusement, il y a un problème....
                
                Le projet n'est pas encore fini! :( Désolé, cher joueur.

                Si vous voulez suivre le progrès de ce projet, regardez le lien suivant: https://github.com/kpatenio/ovniAventures. Un jour, il y aura plus à faire dans ce jeu!
                    
                Merci d'avoir regardé mon projet et n'oubliez pas de prendre soin de vous!
                `
        ,
        "prompt": `- Katherine Patenio`,
        "location": "quelque part à la ville de Rome",
        "choices": [
        ],
    },
}
   
   export default romeEvents;