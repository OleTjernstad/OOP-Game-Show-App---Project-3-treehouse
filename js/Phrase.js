/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

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

    checkLetter(letter) {
        const regex = new RegExp(`[${letter}]`);
        return regex.test(this.phrase);
    }

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
