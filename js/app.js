/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
const game = new Game(phrases);

startGame.addEventListener("click", () => {
    game.resetGame();
    game.startGame();
});

keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});

document.addEventListener("keydown", (event) =>
    game.handleInteractionFromKeyboard(event.key)
);
