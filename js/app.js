/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
/**
 * Init the game class with phrases from phrases.js
 */
const game = new Game(phrases);

/**
 * listen for click on game start
 */
startGame.addEventListener("click", () => {
    game.startGame();
});

/**
 * listen for click on screen keyboard
 */
keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});

/**
 * Listen for keydown on keyboard
 */
document.addEventListener("keydown", (event) =>
    game.handleInteractionFromKeyboard(event.key)
);
