const Intern = require('../lib/Intern.js')

test('creates an Intern object, checks its values', () => {
    const intern = new Intern('Kelly', "1", "email@address.com");

    expect(intern.name).toBe('Kelly');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getID()).toEqual(expect.any(String));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
})