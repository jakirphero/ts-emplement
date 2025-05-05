{
    // generic with function
    const createArray = (param: string): string[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh');

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res2 = createArrayWithGeneric<number>(222);
    type User = { name: string, id: number }
    const resGenericObject = createArrayWithGeneric<User>({ name: 'jakir', id: 1 });


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res12 = createArrayWithTuple<number, string>(222, 'Bangladesh');

    const resGeneric = createArrayWithTuple<number, { name: string }>(111, { name: 'jakir' });

    const addCourse = <T>(student: T) => {
        const course = "Next Level Course";
        return {
            ...student,
            course
        }
    }
    const student1 = addCourse({
        name: "web dev",
        email: 'w@gmail.com',
        hobby: 'Travel'
    })
    const student2 = addCourse({
        name: "jhone",
        email: 'j@gmail.com',
        hasWhtch: 'aplle'
    })

    console.log(student1, student2)
}