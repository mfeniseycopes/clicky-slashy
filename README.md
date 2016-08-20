# clicky-slashy- a dungeon game

## MVP

clicky-slashy will be a hack 'n slash game set in a single room of a dungeon. The room will spawn with enemies of increasing quantity each time our brave hero defeats them all. Our brave hero will be attacked and can attack the enemies, reducing their hit points until one of them dies.

## Technologies, Libraries, APIs

clicky-slashy will be built using react framework to handle the enemies, dungeon and our brave hero's health. Each of these will be it's own react component with a store to handle it's current state (health for our brave hero and enemies, num enemies remaining for dungeon). HTML5 canvas element will be used for the drawing.

Depending upon the difficulty (or awfulness) at which I am able to draw little creatures I may resort to some third party visual enhancements.

## Wireframes

[Wireframes][views]
[views]: wireframes

## Backend

No backend required, but saving and levelling would be nice bonus.

## Implementation Timeline

### Day 1 - Create react components

Create framework for the dungeon, our brave hero and enemies. This will consist of basic shapes to represent them and creating the react components to handle their movement.

Components:
Dungeon - contains our brave hero, list of enemies
Player
Enemy

### Day 2 - clicky and slashy

Create a hit point system for our brave hero and enemies. Player will have higher HP and attack damage. Define collisions and how damage is given and taken. Create basic attack animations for our brave hero and enemies.

### Day 3 - much polish, game looks not horrendous, wow

Make animations for movement, attack and death. Find a dungeony image or texture to use as the dungeon background. Create "New Game" screen on game load and "Game Over" screen after the death of our brave hero.

diff
