/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
const game = new Game(phrases);

startGame.addEventListener("click", () => {
    game.startGame();
});

keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction();
    }
    console.log(event.target.tagName);
});
