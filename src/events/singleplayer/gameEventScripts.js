import GameEventNode from './GameEventNode';
// Test code for creating game tree
let newGameRome;
export const initializeGame = () => {
    // TODO - possibly make a new file for script making rome setting game
    // TODO - possible make initialization more dynamic rather than hardcoded (ex. objects? -> treenodes)
    newGameRome = new GameEventNode(
        null,
        <>
            Ah! quel matin magnifique et ensoleillé. Aujourd'hui, c'est la finale du tournoi au Colisée! Vous attendez ce grand moment depuis longtemps. Enthousiaste, vous vous levez et vous vous préparez pour le jour. Vous avez envie de manger un repas délicieux et copieux.
        </>,
        <>
            Qu'est-ce que vous voudriez consommer?
        </>,
        "quelque part à la ville de Rome"
    );
    newGameRome.pushChild(0, new GameEventNode(
        "Du pain, comme d'habitude.",
        <>
            Un bon choix! Le pain, un tel repas simple pour une personne modeste. Vous êtes prêt.e à vous diriger vers le Colisée. Vous marchez et suivez la route commune vers le coeur de la ville. Lors de votre voyage, vous rêviez des combattants dans le Colisée - le chaos et le plaisir du spectacle! Vous étiez presque complètement immergé.e dans votre imagination, mais votre l'expérience est soudainement coupée quand quelqu'un s'est heurté contre vous. Abasourdi, vous regardez l'étranger. L'étranger, il est... bleu? Vous n'êtes pas sûr.e parce qu'il est parti rapidement. La curiosité s'empare de vous, et vous voulez le chercher. Mais où est-il? Vous tombez sur une fourche avec trois chemins possibles.
        </>,
        <>
            Vous allez...
        </>,
        "quelque part à la ville de Rome"
    ));
    newGameRome.children[0].pushChild(0, new GameEventNode(
        "À gauche, vers le nord",
        <>
            Test nord!
        </>,
        <>
            Test nord prompt!
        </>,
        "Test location nord!"
    ));
    newGameRome.children[0].pushChild(1, new GameEventNode(
        "Tout droit",
        <>
            Test tout droit!
        </>,
        <>
            Test tout droit prompt!
        </>,
        "Test location tout droit!"
    ));
    newGameRome.children[0].pushChild(2, new GameEventNode(
        "À droite, vers le sud",
        <>
            Test sud!
        </>,
        <>
            Test sud prompt!
        </>,
        "Test location sud!"
    ));
    newGameRome.pushChild(1, new GameEventNode(
        "De la viande",
        <>
            Test description viande!
        </>,
        <>
            Test prompt viande!
        </>,
        "Test location viande!"
    ));
    newGameRome.pushChild(2, new GameEventNode(
        "Pas de nourriture! Plutôt... du vin!",
        <>
            Test description vin!
        </>,
        <>
            Test prompt vin!
        </>,
        "Test location vin!"
    ));
    
    return newGameRome;
}

export const getEventNode = (currentScene, choiceIndex) => {
    if (choiceIndex !== null) {
        // findEventNode(value)
        return currentScene.children[choiceIndex]
    } else {
        console.log('ERROR')
    }
}

// find node via pre-order traversal
// const findEventNode = (value) => {
//     if (value !== null) {
//         newGameRome.children.forEach(element => {
//             console.log(`searching... current value is ${value} while looking at ${element.value}`)
//             if (value === element.value) {
//                 console.log('found it!')
//                 return;
//             }
//         });   
//     }
// }