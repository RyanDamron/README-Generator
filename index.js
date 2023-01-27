// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a discription of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'build',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problems',
        },
        {
            type: 'input',
            message: 'What did you learn while making this project?',
            name: 'learn',
        },
        {
            type: 'input',
            message: 'How do you install this project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How do you make contributions to this project?',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'What type of license would you like?',
            name: 'license',
            choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 2-clause', 'BSD 3-clause', 'LGPLv3', 'AGPLv3', 'No License']
        },
       ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(data.title)
    fs.writeFile(fileName, data, function (err) {
        console.log(err)
});
}
    // ## Description
    
    // Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    // - What was your motivation?
    // - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    // - What problem does it solve?
    // - What did you learn?
    
    
    // ## Installation
    
    // What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    // ## Usage
    
    // Provide instructions and examples for use. Include screenshots as needed.
    
    // To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    //     "md
    //     ![alt text](assets/images/screenshot.png)"
        
    
    // ## Credits
    
    // List your collaborators, if any, with links to their GitHub profiles.
    
    // If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    // If you followed tutorials, include links to those here as well.
    
    // ## License
    
    // The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    // ---
    
    // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    // ## Badges
    
    // ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    // Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    // ## Features
    
    // If your project has a lot of features, list them here.
    
    // ## How to Contribute
    
    // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    // `)


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        console.log(generateMarkdown(response));
        
        console.log('126 ' + JSON.stringify(response));
        var readMeContent = generateMarkdown(response);
        console.log(readMeContent);
        writeToFile("README.md", readMeContent);
        })
        
    }
    // .then((data) => {
    //     writeToFile(data);
    // })
    // writeToFile();
 

// Function call to initialize app
init();
