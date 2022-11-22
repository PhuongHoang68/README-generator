const fs = require("fs");

const writeFile = readMeMD => {
  return new Promise((resolve, reject)=> {
    fs.writeFile("./newREADME.md", readMeMD, err=> {
      if (err) {
        reject(err);
        return;
      } resolve({
        ok: true,
        message: "Your ReadMe has been created!"
      })
    })
  });
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link. Goes into table of content. if didnt pick license, nothing shows up in table of content. if they did, that's when the license link will show up on the readme
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
    The application is covered under the following license: 
    ${renderLicenseLink(license)}
      `;
  } else {
    return ""
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}



  ## Table of Content: 
  * [Description] (# description)
  * [License] (# license)
  * [Installation] (# installation)
  * [Usage] (#usage)
  * [Contribution] (#contribution)
  * [Tests] (#tests)
  * [Questions] (#questions)



  ## Description: 
  ${data.description}



  ## License: 
  ${renderLicenseSection(data.license)}
  


  ## Installation: 
  ${data.installation}



  ## Usage: 
  ${data.usage}



  ## Contribution: 
  ${data.contribution}



  ## Tests: 
  ${data.tests}



  ## Questions: 
  ${data.questions}


`;
}

module.exports = {generateMarkdown, writeFile};

