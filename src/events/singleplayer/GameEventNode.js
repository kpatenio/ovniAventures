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

export default GameEventNode;