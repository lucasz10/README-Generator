function renderLicenseBadge(license) {
  if(license === 'Apache-2.0') {
    return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue)`
  } else if(license === 'BSD-3' ) {
    return `![License: MIT](https://img.shields.io/badge/License-BSD--3-blue)`
  } else if(license === 'GPL' ) {
    return `![License: GPL](https://img.shields.io/badge/License-GPL-blue)`
  } else if(license === 'LGPL' ) {
    return `![License: LGPL](https://img.shields.io/badge/License-LGPL-blue)`
  } else if(license === 'MIT' ) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue)`
  } else if(license === 'MPL-2.0' ) {
    return `![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-blue)`
  } else if(license === 'CDDL-1.0' ) {
    return `![License: CDDL-1.0](https://img.shields.io/badge/License-CDDL--1.0-blue)`
  } else if(license === 'EPL-2.0'){
    return `![License: EPL2.0](https://img.shields.io/badge/License-EPL--2.0-blue)`
  } else {
    return '';
  }
}

function renderLicenseLink(license) { 
    if(license === 'Apache-2.0') {
      return `(https://opensource.org/licenses/Apache-2.0)`
    } else if(license === 'BSD-3' ) {
      return `(https://opensource.org/licenses/BSD-3-Clause)`
    } else if(license === 'GPL' ) {
      return `(https://opensource.org/licenses/gpl-license)`
    } else if(license === 'LGPL' ) {
      return `(https://opensource.org/licenses/lgpl-license)`
    } else if(license === 'MIT' ) {
      return `(https://opensource.org/licenses/MIT)`
    } else if(license === 'MPL-2.0' ) {
      return `(https://opensource.org/licenses/MPL-2.0)`
    } else if(license === 'CDDL-1.0' ) {
      return `(https://opensource.org/licenses/CDDL-1.0)`
    } else if(license === 'EPL-2.0'){
      return `(https://opensource.org/licenses/EPL-2.0)`
    } else {
      return false;
    }
}

function renderLicenseSection(license) {
  if(!license) {
    return "";
  }

  return `## Licenses

You can find documentation for the license [here!]${license}`
}



function generateMarkdown(data) {
  return `# ${data.appName} ${renderLicenseBadge(data.appLicense)}
## Description

${data.appDesc}

## Table of Contents

  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Testing Instructions](#testing-instructions)
  * [Questions](#questions)
  * [Licenses](#licenses)

## Installation

${data.appInstall}

## Usage

${data.appUsage}

## Contribution Guidelines

${data.appContribute}

## Testing Instructions

${data.appTesting}

## Questions

  * You can view my GitHub profile [Here](https://github.com/${data.appGitHub})
  * For additonal questions you can send me an [email](mailto:${data.appEmail})

${renderLicenseSection(renderLicenseLink(data.appLicense))}

`;
}

module.exports = generateMarkdown;
