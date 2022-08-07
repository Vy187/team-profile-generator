const Manager = require(`../lib/Manager`);
const data = {
    name: `Vy Nguyen`,
    id: `123456`,
    email: `vy1872@gmail.com`,
    officeNumber: `1`
}
const manager = new Manager(data);

describe(`Manager`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            expect(manager.name).toEqual(`Vy Nguyen`);
            expect(manager.id).toEqual(`123456`);
            expect(manager.email).toEqual(`vy1872@gmail.com`);
            expect(manager.officeNumber).toEqual(`1`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Manager's name`, () => { expect(manager.getName()).toEqual(`Vy Nguyen`) })
        it(`should return the Manager's id`, () => { expect(manager.getId()).toEqual(`123456`) })
        it(`should return the Manager's email`, () => { expect(manager.getEmail()).toEqual(`vy1872@gmail.com`) })
        it(`should return the Manager's role`, () => { expect(manager.getRole()).toEqual(`Manager`) })
        it(`should return the Manager's office number`, () => { expect(manager.getOfficeNumber()).toEqual(`1`) })
    })
})