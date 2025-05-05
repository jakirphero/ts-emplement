{
    function add(num1: number, num2: number = 0): number {
        return num1 + num2;
    }
    add(2, '2');

    const result = (num1: number, num2: number): number => num1 + num2;

    //object method aniomas function create

    const device = {
        name: 'dell',
        price: 0,
        addPrice(price: number): string {
            return `My Price: ${this.price + price}`;
        }
    }

    //map
    const frientList: number[] = [1, 3, 4, 5];
    const newList: number[] = frientList.map((list: number): number => list * list);
}