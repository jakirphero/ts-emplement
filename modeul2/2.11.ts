{
    // Utility type
    //pick

    type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo: string
    }

    type AgeName = Pick<Person, "name" | "age">;

    //omit
    type ContactInfo = Omit<Person,"name" | "age">

    //Required
    type PersonRequired = Required<Person>

    // Partial

    type PartialType = Partial<Person>

    //Readonly 

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "jaki",
        age: 12,
        email: "a@gmail.com",
        contactNo: "01873"
    }
    person1.name = 'ddd';

    //Recode 

    type Myobjet = Record<string, number>
    const EmtyObject: Record<string, unknown> = {};

    const obj1:Myobjet = {
        a: 9,
        b: 44,

    }
}