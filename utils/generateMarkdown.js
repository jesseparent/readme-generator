// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Feel free to contact the developer at ${data.email} about contributing to [https://github.com/${data.ghName}]
`;
}

module.exports = generateMarkdown;
