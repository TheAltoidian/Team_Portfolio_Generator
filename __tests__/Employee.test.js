const Employee = require('../lib/Employee.js')

test('creates an Employee object, checks its values', () => {
    const employee = new Employee('Kelly', "1", "email@address.com");

    expect(employee.name).toBe('Kelly');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getID()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual(expect.any(String));
})
