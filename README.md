# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.


## Project content
1. server.js file is running in `localhost:3210/`
    - installed packages (express , body-parser , cors).
    - i can install them using 'npm install package_name' in terminal window.
2. app.js which consists of:
    - 1 event listener which listen to 'click' event on 'generate' button then do the instructions inside the function called 'actions'.
    - 3 asynchronous functions to get temp from 'https://api.openweathermap.org/data/2.5/weather' with api key '6272528f63a9571982c1683440edf54c', add post it into a server.js at endpoint object called 'projectData'.
    - also we get date by using 'new Date();' method.
    - get information about user feeling text box by using this line of code 
    'const feelling = document.getElementById('feelings').value;'.
    - then we use all the data we have to change user interface.
