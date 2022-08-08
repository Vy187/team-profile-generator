const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor({name, id, email, github}) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return `Engineer`;
    }

    retunCard() {
        return `<section class="card" style="width: 18rem;">
    <article class="card-header">
        <h3>${this.getName()}</h3>
        <h3><i class="bi bi-gear-fill"></i> Engineer</h3>
    </article>

    <article class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="#">${this.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${this.getGithub}">${this.getGithub}</a></li>
        </ul>
    </article>
</section>`
    }
}

module.exports = Engineer;