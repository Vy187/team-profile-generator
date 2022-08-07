const Intern = require(`../lib/Intern`);
const data = {
    name: `Vy Nguyen`,
    id: `123456`,
    email: `vy1872@gmail.com`,
    school: `None`
}
const intern = new Intern(data);

describe(`Intern`, () => {
    describe(`Initialization`, () => {
        it(`should create an object with a name, id, and email if provided valid arguments`, () => {
            expect(intern.name).toEqual(`Vy Nguyen`);
            expect(intern.id).toEqual(`123456`);
            expect(intern.email).toEqual(`vy1872@gmail.com`);
            expect(intern.school).toEqual(`None`);
        })
    })

    describe(`Getting return values`, () => {
        it(`should return the Intern's name`, () => { expect(intern.getName()).toEqual(`Vy Nguyen`) })
        it(`should return the Intern's id`, () => { expect(intern.getId()).toEqual(`123456`) })
        it(`should return the Intern's email`, () => { expect(intern.getEmail()).toEqual(`vy1872@gmail.com`) })
        it(`should return the Intern's role`, () => { expect(intern.getRole()).toEqual(`Intern`) })
        it(`should return the Intern's office number`, () => { expect(intern.getSchool()).toEqual(`None`) })
    })
})