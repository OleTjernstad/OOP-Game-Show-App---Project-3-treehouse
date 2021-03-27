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

        const keyboardKeys = document.querySelector(".key");
        for (let key of keyboardKeys) {
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        }

        document.querySelector(".scoreboard").innerHTML = `<ol>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
				</ol>`;
    }

    getRandomPhrase() {
        const randomKey = Math.floor(Math.random() * this.phrases.length);
        this.activePhrase = this.phrases[randomKey];
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
    }

    handleInteraction(letterElement) {
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

    removeLife() {
        this.missed += 1;
        document
            .querySelector("#scoreboard")
            .firstElementChild.lastElementChild.remove();
        if (this.missed === 5) this.gameOver(false);
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) return true;
    }

    gameOver(win) {
        const gameOverlay = document.querySelector("#overlay");
        const gameOverMessage = document.querySelector("#game-over-message");
        gameOverlay.style.display = "block";
        if (win) {
            gameOverMessage.innerText = "Congratulations";
            gameOverlay.className = "win";
        } else {
            gameOverMessage.innerText = "Better luck next time";
            gameOverlay.className = "lose";
        }
    }
}
