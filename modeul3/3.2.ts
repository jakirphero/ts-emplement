{
    //oop inheritance

    class person {
        name: string;
        age: number;
        addr: string;
        constructor(name: string, age: number, addr: string) {
            this.name = name;
            this.age = age;
            this.addr = addr;
        }
        house(home: string) {
            console.log(` Name is ${this.name} and House name is ${home}`)
        }
    }

    class onar extends person {
        hisabKhat: string;
        constructor(name: string, age: number, addr: string, hisabKhat: string) {
            super(name, age, addr)
            this.hisabKhat = hisabKhat;
        }
        house(home: string) {
            console.log(` Name is ${this.name} and House name is ${home}`)
        }
        shop(name: string) {
            console.log(`This onar ${this.name} and shop name ${name}`)
        }
    }
    class customar extends person{
        
        constructor(name: string, age: number, addr: string) {
            super(name, age, addr)
        }
        house(home: string) {
            console.log(`Name is ${this.name} and House name is ${home}`)
        }

    }

    const res1 = new onar('jakir', 25, 'noakhali, companigon', 'ok');
    res1.house('kaml via bari');
    // console.log(res1);
}