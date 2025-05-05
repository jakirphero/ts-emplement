{
    const addCourse = <T extends { name: string, email: string }>(student: T) => {
        const course = "Next Level Course";
        return {
            ...student,
            course
        }
    }
    const student3 = addCourse({name: 'jami', email: 'j@gmail.com'})
    const student1 = addCourse<{
        name: string,
        email: string,
        hobby: string,
    }>({
        name: "web dev",
        email: 'w@gmail.com',
        hobby: 'Travel'
    })
    const student2 = addCourse({
        name: "jhone",
        email: 'j@gmail.com',
        hasWhtch: 'aplle'
    })
}