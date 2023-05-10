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
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(input);
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
                const validColor = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(input);
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
    .catch((error) => {
        console.error(error);
    });