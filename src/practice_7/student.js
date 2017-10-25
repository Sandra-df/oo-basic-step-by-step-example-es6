const Person = require("./person.js");

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Student.prototype.introduce;
Student.prototype.introduce = function(){
    return `${this.super_introduce()} I am a Student. I am at Class ${this.klass}.`;
};

module.exports = Student;