/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrases) {
        this.phrases = phrases;
        this.missed = 0;
        this.activePhrase = null;
    }

    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.getRandomPhrase();
    }

    getRandomPhrase() {
        const randomKey = Math.floor(Math.random() * this.phrases.length);
        this.activePhrase = this.phrases[randomKey];
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction() {}

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}
