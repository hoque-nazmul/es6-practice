class Student {
    constructor (sId, sName, sAddress) {
        this.id = sId;
        this.name = sName;
        this.address = sAddress;
        this.school = "FakaFaki High School"
    }
}

const student1 = new Student(12, "Anayet Ullah", 'Chittagong');
const student2 = new Student(15, "Morshed Fahim", 'Dhaka');
const student3 = new Student(20, "Touhid Ahmed", 'Agrabad, Chittagong');

console.log(student1);
console.log(student2);
console.log(student3);