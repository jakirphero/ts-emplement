{
    //oop class
    class Shop {
        // public name: string;
        // public addr: string;
        // public onar: string
        constructor(public name: string, public addr: string, public onar: string) {
            // this.name = name;
            // this.addr = addr;
            // this.onar = onar;
        }
        makeOnarAdd() {
            console.log(`The Shop Name ${this.name} and Onar ${this.onar}`)
        }
    }

    const res1 = new Shop('super market', 'noakhai', 'jakir');

    res1.makeOnarAdd()
    console.log(res1)
}