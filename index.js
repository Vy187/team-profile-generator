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

const getEngineer = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the engineer's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer)) ? `Names contain letters` : true)}
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the engineer's id?`,
            validate(answer) {return ((!/^[0-9]+$/.test(answer)) ? `Ids should only contain numbers` : true)}
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the engineer's email?`,
            validate(answer) {return ((!/^\S+@\S+\.\S+$/.test(answer)) ? `email format example: blah@blah.com` : true)}
        },
        {
            type: `input`,
            name: `github`,
            message: `What is the engineer's github username?`,
            validate(answer) {return ((!/^[A-Za-z0-9\-]*$/.test(answer)) ? `The github username should only letters, numbers, or hyphens` : true)}
        },
    ])
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the intern's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer)) ? `Names contain letters` : true)}
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the intern's id?`,
            validate(answer) {return ((!/^[0-9]+$/.test(answer)) ? `Ids should only contain numbers` : true)}
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the intern's email?`,
            validate(answer) {return ((!/^\S+@\S+\.\S+$/.test(answer)) ? `email format example: blah@blah.com` : true)}
        },
        {
            type: `input`,
            name: `school`,
            message: `Where did the intern graduate from?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer)) ? `The school's name should only contain letters` : true)}
        },
    ])
}

getEngineer();
