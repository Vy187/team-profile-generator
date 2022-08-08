const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor({name, id, email, school}) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }

    getCard() {
        return `<section class="card" style="width: 18rem;">
    <article class="card-header">
        <h3>${this.getName()}</h3>
        <h3><i class="bi bi-mortarboard-fill"></i> Intern</h3>
    </article>

    <article class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="#">${this.getEmail()}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
    </article>
</section>`
    }
}

module.exports = Intern;