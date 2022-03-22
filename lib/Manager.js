const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // super(id);
        // super(email);

        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;