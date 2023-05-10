const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
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
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):',
            validate: (input) => {
                const validLength = input.length > 0;
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$|^([a-z]+)$/i.test(input);
                if (!validLength) {
                  return 'Empty inputs are not allowed, please try again.';
                }
                if (!validColor) {
                  return 'Please enter a valid color keyword or hexadecimal number.';
                }
                return true;
            },
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal number):',
            validate: (input) => {
                const validLength = input.length > 0;
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$|^([a-z]+)$/i.test(input);
                if (!validLength) {
                  return 'Empty inputs are not allowed, please try again.';
                }
                if (!validColor) {
                  return 'Please enter a valid color keyword or hexadecimal number.';
                }
                return true;
            },
        },
    ])
    .then((answers) => {
        let shape;
        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(answers.shapeColor);
                break;
            case 'square':
                shape = new Square(answers.shapeColor);
                break;
            default:
                throw new Error(`Invalid shape: ${answers.shape}`);
        }
        const svg = shape.toSVG(answers.text, answers.textColor);
        fs.writeFileSync('examples/${answers.shape}.svg', svg);
        console.log('Successfully generated ${answers.shape}.svg in the examples folder!');
    })
    .catch((error) => {
        console.error(error);
    });