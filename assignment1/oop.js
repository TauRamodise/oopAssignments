module.exports = class Person  {
    constructor(name, age, gender, interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests

    }
    say(){
        console.log(`Hi my name is ${this.name}, 
                     I am ${this.age} years old,
                     Im ${this.gender} and
                     my interest are ${this.interests}`)
    }
}


