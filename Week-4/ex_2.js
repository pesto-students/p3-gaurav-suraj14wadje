let Person = function(name,age){
    this.name = name;
    this.age = age;
}

let Teacher = function(){}

Teacher = function(name,age){
    Person.call(this,name,age);
}

Teacher.prototype.teach = function(subject){
    console.log(`${this.name} teaches ${subject}`)
};


let teacher = new Teacher("Suraj",23);
teacher.teach("javascript");

//Output 
// Suraj teaches javascript