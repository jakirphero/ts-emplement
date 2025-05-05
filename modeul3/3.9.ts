{
    // abstraction
    //idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        moveEngine(): void;
    }

    //real implement
    class Car implements Vehicle {
        startEngine(): void {
            console.log('car engin is start')
        }
        stopEngine(): void {
            console.log('car is stop')
        }
        moveEngine(): void {
            console.log('car is running')
        }
    }

    const maroty = new Car();
    maroty.startEngine()


    //abstract class this is leader j idea dibe child class
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract moveEngine(): void;
    }

    //child class
    class tohoyata extends Car2 {
        startEngine(): void {
            console.log('this is car is start')
        }
        stopEngine(): void {
            console.log('this is car is stop');
        }
        moveEngine(): void {
            console.log('car is running');
        }
    }

    // const jamiCar= new tohoyata();
    // tohoyata.startEngine()
}