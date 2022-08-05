const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

const getManager = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the manager's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer)) ? `Names contain letters` : true)}
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the manager's id?`,
            validate(answer) {return ((!/^[0-9]+$/.test(answer)) ? `Ids should only contain numbers` : true)}
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the manager's email?`,
            validate(answer) {return ((!/^\S+@\S+\.\S+$/.test(answer)) ? `email format example: blah@blah.com` : true)}
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `What is the manager's office number?`,
            validate(answer) {return ((!/^[0-9]+$/.test(answer)) ? `The office number should only contain numbers` : true)}
        },
    ])
}

getManager();
