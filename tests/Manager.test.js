const Manager = require(`../lib/Manager`);

describe(`Manager`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.name).toEqual(`Vy Nguyen`);
            expect(manager.id).toEqual(`123456`);
            expect(manager.email).toEqual(`vy1872@gmail.com`);
            expect(manager.officeNumber).toEqual(`1`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Manager's name`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.getName()).toEqual(`Vy Nguyen`);
        })

        it(`should return the Manager's id`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.getId()).toEqual(`123456`);
        })

        it(`should return the Manager's email`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.getEmail()).toEqual(`vy1872@gmail.com`);
        })

        it(`should return the Manager's role`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.getRole()).toEqual(`Manager`);
        })
        
        it(`should return the Manager's office number`, () => {
            const manager = new Manager(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `1`);

            expect(manager.getOfficeNumber()).toEqual(`1`);
        })
    })
})