# Quick Draw Doodle

Inspired by Google Quick, Draw: Can a neural network learn to recognize doodling? [Quick, Draw](https://quickdraw.withgoogle.com/)<br/>
You can play alone or with friend(under developing). In given time, both of you with try to draw the given keyword, whose draw get detected faster by neural network will win.

Tech used
====
- Frontend:
  - Typescript, React, HTML/CSS
  - Dependency: 
    - react-router-dom: routing between pages
    - react-canvas-draw: canvas to draw on
    - use-react-screenshot: take screenshot of a components
    - antd button: icon button
- Backend: 
  - CNN model:
    - Model: Tensorflow (developed on Google Colab) 
    - Data: Google Doodle data
  - Server: Flask
  
How to execute
====
- Backend: <br/>
Go to `backend` folder, run `flask run` to start back end server 
- Frontend: <br/>
`npm install` to start install (node modules folder should be deleted before that)and `npm start`. Then, you can access to this project by
https://localhost:3000 <br/>


Demo
====
There are 2 modes: game for 1 and game for 2 (developing)<br/>
- 6 object to draw every game in 20s
![home page](/screenshots/homepage.JPG "Homepage") <br/>
Before start the game, you will know which object has to be drawn
![keyword panel](/screenshots/keyword-panel.JPG "Keyword page") <br/>
Can start draw right now on the canvas! The canvas can be clear, quit the game or capture your drawing
![Alt text](/screenshots/preview.JPG "Draw canvas") <br/>
The prediction of the model of your draw is show right at the below
Model development: learn from the work on [Quick Draw](https://github.com/akshaybahadur21/QuickDraw)<br/>