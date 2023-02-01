// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const licenses = {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPL v2': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 2-clause': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'GNU LGPL v3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'GNU AGPL v3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'


  }

const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        
        {
            type: 'input',
            message: 'Enter a description of this project:',
            name: 'description',
        },
    
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles:',
            name: 'collab',
        },
        {
            type: 'input',
            message: 'If you followed tutorials, include links to those here as well:',
            name: 'tutorials',
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer:',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Enter your GitHub user name:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
        {
            type: 'list',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/):',
            name: 'license',
            choices: Object.keys(licenses),
        },
       ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(data.title)
    fs.writeFile(fileName, data, function (err) {
        console.log(err)
});
}
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        var userLicense = licenses[data.license];
        var readMeContent = 
            
             `# ${data.title} ${userLicense}\n## Description\n${data.description}\n## Installation\n${data.install}\n## Usage\n${data.usage}\n## Credits\n${data.collab}\n## Tutorials\n${data.tutorials}\n---\n## How to Contribute\n${data.contributions}\n## Contact Me\n${data.github}\n${data.email}
            `
          
              ;
          
        
        fs.writeFile("README.md", readMeContent,
        (err) =>
        err ? console.error(err) : console.log('README Generated!'))
    })
        }
        
    
 
 

// Function call to initialize app
init();
