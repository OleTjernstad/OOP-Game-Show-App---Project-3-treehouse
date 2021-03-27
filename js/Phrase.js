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

        console.log(phraseSection);

        for (let letter of this.phrase) {
            const letterItem = document.createElement("LI");
            if (letter == " ") {
                letterItem.className = `space`;
            } else {
                letterItem.className = `hide letter ${letter}`;
            }
            phraseSection.append(letterItem);
        }
    }

    checkLetter() {}

    showMatchedLetter() {}
}
