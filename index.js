// Global variables for requirement to use Node modules.
const inquirer = require('inquirer');
const fs = require('fs');

// Global variable to use local module to define the shape classes.
const { Circle, Triangle, Square } = require('./lib/shapes');

// Inquirer promise chain to prompt user with questions.
inquirer
    .prompt([
        {
            // Prompt for text input up to 3 character limit.
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            // Validate function to prevent more than 3 characters & empty input string.
            validate: (input) => {
                const validLength = input.length <= 3;
                const validInput = input.trim() !== '';
                if (!validLength) {
                  return 'Please enter up to three characters only.';
                }
                if (!validInput) {
                  return 'Empty inputs are not allowed, please try again.';
                }
                return true;
            },
        },
        {
            // Prompt for text input for text colour.
            type: 'input',
            name: 'textColour',
            message: 'Enter the text colour ([i.e. blue, red, black] colour keyword or [#]hexadecimal number):',
            // Validate function to prevent empty inputs & check if the input is valid.
            validate: (input) => {
                const validLength = input.length > 0;
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$|^([a-z]+)$/i.test(input);
                if (!validLength) {
                  return 'Empty inputs are not allowed, please try again.';
                }
                if (!validColor) {
                  return 'Please enter a valid colour keyword or hexadecimal number.';
                }
                return true;
            },
        },
        {
            // Prompt to give a list of shapes to choose from for the user.
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            // Prompt for text input for shape colour.
            type: 'input',
            name: 'shapeColour',
            message: 'Enter the shape colour ([i.e. blue, red, black] colour keyword or [#]hexadecimal number):',
            // Validate function to prevent empty inputs & check if the input is valid.
            validate: (input) => {
                const validLength = input.length > 0;
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$|^([a-z]+)$/i.test(input);
                if (!validLength) {
                  return 'Empty inputs are not allowed, please try again.';
                }
                if (!validColor) {
                  return 'Please enter a valid colour keyword or hexadecimal number.';
                }
                return true;
            },
        },
    ])
    // Then function to transfer user answers into correct shapes to be generated.
    .then((answers) => {
        let shape;
        // Checks the value of user's shape answer and assign to a shape object.
        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.shapeColour);
                break;
            case 'triangle':
                shape = new Triangle(answers.shapeColour);
                break;
            case 'square':
                shape = new Square(answers.shapeColour);
                break;
            default:
                throw new Error(`Invalid shape: ${answers.shape}`);
        }
        // Create an SVG string to pass in user's shape object for text and text colour.
        const svg = shape.toSVG(answers.text, answers.textColour);
        // Writes the string into a .svg file under examples folder.
        fs.writeFileSync(`examples/logo.svg`, svg);
        console.log(`Successfully generated logo.svg in the examples folder!`);
    })
    // Catches any errors in the promise chain.
    .catch((error) => {
        console.error(error);
    });