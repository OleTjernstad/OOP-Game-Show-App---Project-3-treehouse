# OOP Game Show App - Project 4 treehouse

## HTML and style adjustments

-   Updated the provided animation library and added flip animation to the phrase
-   Made lives hearts to css classes
-   Made a number of lives counter
-   Added animation to the hearts
-   Adjusted background color on start, lose, and win screen. Made the start background yellow because I made this project at Easter
-   Changed color for chosen key color and phrase letters shown

## Project steps

-   [x] Create the Phrase class in the Phrase.js file.
    -   Properties: phrase
    -   Methods: addPhraseToDisplay, showMatchedLetter, checkLetter
-   [x] Create the Game class in the Game.js file.
    -   Properties: missed, phrases, activePhrase
    -   Methods: startGame, getRandomPhrase, handleInteraction, removeLife, checkForWin, gameOver
-   [x] Update the app.js file.
    -   Add a click event listener to the "Start Game" .
    -   Add click event listeners to each of the onscreen keyboard buttons.
-   [x] Resetting the gameboard between games.
    -   Remove all li elements from the Phrase ul element.
    -   Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
    -   Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
-   [x] Add good code comments
-   [x] Cross-Browser consistency, tested Edge and Chrome

### additional steps

-   [x] Add keyboard functionality
    -   Let players use their physical computer keyboard to enter guesses.
-   [x] Making the project your own
    -   The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color
    -   Detail your style changes in your README.md file and in your submission notes.
