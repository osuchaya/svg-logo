const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js')
 

inquirer.prompt([
    {
        type: 'input',
        name: 'txt',
        message: 'Enter text',
        validate: (input) => {
            if (input.length === 3) {
            return true } else {
                return false
            }
        } 

    },
    {
        type: 'input',
        name: 'color',
        message: 'Please choose text color for the logo'
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    
    {
        type: 'input',
        name: 'shapecolor',
        message: "What color would you like the chosen shape to be?",
        
        
    }
])
.then(({txt, color, shape, shapecolor}) => {
   var data = `
   <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="" />

  <circle cx="150" cy="100" r="80" fill="${shapecolor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${txt}</text>

</svg>`
    fs.writeFile("logo.svg", data, ()=> {
        console.log("Generated logo.svg");
    }
    )
})

