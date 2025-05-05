{
    // Generic with object in interface
    interface Developer<T, x = null> {
        name: string,
        age: number,
        computer: { model: string, brand: string, price: number },
        lifeStyle: T,
        bike?: x
    };

    type LifeStyle = {
        work: string, company: string, salary: number
    }

    const developer1: Developer<LifeStyle> = {
        name: 'asraf',
        age: 22,
        computer: { model: 'hp', brand: 'brand new', price: 22220 },
        lifeStyle: { work: 'dhaka', company: 'dhaka lltd', salary: 30000 }
    }

    interface LifeStyle2 {
        remote: string, salary: number
    }
    interface Bike {
        name: string,
        model: string,
        price: number
    }
    const developer2: Developer<LifeStyle2, Bike> = {
        name: 'saiful',
        age: 24,
        computer: { model: 'dell', brand: 'brand old', price: 100011 },
        lifeStyle: { remote: 'canada', salary: 3000 },
        bike: { name: 'palsar', model: 'duble desk', price: 123300 }
    }
}