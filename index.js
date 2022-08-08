const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const htmlPage = require(`./src/template`);
const getHtml = htmlPage.htmlTemplate;
let dataArray = ``;

const getManager = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the manager's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer) || answer.trim().length < 3) ? `Names contain letters or longer than 2 letters` : true)}
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
        }
    ]).then((answers) => {
        const manager = new Manager(answers);
        dataArray = dataArray + manager.getCard();

        inquirer.prompt([
            {
                type: `list`,
                name: `role`,
                message: `Select the following employee to add:`,
                choices: [`Engineer`, `Intern`, `Done with building the team`]
            }
        ]).then((answer) => {
            if (answer.role == `Done with building the team`) {
                fs.writeFile(`./dist/index.html`, getHtml(dataArray), (err) =>  err ? console.log(err) : console.log('Successfully created ./dist/index.html'))
            } else {
                (answer.role == `Intern`) ? getIntern() : getEngineer()
            }
        })
    })
}

const getEngineer = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the engineer's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer) || answer.trim().length < 3) ? `Names contain letters or longer than 2 letters` : true)}
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
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers);
        dataArray = dataArray + engineer.getCard();

        inquirer.prompt([
            {
                type: `list`,
                name: `role`,
                message: `Select the following employee to add:`,
                choices: [`Engineer`, `Intern`, `Done with building the team`]
            }
        ]).then((answer) => {
            if (answer.role == `Done with building the team`) {
                fs.writeFile(`./dist/index.html`, getHtml(dataArray), (err) =>  err ? console.log(err) : console.log('Successfully created ./dist/index.html'))
            } else {
                (answer.role == `Intern`) ? getIntern() : getEngineer()
            }
        })
    })
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the intern's name?`,
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer) || answer.trim().length < 3) ? `Names contain letters or longer than 2 letters` : true)}
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
            validate(answer) {return ((!/^[a-zA-Z\s]+$/.test(answer) || answer.trim().length < 3) ? `The school's name should only contain letters or abbreviation should be longer than 2 letters` : true)}
        }
    ]).then((answers) => {
        const intern = new Intern(answers);
        dataArray = dataArray + intern.getCard();

        inquirer.prompt([
            {
                type: `list`,
                name: `role`,
                message: `Select the following employee to add:`,
                choices: [`Engineer`, `Intern`, `Done with building the team`]
            }
        ]).then((answer) => {
            if (answer.role == `Done with building the team`) {
                fs.writeFile(`./dist/index.html`, getHtml(dataArray), (err) =>  err ? console.log(err) : console.log('Successfully created ./dist/index.html'))
            } else {
                (answer.role == `Intern`) ? getIntern() : getEngineer()
            }
        })
    })
}

getManager();
