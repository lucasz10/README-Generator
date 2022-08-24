// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'appName',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your application.',
        name: 'appDesc',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'appInstall',
    },
    {
        type: 'input',
        message: 'How is this application used?',
        name: 'appUsage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'appContribute',
    },
    {
        type: 'input',
        message: 'How can the user test your code?',
        name: 'appTesting',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'appLicense',
        choices: ['Apache-2.0', 'BSD-3', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'appGitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'appEmail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file Created Successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
