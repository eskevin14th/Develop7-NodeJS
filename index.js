const inquirer = require('inquirer');
const fs = require('fs');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the information on how to use this project?',
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick a project license:',
    choices: licenses,
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

inquirer.prompt(questions).then((answers) => {
  createMD(answers);
});

const createMD = (data) => {
  const template = `
# ${data.title}

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.guidelines}

## Test Instructions
${data.test}

## License
${data.license}

## Questions
If you have any questions, please feel free to contact me:

GitHub: https://github.com/${data.username}

Email: ${data.email}`;

  console.log(template);
  fs.writeFile('README.md', template, (err) => {
    err ? console.log(err) : console.log('success');
  });
};

const renderLicenseBadge = (license) => {
  let badge = '';
  if (license !== 'None') {
    badge = `![License Badge](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return badge;
};

const renderLicenseLink = (license) => {
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
};

const renderLicenseSection = (license) => {
  if (license !== 'None') {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `
## License
This project is licensed under the ${license} license. Click [here](${licenseLink}) for more information.
${licenseBadge}
`;
  }
  return '';
};

const generateMarkdown = (data) => {
  const licenseSection = renderLicenseSection(data.license);
  const template = `
# ${data.title}

${licenseSection}

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.guidelines}

## Test Instructions
${data.test}

## License
${data.license}

## Questions
If you have any questions, please feel free to contact me:

GitHub: https://github.com/${data.username}

Email: ${data.email}`;

  console.log(template);
  fs.writeFile('README.md', template, (err) => {
    err ? console.log(err) : console.log('success');
  });
};
