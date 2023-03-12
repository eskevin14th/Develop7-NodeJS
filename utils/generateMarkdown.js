// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD-3':
      return '[![License](https://img.shields.io/badge/License-BSD3-green.svg)](https://opensource.org/licenses/BSD-3-Clause)';      
    case 'GPL':
      return '[![License](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl.html)';
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'Unlicense':
      return '[![License](https://img.shields.io/badge/License-Unlicense-green.svg)](https://unlicense.org/)';
    default:
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, title) {
  if(license == "Apache"){
    return `
  ${title} is distributed under the Apache license.
  More information can be found here: https://opensource.org/licenses/Apache-2.0`;
  }  
  else if(license == "BSD-3"){
    return `
  ${title} is distributed under the BSD-3 license.
  More information can be found here: https://opensource.org/licenses/BSD-3-Clause`;
  }
  else if(license == "GPL"){
    return `
  ${title} is distributed under the GPL license.
  More information can be found here: https://www.gnu.org/licenses/gpl.html`;
  }
  else if(license == "MIT"){
    return `
  ${title} is distributed under the MIT license.
  More information can be found here: https://opensource.org/licenses/MIT`;
  }
  else if(license == "Unlicense"){
    return `
  ${title} is distributed under the Unlicense.
  More information can be found here: https://unlicense.org/`;
  }
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, title) {
  if(license !== "No License"){
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license, title);
  return `## License
${licenseBadge}
${licenseLink}
`;
}
  else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license, data.title);
  return `# ${data.title}
## Description
${data.description}
${data.projectImage}
## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributors">Contributors</a>
- <a href="#license">License</a>
- <a href="#questions">Questions</a>
- <a href="#tests">Tests</a>
## Installation
${data.installation}
## Usage
${data.usage}
![Project Image](utils/${data.projectImage})
${data.projectVideo}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
Visit https://github.com/${data.github}/ or contact ${data.email} for any questions.
## Link
${data.link}
${licenseSection}
`;
}

module.exports = generateMarkdown;