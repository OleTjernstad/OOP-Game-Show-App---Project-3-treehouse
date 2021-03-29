/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * Phrase class
 */
class Phrase {
    constructor(phrase) {
        /**
         * set phrase to lower case and set it as property
         */
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Add the phrase to the play board
     */
    addPhraseToDisplay() {
        const phraseSection = document.querySelector("#phrase")
            .firstElementChild;

        for (let letter of this.phrase) {
            const letterItem = document.createElement("LI");
            if (letter == " ") {
                letterItem.className = `space`;
            } else {
                letterItem.className = `hide letter ${letter}`;
                letterItem.innerText = letter;
            }
            phraseSection.append(letterItem);
        }
    }

    /**
     * Check if letter exists in phrase string
     *
     * @param {string} letter The letter to check
     *
     * @returns boolean
     */
    checkLetter(letter) {
        const regex = new RegExp(`[${letter}]`);
        return regex.test(this.phrase);
    }

    /**
     * Show all instances of the given letter
     *
     * @param {string} letter the letter to show
     */
    showMatchedLetter(letter) {
        const LetterElements = document.querySelectorAll(`.${letter}`);
        for (let element of LetterElements) {
            element.classList.remove("hide");
            element.classList.add("show");
            element.classList.add("animate__animated");
            element.classList.add("animate__flipInY");
        }
    }
}
