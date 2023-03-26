
 <h1 align="center"> Seat Challenge! </h1>
 


<img src="https://user-images.githubusercontent.com/96661791/227678275-d1769ab2-8bec-4153-8e1b-352740ca5e80.png" alt="Imagen de cabecera" width="100%">



# Table of contents 💥
---

- [Description](#description)
- [Challenge](#challenge)
- [User Guide](#user-guide)
- [Installation guide](#installation-guide)
- [Dependencies](#dependencies)
- [Limitations](#limitations)
- [Future implementations](#future-implementations)
- [Conclusion](#conclusion)
- [Contributing](#contributing)
- [Author](#author)


# Description 📋
---
This mower project allows you to simulate the movement of one or more mowers on a given field. The mowers can move forward, turn left or right without moving, and each has a starting position and orientation on the field.


# Challenge 🚀
---

SEAT:CODE has been asked for a really important project. We need to develop an application that helps in controlling brand new mowers from the SEAT Martorell Factory. SEAT has rolled out brand new robotic mowers that are able to cut the grass and to inspect the terrain with their cameras to identify problems in the green areas.


SEAT Martorell factory has a lot of green spaces but for the MVP, we will consider only one single green grass plateau to simply the problem.


A green grass plateau, which is curiously rectangular, must be navigated by the mowers so they can cut the grass and that their on-board cameras can get a complete view of the surrounding terrain to send to the SEAT Maintenance Office.
  
 A mower’s position and location are represented by a combination of X and Y coordinates and a letter representing one of the four cardinal compass points (N, E, S, W). The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the mower is in the bottom left corner and facing North.
 
In order to control a mower, SEAT Maintenance Office sends a simple string of letters.The possible letters are “L”, “R” and ”M”. “L” and “R” make the mower spin 90 degrees left or right respectively, without moving from its current spot. “M” means to move forward one grid point and maintain the same Heading.

Assume that the square directly North from (X, Y) is (X, Y + 1).

Input
The first line of input is the upper-right coordinates of the plateau, the bottom-left coordinates are assumed to be 0, 0.

The rest of the input is information pertaining to the mowers that have been deployed. Each mower has two lines of input. The first line gives the mower’s position, and the second line is a series of instructions telling the mower how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the X and Y coordinates and the mower’s orientation.

Each mower will be finished sequentially, which means that the second mower won’t start to move until the first one has finished moving.

#Output
The output for each mower should be its final coordinates and heading. 

Input Test Case#1:
55
12N
LMLMLMLMM
33E
MMRMMRMRRM

#Output Test Case #2:
1 3N 51E

# User guide 📋
---
To use the project, follow these steps:

Open a terminal in the root folder of the project.

This file simulate two mowers in a 5x5 field, with the following configuration:

Mower 1: starting position at (1, 2) facing north, with instructions LMLMLMLMLMLMM.
Mower 2: starting position at (3, 3) facing east, with instructions MMRMMRMRRMRRM.

Run the command to start the simulation.

The console will display the simulation result for each slicer in the following format:
Mower <mower number>: <end position>.

Mower 1: 1 3 N
Mower 2: 5 1 E

This result indicates that mower 1 ended up at position (1, 3) facing north, and mower 2 ended up at position (5, 1) facing east.

From the data.js or data.ts file you can change data or instructions to take the mower through another route and see the final result in the console. :+1:

 	
# Installation guide 🔍
---
1. Clone the repository: git clone https://github.com/lidiettes/sc-challenge.git
  
2. Install Node.js: Make sure Node.js is installed on your computer. You can download the latest version of Node.js from the official website: https://nodejs.org/en/download/
  
3. Install the dependencies: 
  ```
  npm install
  ```
4.Compile the project: After installing the dependencies, ONLY if you are in the TypesCript version remember that you have to do the following command:   
```
  npm run build
```
  
  This will compile the TypeScript code into JavaScript and generate the necessary files in the "dist" or "build" folder.
  
5. Start: 
  
  ```
  npm start
  ```
  
6. If you want check the tests:
  
  ```
  npm test
  ```

  7. It is not necessary to install TypeScript on your computer, as the project dependencies should include everything needed to compile TypeScript code into JavaScript.
 
 8. The project is made in two versions, one with javaScript in the "main" branch, and one with TypeScript in the "typescript-version" branch.  To switch branches remember to use:
 ```
 git checkout <branch> 
 ```


# Dependencies 🛠️
  
**Nodemon** : A utility that automatically restarts the Node.js application when changes are detected.
  
**Jest**: It is used for unit testing of applications and libraries.
  
**Ts-node**: It is a tool that allows you to run TypeScript code directly in Node.js without having to compile the TypeScript code to JavaScript beforehand.
  
**Typescript**: It is a software development tool used to add static typing to JavaScript. 
  
 
# Limitations 📌
---
The project does not have a graphical interface to visualise the simulation.
The movement instructions can only contain the characters L, R and M.
 
# Future implementations 💪
---
1. Add support for obstacles: You could add the ability for the mowers to detect and avoid obstacles on the lawn. This could be done using sensors or some other means of detection.

2. Implement different mowers: You could create different types of mowers with different capabilities or features. For example, some mowers might be better suited for cutting long grass, while others might be more efficient at navigating tight corners.

3. Create a graphical user interface: You could create a graphical user interface that allows users to interact with the mowers in real-time. This could be useful for monitoring the mowers' progress and making adjustments as necessary.
 
# Conclusion 🍎
---
We hope you find the Mower Control System to be a useful tool for managing your mowers on the grid. If you have any feedback or suggestions for improvement, please let us know!

# Contributing 🖇️
---
We welcome any contributions. To contribute, please follow these steps:

- Fork the repository by clicking the "Fork" button in the top right corner of this page.
  
* Clone the forked repository to your local machine by running git clone https://github.com/lidiettes/sc-challenge.gitin your terminal.
  
+ Create a new branch for your contribution by running git checkout -b [branch-name].
  
- Make your changes and test them thoroughly.
  
* Commit your changes by running git commit -m "[commit message]".
  
+ Push your changes to your forked repository by running git push origin [branch-name].
  
- Create a new pull request by navigating to your forked repository on GitHub, selecting the branch you just pushed, and clicking the "New pull request" button.
  
* Provide a clear and detailed description of your changes and why they are necessary.
  
+ We will review your pull request and provide feedback. Once it is approved, your changes will be merged.
  
- Thank you for your contributions! 🎉

# Author ✨
---
Lidia Frias :shipit:
