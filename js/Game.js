/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
/**
 * Game class
 */
class Game {
    constructor(phrases) {
        this.phrases = phrases;
        this.missed = 0;
        this.activePhrase = null;
    }

    /**
     * Start the game, remove overlay and get random phrase
     */
    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Reset the game after is finish
     */
    resetGame() {
        const phraseSection = document.querySelector("#phrase");
        phraseSection.firstElementChild.remove();
        phraseSection.innerHTML = "<ul></ul>";

        this.missed = 0;
        this.activePhrase = null;

        document.querySelector("#number-of-lives").innerText = 5;

        const keyboardKeys = document.querySelectorAll(".key");
        for (let key of keyboardKeys) {
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        }

        const AllTries = document.querySelectorAll(".tries");

        for (const live of AllTries) {
            live.firstElementChild.src = "images/liveHeart.png";
            live.classList.remove("animate__swing");
            live.classList.add("alive");
        }
    }

    /**
     * Get random phrase and returns the phrase
     *
     * @returns string Random Phrase
     */
    getRandomPhrase() {
        const randomKey = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomKey];
    }

    /**
     * Handle interaction and check letter if not tested.
     *
     * @param {HTMLElement} letterElement The element that received the click event
     * @returns
     */
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

    /**
     * Handle interaction from keyboard event. and filter to react on only letter key a - z, abort if active phrase is null
     *
     * @param {string} PressedKey The key property from the pressed key
     */
    handleInteractionFromKeyboard(PressedKey) {
        if (this.activePhrase == null) {
            return;
        }

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

    /**
     * Make a blue heart grey and increment missed property, and print number og remaining lives
     * @returns
     */
    removeLife() {
        this.missed += 1;

        /**
         * Look fore the first live with the class .alive and remove that class to prepare to remove the next live
         */
        const heart = document.querySelector(".alive");
        heart.firstElementChild.src = "images/lostHeart.png";
        heart.classList.add("animate__swing");
        heart.classList.remove("alive");

        document.querySelector("#number-of-lives").innerText = 5 - this.missed;

        if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Check if user has guessed all letters
     *
     * @returns boolean true if all letters is correct shown
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) return true;

        return false;
    }

    /**
     *  Function to run when game is finished, show the overlay, set ether win or lose message, call reset game
     *
     * @param {boolean} win true if use has guessed all letters
     */
    gameOver(win) {
        const gameOverlay = document.querySelector("#overlay");
        const gameOverMessage = document.querySelector("#game-over-message");
        gameOverlay.style.display = "";
        gameOverlay.lastElementChild.focus();
        if (win) {
            gameOverMessage.innerText = `Congratulations \n The phrase was: "${
                this.activePhrase.phrase.charAt(0).toUpperCase() +
                this.activePhrase.phrase.slice(1)
            }"`;
            gameOverlay.className = "win";
        } else {
            gameOverMessage.innerText = "Better luck next time";
            gameOverlay.className = "lose";
        }
        this.resetGame();
    }
}
