{
    //Type ailes
    type Student = {
        name: string,
        age: number,
        gender: string,
        contact?: string,
        add: string
    }

    const student1: Student = {
        name: 'jamrul',
        age: 22,
        gender: 'male',
        contact: '0178837...',
        add: 'dhaka'
    }
    const student2: Student = {
        name: 'jamrul',
        age: 22,
        gender: 'male',
        add: 'dhaka'
    }

    type UserName = string;
    const userName: UserName = 'jakir';

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
}