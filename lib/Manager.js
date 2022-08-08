const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor({name, id, email, officeNumber}) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return `Manager`;
    }

    getCard() {
        return `<section class="card" style="width: 18rem;">
    <article class="card-header">
        <h3>${this.getName()}</h3>
        <h3><i class="bi bi-cup-hot-fill"></i> Manager</h3>
    </article>

    <article class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="#">${this.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${this.getOfficeNumber()}</li>
        </ul>
    </article>
</section>`
    }
}

module.exports = Manager;