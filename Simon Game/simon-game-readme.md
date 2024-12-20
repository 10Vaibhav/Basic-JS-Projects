# Simon Game

A web-based implementation of the classic Simon memory game where players need to remember and repeat increasingly complex sequences of colors and sounds.

## Description

Simon is an electronic memory game where players must repeat random sequences of colors by clicking on the corresponding colored buttons in the correct order. The game gets progressively harder as players successfully complete each sequence, with each level adding one more step to remember.

## Features

- Four colored buttons (red, blue, green, yellow)
- Sound effects for each button
- Progressive difficulty levels
- Visual animations for button presses
- Game over animation and sound
- Score tracking by level

## How to Play

1. Press any key to start the game
2. Watch the sequence of colors that the game shows you
3. Click the colored buttons in the same sequence
4. If you get the sequence correct, you'll advance to the next level
5. If you get the sequence wrong, the game will end
6. Press any key to restart after a game over

## Dependencies

- jQuery (included via CDN)

## Game Logic

- The game creates a random sequence of colors
- Player must repeat the sequence correctly
- Each successful round adds one more color to the sequence
- Game ends if player makes a mistake
- Score is tracked by level number

## CSS Classes

- `.btn`: Basic button styling
- `.pressed`: Animation for button press
- `.game-over`: Styling for game over state

## Functions

- `nextSequence()`: Generates the next color in the sequence
- `playSound()`: Plays the corresponding sound for each color
- `animatePress()`: Handles button press animation
- `checkAnswer()`: Verifies if the player's input matches the sequence
- `startOver()`: Resets the game to initial state

