const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name? (Required)',
    validate: projInput => {
      if (projInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your project. (Required)',
    validate: projInput => {
      if (projInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter any instructions needed for installation.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What information do your end users need to know about using your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license for this project?',
    choices: ["None", "BSD 3-Clause", "GNU GPL v3", "ISC", "MIT", "WTFPL"]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What information do your end users need to know about contributing to your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter any instructions needed for testing your application.',
  },
  {
    type: 'input',
    name: 'ghName',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
      if (emailInput) {
        // validate email entered is in correct format
        if (validateEmail(emailInput)) {
          return true;
        }
        else {
          console.log('\tPlease enter a valid email!');
          return false;
        }
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  }
];

// Validate that email is a valid address format
// REGEX provided by https://www.codespot.org/javascript-email-validation/
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

// Function to write README file
const writeToFile = (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'README.md File created!'
      });
    });
  });
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions) // Ask Questions for Readme
    .then(formData => generateMarkdown(formData)) // Generate the markdown
    .then(readmeData => { // Write markdown to Readme file in dist folder
      return writeToFile("./dist/README.md", readmeData);
    })
    .then(result => { // Give feedback to user 
      if (result.ok) {
        console.log(result.message);
      }
    });
}

// function call to initialize program
init();
