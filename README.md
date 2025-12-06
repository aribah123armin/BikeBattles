# BikeBattles

BikeBattles is a simple browser-based HTML5 game where you control a bike and compete in basic battles/obstacles.  
The game is built using plain HTML, CSS and JavaScript (Canvas API).

---

## 🎮 How to Play

1. Open `index.html` in a modern browser (Chrome / Firefox / Edge).  
2. Press **Start** (or press **Enter**) to begin the game.  
3. Use arrow keys to control the bike:  
   - **Left Arrow**: steer/move left  
   - **Right Arrow**: steer/move right  
   - **Up Arrow** / **Space**: accelerate or jump (if implemented)  
   - **Down Arrow**: brake / slow down (if implemented)  
4. Try to avoid obstacles, beat opponents (if any), or reach a target — depending on game mode.  
5. On crash or finish, you can restart the game.

---

## 🚀 Features (planned or implemented)

- Simple bike movement: left, right, accelerate.  
- Basic obstacle detection / collision.  
- Score tracking (distance travelled / obstacles avoided / battles won).  
- Start / Restart functionality.  
- Works entirely in browser — no external dependencies.  
- Lightweight, easy to fork & modify.

---

## 🛠 How to Run / Develop

- Clone or download this repository.  
- Open `index.html` in a browser to play.  
- To develop: modify `game.js` to update logic, collisions, controls, and other mechanics.  
- Styles (if any) can be adjusted via an internal `<style>` block or external CSS.

---

## 🧑‍💻 About

This project is inspired by a minimal HTML5 template for games (e.g. games using Canvas) and aims to provide a starting point for a simple rider / bike-based game.  

Feel free to fork and extend as you like. Pull requests / suggestions welcome!


## CHALLENGES FACED
1. ImpactJS is not free anymore
ImpactJS used to be open-source but now it requires a paid license, and you cannot download it legally for free.
So students cannot access the engine required to follow Chapter 4.

2. Weltmeister Level Editor only works with old local servers
The tutorial requires Weltmeister, which only runs when:
•	PHP 5.x or older is installed
•	A local Apache server (XAMPP/MAMP) is running
Modern systems do not support these old versions, so the editor fails to open or cannot save maps.

3. The whole project requires very old JavaScript ecosystem
The book uses:
•	ES5 JavaScript
•	Deprecated browser APIs
•	Canvas rendering methods from ~2012
Modern browsers often break this setup.
This means the sample code does not run properly in today’s environment.

4. Missing “media” assets from the book
To build the game, you must copy the provided:
•	Player sprites
•	Zombie sprites
•	Bullet graphics
•	Tilesets
Without the full “media” folder, the game throws errors like:
404 – file not found: /media/player.png

5. No built-in game engine — you must code everything manually
Unlike Unity or Godot, ImpactJS requires writing everything in code:
•	Player physics
•	Collision
•	Monster AI
•	Weapons
•	Animations
•	Level loading logic
Beginners find this very difficult and time-consuming.

6. The book uses a file structure that fails in modern OS setups
For example:
/lib/game/entities/
/lib/game/levels/
If any folder is missing or named incorrectly, the game does not load.
Students commonly face errors like “cannot find module game.entities.player”.

7. Very fragile setup & many points of failure
The engine breaks if:
•	A comma is missing
•	A module name is wrong
•	A file path is mismatched
•	A sprite dimension is incorrect
This makes the whole project hard to execute smoothly.


