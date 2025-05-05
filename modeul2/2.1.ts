{
    // type assertion

    let a: any;
    a = "this is anything data";
    a = 222;
    // (a as string)
    // (a as number)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 1000;
            return (`This value is string to number ${converted}`)
        }
        else if (typeof value === 'number') {
            return value * 1000
        }
        else {
            console.log('wrong input')
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('1000') as string;

}