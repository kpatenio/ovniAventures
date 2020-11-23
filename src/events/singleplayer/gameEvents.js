/**
 * This will represent the series of available events and player choices throughout the game. If a value is null, this means that there is no "label" as a choice; this can be a beginning event or an ending event.
 * 
 * @param {String} value - the label that is displayed when a particular event is available as a choice to the player
 * @param {ReactElement} description - the story text for an event to be rendered as text in the story panel - should be surrounded by React fragments
 * @param {ReactElement} prompt - the story text for an event to be rendered as a prompt to influence a player choice - should be surround by React fragments
 * @param {String} location - the location of the current event to be rendered as text in the story panel
 */
class GameEventNode {
    constructor(value, description, prompt, location) {
        this._value = value;
        this._description = description;
        this._prompt = prompt;
        this._location = location;
        this._parent = null; // by default value; must be set if not a root node
        this._children = []; // push into here other GameEventNodes
    }

    set parent(node) {
        this._parent = node;
    }

    pushChild(index, node) {
        this._children[index] = node;
    }

    removeChild(index, node) {
        this._children[index] = node;
    }

    get value() {
        return this._value;
    }

    get description() {
        return this._description;
    }

    get prompt() {
        return this._prompt;
    }

    get location() {
        return this._location;
    }

    get parent() {
        return this._parent;
    }

    get children() {
        return this._children;
    }
}

// Test code for creating game tree
let newGameRome;
export const initializeGame = () => {
    newGameRome = new GameEventNode(
        null,
        <>
            Ah! quel matin magnifique et ensoleillé. Aujourd'hui, c'est la finale du tournoi au Colisée! Vous attendez ce grand moment depuis longtemps. Enthousiaste, vous vous levez et vous vous préparez pour le jour. Vous avez envie de manger un répas délicieux et copieux.
        </>,
        <>
            Qu'est-ce que vous voudriez consommer?
        </>,
        "quelque part à la ville de Rome"
    );
    newGameRome.pushChild(0, new GameEventNode(
        "Du pain, comme d'habitude.",
        <>
            Test description!
        </>,
        <>
            Test prompt!
        </>,
        "Test location!"
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
    console.log(newGameRome)
}

export const getEventNode = (value, choiceIndex) => {
    if (newGameRome.value === null && choiceIndex != null) {
        // console.log(newGameRome.children[choiceIndex])
        return newGameRome.children[choiceIndex]
    }
}

const gameEvents = {
 "rome": {
     "scene0": {
        "description": (
            <>
                Ah! quel matin magnifique et ensoleillé. Aujourd'hui, c'est la finale du tournoi au Colisée! Vous attendez ce grand moment depuis longtemps. Enthousiaste, vous vous levez et vous vous préparez pour le jour. Vous avez envie de manger un répas délicieux et copieux.
            </>
        ),
        "prompt": (
            <>
                Qu'est-ce que vous voudriez consommer?
            </>
        ),
        "location": "quelque part à la ville de Rome",
        "choices": [
            "Du pain, comme d'habitude.",
            "De la viande.",
            "Pas de nourriture! Plutôt... du vin!"
        ],
        "nextEvent": {

        }
     },
     "scene1": {
        "description": (
            <>
                Ah! quel matin magnifique et ensoleillé. Aujourd'hui, c'est la finale du tournoi au Colisée! Vous attendez ce grand moment depuis longtemps. Enthousiaste, vous vous levez et vous vous préparez pour le jour. Vous avez envie de manger un répas délicieux et copieux.
            </>
        ),
        "prompt": (
            <>
                Qu'est-ce que vous voudriez consommer?
            </>
        ),
        "location": "quelque part à la ville de Rome",
        "choices": [
            "Du pain, comme d'habitude.",
            "De la viande.",
            "Pas de nourriture! Plutôt... du vin!"
        ]
     }
 }   
}

export default gameEvents;