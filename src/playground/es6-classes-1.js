
class Person{
    constructor(name="Anonymous",age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi! I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.` 
    }
}

class Student extends Person{
    constructor(name,age,dept){
        super(name,age);
        this.dept = dept;
    }
    hasDept(){
        return !!this.dept;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasDept()){
            description += ` Their Department is ${this.dept}`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    haslocation(){
        return !!this.homelocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.haslocation()){
            greeting += ` I'm visiting from ${this.homelocation}`;
        }
        return greeting;
    }
}


const me = new Traveller('Varun Karwa',20,'New York City');
console.log(me.getGreeting());

const other = new Traveller(undefined,undefined,"Nowhere");
console.log(other.getGreeting());