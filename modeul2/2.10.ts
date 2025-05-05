{
    //maped type

    type ArrayOfNumber = {
        height: number,
        weight: number
    }
    //     type ArrayOfString = {
    //         height: string,
    //         weight: string
    //     }
    // type ArrayOfString = {
    //     [key in "height" | "weight"]: string;
    // }
    type ArrayOfString<T> = {
        [key in keyof T]: T[key];
    }

    const areal1: ArrayOfString<{ height: string, weight: number }> = {
        height: "100",
        weight: 100
    }
}

