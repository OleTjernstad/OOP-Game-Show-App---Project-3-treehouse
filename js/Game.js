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

    resetGame() {
        const phraseSection = document.querySelector("#phrase");
        phraseSection.firstElementChild.remove();
        phraseSection.innerHTML = "<ul></ul>";

        this.missed = 0;

        const keyboardKeys = document.querySelectorAll(".key");
        for (let key of keyboardKeys) {
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        }

        const scoreboard = document.querySelector("#scoreboard");

        scoreboard.firstElementChild.remove();
        const ol = document.createElement("OL");

        for (let i = 0; i < 5; i++) {
            const life = document.createElement("LI");
            life.className = "tries";
            life.innerHTML =
                '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';

            ol.appendChild(life);
        }

        scoreboard.appendChild(ol);
    }

    getRandomPhrase() {
        const randomKey = Math.floor(Math.random() * this.phrases.length);
        this.activePhrase = this.phrases[randomKey];
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(letterElement) {
        const regex = /(chosen|wrong)/;
        if (regex.test(letterElement.className)) {
            return;
        }
        if (this.activePhrase.checkLetter(letterElement.innerText)) {
            letterElement.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letterElement.innerText);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            letterElement.classList.add("wrong");
            this.removeLife();
        }
    }

    handleInteractionFromKeyboard(PressedKey) {
        const regex = /[a-z]/;
        if (regex.test(PressedKey)) {
            const keys = document
                .querySelector("#qwerty")
                .querySelectorAll(".key");
            for (const key of keys) {
                if (key.innerText == PressedKey) {
                    this.handleInteraction(key);
                }
            }
        }
    }

    removeLife() {
        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver(false);
            return;
        }
        document
            .querySelector("#scoreboard")
            .firstElementChild.lastElementChild.remove();
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) return true;
    }

    gameOver(win) {
        const gameOverlay = document.querySelector("#overlay");
        const gameOverMessage = document.querySelector("#game-over-message");
        gameOverlay.style.display = "";
        gameOverlay.lastElementChild.focus();
        if (win) {
            gameOverMessage.innerText = "Congratulations";
            gameOverlay.className = "win";
        } else {
            gameOverMessage.innerText = "Better luck next time";
            gameOverlay.className = "lose";
        }
    }
}
