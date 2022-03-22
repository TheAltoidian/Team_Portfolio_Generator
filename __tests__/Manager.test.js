const Manager = require('../lib/Manager.js')

test('creates a Manager object, checks its values', () => {
    const manager = new Manager('Kelly', "1", "email@address.com");

    expect(manager.name).toBe('Kelly');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getID()).toEqual(expect.any(String));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager');
})