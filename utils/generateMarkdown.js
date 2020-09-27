// Descriptions and badges for licenses
const licenses = {
  "None" : {
    "description" : "No Licensing",
    "badge" : ""
  },
  "BSD 3-Clause" : {
    "description" : "BSD 3-Clause License",
    "badge" : "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }, 
  "GNU GPL v3" : {
    "description" : "GNU GPL v3",
    "badge" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }, 
  "ISC" : {
    "description" : "ISC License (ISC)",
    "badge" : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }, 
  "MIT" : {
    "description" : "The MIT License",
    "badge" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  "WTFPL" : {
    "description" : "The Do What the Fuck You Want to Public License",
    "badge" : "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }
}

// Generate the title and include a badge if a license is used
const generateTitle = (data) => {
  let titleContent = `# ${data.title}`;
  if (data.license !== "None")
  {
    titleContent += `
${licenses[data.license].badge}`
  }

  return titleContent;
}

// function to generate markdown for README
const generateMarkdown = (data) => {
  return `${generateTitle(data)}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
This project uses ${licenses[data.license].description}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Feel free to contact the developer at ${data.email} about contributing to [https://github.com/${data.ghName}]
`;
}

// Export this module
module.exports = generateMarkdown;
