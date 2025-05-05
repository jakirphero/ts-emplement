{
    let age: number = 10;
    if (age >= 18) {
        // console.log('is adalt')
    } else {
        // console.log('not adult')
    }

    const isAdult = age >= 18 ? "adult" : "is not adult";
    // console.log({ isAdult });

    //nullish coalescing oparetor
    const isAuthentication = null;
    const result = isAuthentication ?? "Guest";
    console.log({result});
}