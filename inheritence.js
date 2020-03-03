class Parent {
    constructor(fname) {
        this.fathername = "Tommy";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }

    fullName() {
        return `${this.name} ${this.fathername}`
    }
}

const baby1 = new Child("Tom");
const baby2 = new Child("Jerry");

console.log(baby1);
console.log(baby2);
console.log(baby2.fullName());