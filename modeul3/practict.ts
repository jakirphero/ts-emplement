{
    //public 
    // class Greeter {
    //     public greet(){
    //         console.log('hello')
    //     }
    // }

    //protected 
    class Greeter {
        public greet() {
            console.log("hello, " + this.getName())
        }
        protected getName(): string {
            return "hi"
        }
    }

    class SpecialGreeter extends Greeter {
        public howdy() {
            console.log("howdy, " + this.getName())
        }
    }

    // const res2 = new SpecialGreeter();
    // res2.greet();

    class Animal {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        bark() {
            console.log(`Woof! My name is ${this.name}`)
        }
    }
    // const res = new Greeter();
    // res.greet()
    // const res1 = new Dog('jakir')
    // res1.bark()

    //private
    class Base {
        private x: number = 0;
    }

    class Derived extends Base {
        ShowX() {
            //Property 'x' is private and only accessible within class 'Base'.ts(2341)
            //(property) Base.x: number
            // console.log(this.x)
        }
    }

    const b = new Base()
    // console.log(b);

    // static 
    class MyClass {
       static x = 0;
       static printX(){
            console.log(MyClass.x);
        }
    }
    console.log(MyClass.x);

}