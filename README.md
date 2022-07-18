# Quick Draw Doodle

Inspired by Google Quick, Draw: Can a neural network learn to recognize doodling? [Quick, Draw](https://quickdraw.withgoogle.com/)<br/>
You can play alone or with friend. In given time, both of you with try to draw the given keyword, whose draw get detected faster by neural network will win.

Tech used
====
- Typescript, React, HTML/CSS
- Dependency: 
  - react-router-dom: routing between pages
  - react-canvas-draw: canvas to draw on
  - use-react-screenshot: take screenshot of a components
  - antd button: icon button
  
How to execute
====
`npm install` to start install (node modules folder should be deleted before that)and `npm start`. Then, you can access to this project by
https://localhost:3000 <br/>
Will be deployed soon!


Demo
====
There are 2 modes: game for 1 and game for 2 (developing)<br/>
- 6 object to draw every game in 20s
- In game for 2: whose draw got detected faster by neural network will win
![home page](/screenshots/homepage.JPG "Homepage") <br/>
Before start the game, you will know which object has to be drawn
![keyword panel](/screenshots/keyword-panel.JPG "Keyword page") <br/>
Can start draw right now on the canvas! The canvas can be clear, quit the game or capture your drawing
![Alt text](/screenshots/draw-canvas.JPG "Draw canvas") <br/>
