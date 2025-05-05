{
    type Generic<T> = Array<T>

    const classRoll: Generic<number> = [1, 2, 4, 5, 6];
    const userName: Generic<string> = ['jkir', 'abdul', 'kamrul'];
    const bole: Generic<boolean> = [true, false, true]

    //send object
    const user: Generic<{ name: string, age: number }> = [
        { name: 'jakir', age: 22 },
        { name: 'abr', age: 33 }
    ]

    //tuple
    type GenericTuple<Y, X> = [Y, X]

    const army: GenericTuple<string, string> = ['abdul', 'kar']
    const userId: GenericTuple<number, { name: string, age: number, hobby: string }> = [
        111,
        {
            name: 'soltan',
            age: 22,
            hobby: 'tour'
        }
    ]

    //function
    function identity<T>(arg: T) {
        return arg
    }

    const res1 = identity<string>('5');

    function firstElement<T>(arr: T[]): T | undefined {
        return arr[0];
    }

    const firstNum = firstElement([1, 2, 3]);
    const firstStr = firstElement(["a", "b", "c"]);

    //constain 

    function logLength<T extends { length: number }>(item: T): T {
        return item
    }

    const res2 = logLength("hello")
    const res3 = logLength([1, 2, 4])


    const addCourse = <T extends {name: string, email: string}>(student: T) => {
        const course = 'Next Level Web development';
        return {
            ...student,
            course
        }
    }
    const result = addCourse({name: 'jakir', email: 'j@gmail.com'})
    console.log(result)
    

}