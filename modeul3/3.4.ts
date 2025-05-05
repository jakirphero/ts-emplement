{
    class person {
        constructor(public name: string, public age: number, public addr: string) {
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
        shop(address: string) {
            console.log(`This onar ${this.name} and shop name ${address}`)
        }
    }
    class customar extends person {

        constructor(name: string, age: number, addr: string) {
            super(name, age, addr)
        }
        bike() {
            console.log('have a bike')
        }

    }

    //better way

    const checkId = (identy: person): identy is customar => {
        return identy instanceof customar
    }
    const checkId2 = (identy: person): identy is onar => {
        return identy instanceof onar
    }

    const getUser = (identy: person) => {
        if (checkId(identy)) {
            identy.bike();
        } else if (checkId2(identy)) {
            identy.shop('super market');
        }
        else {
            console.log('this is not true')
        }

    }

    const res1 = new customar('kak', 22, 'probari')
    const res2 = new onar('jakir', 33, 'noakhali', 'ok');
    getUser(res1)
}