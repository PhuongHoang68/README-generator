// TODO: Include packages needed for this application
const {writeFile} = require("./utils/generateMarkdown");

const generateMarkdown = require("./utils/generateMarkdown")

const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
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
            type: "list",
            name: "license",
            message: "Which license will you use for your project?",
            choices: ["agpl", "apache", "mit", "no license"]
        },
        {
            type: "input",
            name: "description",
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
            name: "installation",
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
            name: "usage",
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
            name: "contribution",
            message: "Enter individuals who contributed on this project with you"
        },
        {
            type: "input",
            name: "tests",
            message: "Write tests for your application here!"
        },
        {
            type: "input",
            name: "questions",
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
    console.log(data);
    return generateMarkdown.generateMarkdown(data);
})
.then(readMeMD => {
    return generateMarkdown.writeFile(readMeMD);
})
.catch(err=> {
    console.log(err);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
