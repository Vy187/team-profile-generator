const Employee = require(`../lib/Employee`);
const employee = new Employee(`Vy Nguyen`, `123456`, `vy1872@gmail.com`);

describe(`Employee`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            expect(employee.name).toEqual(`Vy Nguyen`);
            expect(employee.id).toEqual(`123456`);
            expect(employee.email).toEqual(`vy1872@gmail.com`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the employee's name`, () => { expect(employee.getName()).toEqual(`Vy Nguyen`) })
        it(`should return the employee's id`, () => { expect(employee.getId()).toEqual(`123456`) })
        it(`should return the employee's email`, () => { expect(employee.getEmail()).toEqual(`vy1872@gmail.com`) })
        it(`should return the employee's role`, () => { expect(employee.getRole()).toEqual(`Employee`) })
    })
})