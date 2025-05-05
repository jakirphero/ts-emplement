{
    //generic with keyof

    type Owner = {
        name: string,
        age: number,
        email: string
    }
    // type Owner2 = "jakir" | 22 | "j@gmail.com" manually
    type Owner2 = keyof Owner;

    const person1: Owner2;

    const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
        return obj[key]
    }
    const user = {
        id: 1,
        name: "jk",
        age: 19

    }
    const result = getPropertyValue(user, "name")
}