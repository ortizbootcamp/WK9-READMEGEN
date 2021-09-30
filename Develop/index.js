// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
       type: 'input',
       name: 'reponame',
       message: 'Repository Name?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Description?'
     },
     {
        type: 'input',
        name: 'install',
        message: 'Install information?'
     },
     {
        type: 'input',
        name: 'usage',
        message: 'Intended Usage?'
     },
     {
        type: 'input',
        name: 'contrib',
        message: 'Contribution Guidelines?'
     },
     {
        type: 'input',
        name: 'testing',
        message: 'Testing Instructions?'
     },
     {
        type: 'list',
        name: 'lic',
        message: 'Please choose licence type.',
        choices: []
     },
     {
        type: 'input',
        name: 'ghUser',
        message: 'Github Username?'
     },
     {
        type: 'input',
        name: 'email',
        message: 'Email?'
     }
])

const genReadMe = ({reponame, desc, install, usage, contrib, testing, lic, ghUser, email}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>${reponame}</title>
</head>
<body>

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <div class="card">
            <div class="card-header">${reponame}</div>
                <div class="card-body">
                    <p>${desc}</p>
                    <div><p>TOC</p></div>
                    <p>${usage}<br></p>
                    <p>${install}</p>
                    <p>${contrib}</p>
                    <p>${testing}</p>
                    <p>${lic}</p>
                    <p></p>

                </div>
        </div>
    </div>
</div>
</body>
</html>`
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
