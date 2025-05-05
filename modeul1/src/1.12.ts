{
    //nullable type/
    const seachName = (value: string | null) => {
        if (value) {
            console.log("Searching")
        } else {
            console.log("not Searching")
        }
    }
    seachName(null);

    //never type
    const throwError = (msg: string) => {
        throw new Error(msg);
    }
    // throwError("sorry wrong requst")

    //unknow type
    // const getSpeedCar = (value: unknown) => {
    //     if (typeof value === "number") {
    //         const convertSpeed = (value * 1000) / 36000;
    //         console.log(`This speed is ${convertSpeed} ms^-1`)
    //     } else if (typeof value === "string") {
    //         const [res, unit] = value.split(" ");
    //         const convertSpeed = (parseFloat(res) * 1000) / 36000;
    //         console.log(`This speed is ${convertSpeed} ms^-1`)
    //     }
    //     else {
    //         console.log('Wrong input')
    //     }
    // }
    // getSpeedCar(90)

    // let b:unknown = "hello world";
    // if(typeof b === "string"){
    //     console.log(b.toUpperCase());
    // }

    // const handleInput = (input: unknown) => {
    //     if(typeof input === "number"){
    //         console.log(`This is number: ${input * 2}`)
    //     }else if (typeof input === "string"){
    //         console.log(`this is input ${input.toUpperCase()}`)
    //     }
    //     else{
    //         console.log('Wrong input')
    //     }
    // }
    // handleInput('hello')

    const getSpeedCar = (value: unknown) => {
        if (typeof value === "number") {
            const convertSpeed = (value * 1000) / 3600;
            console.log(`This speed is ${convertSpeed} m/s`)
        } else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`This speed is ${convertSpeed} km/h`)
        }
        else {
            console.log('wrong input type')
        }
    }
    getSpeedCar(90)
    getSpeedCar('90 km/h')
    
}