// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = data => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "Title",
            message: "What is the Title of your project?",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter project Title!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "Description",
            message: "Describe your project, and share some highlights.",
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter project description!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "Installation",
            message: "What is the installation guide?",
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter installation guide!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "Usage",
            message: "How do we use your project?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter how to use your project!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "Contribution",
            message: "Enter individuals who contributed on this project with you"
        },
        {
            type: "input",
            name: "Questions",
            message: "Enter your Github username& link, as well your email in case of questions",
            validate: questionsInput => {
                if (questionsInput) {
                  return true;
                } else {
                  console.log('Please enter your Github username& link, as well as your email!');
                  return false;
                }
              }
        }
    ])
}

questions()
.then(data=> {
    const readMeMD = generateMarkdown(data);
    fs.writeFile("newREADME.md", readMeMD, err=>{
        if (err) throw err;
    
        console.log("Your professional README has been completed. Check it out!")
    
    })
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
