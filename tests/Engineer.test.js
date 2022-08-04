const Engineer = require(`../lib/Engineer`);

describe(`Engineer`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.name).toEqual(`Vy Nguyen`);
            expect(engineer.id).toEqual(`123456`);
            expect(engineer.email).toEqual(`vy1872@gmail.com`);
            expect(engineer.github).toEqual(`Vy187`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Engineer's name`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.getName()).toEqual(`Vy Nguyen`);
        })

        it(`should return the Engineer's id`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.getId()).toEqual(`123456`);
        })

        it(`should return the Engineer's email`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.getEmail()).toEqual(`vy1872@gmail.com`);
        })

        it(`should return the Engineer's role`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.getRole()).toEqual(`Engineer`);
        })
        
        it(`should return the Engineer's office number`, () => {
            const engineer = new Engineer(`Vy Nguyen`, `123456`, `vy1872@gmail.com`, `Vy187`);

            expect(engineer.getGithub()).toEqual(`Vy187`);
        })
    })
})