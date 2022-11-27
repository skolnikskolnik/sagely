
# Sagely Skills Assessment 

![icon for license](https://camo.githubusercontent.com/3ccf4c50a1576b0dd30b286717451fa56b783512/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)

# Table of contents
1. [Description](#Description)
2. [Installation instructions](#Installation-instructions)
3. [Running a local instance](#Running-a-local-instance)
4. [Testing instructions](#Testing-instructions)
5. [License](#License)
6. [Questions](#Questions)
7. [Overview of Technologies](#Overview-of-technologies)

## Description: 
This is a skills assessment for Sagely. This is a web application in which the user is presented with a list of values, and the user can view more information on a separate page.

## Installation instructions: 
First time users will need to seed the database. To do so:
1. In the project root directory, navigate to the backend folder by typing in the terminal 'cd backend'
2. Run the 'npm run seed' command

Once seeded, you will need to install the node packages. 
1. Navigate to the backend folder and type 'npm install'
2. Navigate to the frontend folder and type 'npm install'

The application is installed and ready to run!

## Running a local instance:
1. Open a terminal and navigate to the backend folder. Run the command 'npm start'
2. Open a second terminal and navigate to the frontend folder. Run the command 'npm run start'

## Testing instructions: 
1. With the web app running in a browser, click "See more" on any item. 
2. Once on the other page, copy the mongoid from the URL in the browser, for example "638027e9d9a73469e090435b" from "http://localhost:3000/638027e9d9a73469e090435b"
3. Open item.test.js in the "tests" folder, which is found in the backend folder
4. On line 34, replace the existing mongoId with the one from the browser.
5. Open a terminal, navigate to the backend folder and enter 'npm run test'.

## License:  
This project is covered under the MIT License license.

## Questions
Visit my <a href='https://www.github.com/skolnikskolnik'>github page.</a> 

Email me at juliealtman215@gmail.com with any additional questions you may have. I am always happy to talk to users of my product!
    
## Overview of technologies used

The backend uses a MongoDB database run on an express server. The csv file is converted to json using the fastcsv package.

The frontend is React application using Bootstrap components and the sass node package. 

The testing is done using supertest