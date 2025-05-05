{
    //interface
    type User1 = {
        name: string,
        age: number
    }
    type UserWithRole = User1 & { role: string }
    interface User2 {
        name: string,
        age: number
    }
    interface UserWithRole2 extends User2 {
        role: string
    }
    const user1: UserWithRole = {
        name: 'jakir',
        age: 22,
        role: 'meneger'
    }

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const roll1: Roll1 = [1, 2, 3];

    type Add1 = (num1: number, num2: number) => number

    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add1: Add2 = (num1, num2) => num1 + num2;

}