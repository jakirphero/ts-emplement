{
    // generic type
    // type Generic<param> = Array<param>
    type Generic<T> = Array<T>
    // const rollNumber: number[] = [1, 22, 33, 44];
    const rollNumber: Generic<number> = [1, 22, 33, 44];
    // const teacher: string[] = ['ak', 'jakir', 'fatima'];
    const teacher: Generic<string> = ['ak', 'jakir', 'fatima'];
    const bol: boolean[] = [true, false, true];

    const user: Generic<{ name: string, age: number }> = [
        { name: 'jakir', age: 22 },
        { name: 'ak', age: 25 }
    ]

    type GenericTuple<x, y> = [x, y]

    const army: GenericTuple<string, string> = ['men', 'women'];
    const userId: GenericTuple<number, { name: string, email: string }> = [
        112, { name: 'abdul', email: 'a@gmail.com' }
    ]
}