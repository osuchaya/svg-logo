const inquirer = require('inquirer');
const fs = require('fs');
 

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
   var data = "";
    fs.writeFile("logo.svg", data, ()=> {
        console.log("Generated logo.svg");
    }
    )
})

