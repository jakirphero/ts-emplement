{
    //polymorphism
    class Person{
        geSleep (){
            console.log('i am general person sleeping 8 hours')
        }
    }
    class Student extends Person{
        geSleep(): void {
            console.log('i am student sleeping 7 hours')
        }
    }
    class Developer extends Person {
        geSleep(): void {
            console.log('i am developer sleeping 6 hours')
        }
    }

    const getSleepingHours = (param: Person)=> {
        param.geSleep();
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    
    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)
}