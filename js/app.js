/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Init the game class with phrases from phrases.js
 */
const game = new Game(phrases);

/**
 * listen for click on game start
 */
document.querySelector("#btn__reset").addEventListener("click", () => {
    game.startGame();
});

/**
 * listen for click on screen keyboard
 */
document.querySelector("#qwerty").addEventListener("click", (event) => {
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
