const inquierer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/cardTemplate');
const directory = path.resolve(__dirname, 'dist');
const filePath = path.join(directory, 'index.html');

let allTeamMembers = [];

const managerQuestions = () => {
    return inquierer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the team manager's name:"
        },
        {
            type: 'input',
            name: 'mangerID',
            message: "Enter the team manager's ID number:"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the team manager's email address:"
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Enter the team manager's office number:"
        }
    ])
};

const nextInput = teamData => {
    if (teamData.managerName) {
        //convert into class Instance 
        const newManager = new Manager(teamData.managerName, teamData.mangerID, teamData.managerEmail, teamData.managerOffice);
        allTeamMembers.push(newManager);
    }
    else if (teamData.engineerName) {
        //convert into class Instance 
        const newEngineer = new Engineer(teamData.engineerName, teamData.engineerID, teamData.engineerEmail, teamData.githubName);
        allTeamMembers.push(newEngineer);
    }
    else if (teamData.internName) {
        //convert into class Instance 
        const newIntern = new Intern(teamData.internName, teamData.internID, teamData.internEmail, teamData.school);
        allTeamMembers.push(newIntern);
    }

    inquierer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: "Add an engineer, an intern, or finish building your team:",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]).then(response => {
        switch (response.selection) {
            case "Engineer":
                engineerQuestions().then(nextInput);
                break;
            case "Intern":
                internQuestions().then(nextInput);
                break;
            default:
                console.log("Generating HTML...");
                // console.log(allTeamMembers);
                const htmlformat = pageTemplate(allTeamMembers); //hrlper code 
                //console.log(htmlformat);
                //fs.writefile with the html format
                return fs.writeFile(filePath, pageTemplate(allTeamMembers), err => {
                    // console.log(allTeamMembers);
                    if (err) throw new Error(err);
                    console.log('File created at ' + filePath);
                }); 
                process.exit(0);
                break;
        }
    })
};

const engineerQuestions = () => {
    return inquierer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the engineer's name:"
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Enter the engineer's ID number:"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the engineer's email address:"
        },
        {
            type: 'input',
            name: 'githubName',
            message: "Enter the engineer's github username:"
        }
    ])
};

const internQuestions = () => {
    return inquierer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name:"
        },
        {
            type: 'input',
            name: 'internID',
            message: "Enter the intern's ID number:"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the intern's email address:"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:"
        }
    ])
};

managerQuestions()
    .then(nextInput)