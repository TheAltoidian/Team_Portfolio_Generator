const Engineer = require('../lib/Engineer.js')

test('creates an Engineer object, checks its values', () => {
    const engineer = new Engineer('Kelly', "1", "email@address.com");

    expect(engineer.name).toBe('Kelly');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getID()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
})