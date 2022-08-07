const Engineer = require(`../lib/Engineer`);
const data = {
    name: `Vy Nguyen`,
    id: `123456`,
    email: `vy1872@gmail.com`,
    github: `Vy187`
}
const engineer = new Engineer(data);


describe(`Engineer`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {

            expect(engineer.name).toEqual(`Vy Nguyen`);
            expect(engineer.id).toEqual(`123456`);
            expect(engineer.email).toEqual(`vy1872@gmail.com`);
            expect(engineer.github).toEqual(`Vy187`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Engineer's name`, () => { expect(engineer.getName()).toEqual(`Vy Nguyen`) })
        it(`should return the Engineer's id`, () => { expect(engineer.getId()).toEqual(`123456`) })
        it(`should return the Engineer's email`, () => { expect(engineer.getEmail()).toEqual(`vy1872@gmail.com`) })
        it(`should return the Engineer's role`, () => { expect(engineer.getRole()).toEqual(`Engineer`) })
        it(`should return the Engineer's office number`, () => { expect(engineer.getGithub()).toEqual(`Vy187`) })
    })
})