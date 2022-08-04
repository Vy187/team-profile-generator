const Intern = require(`../lib/Intern`);

describe(`Intern`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.name).toEqual(`Vy Nguyen`);
            expect(intern.id).toEqual(`123456`);
            expect(intern.email).toEqual(`vy1872@gmail.com`);
            expect(intern.school).toEqual(`None`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Intern's name`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.getName()).toEqual(`Vy Nguyen`);
        })

        it(`should return the Intern's id`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.getId()).toEqual(`123456`);
        })

        it(`should return the Intern's email`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.getEmail()).toEqual(`vy1872@gmail.com`);
        })

        it(`should return the Intern's role`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.getRole()).toEqual(`Intern`);
        })
        
        it(`should return the Intern's office number`, () => {
            const intern = new Intern(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `None`);

            expect(intern.getSchool()).toEqual(`None`);
        })
    })
})