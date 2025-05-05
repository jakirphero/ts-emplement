{
    //access modify
    class customar {
        public readonly id: number;
        // private _balance: number;
        protected _balance: number;
        public category: string;
        constructor(id: number, blance: number, category: string) {
            this.id = id;
            this._balance = blance;
            this.category = category;
        }
        addAmount(amount: number) {
            this._balance = this._balance + amount;
        }
        getBalance(){
            return this._balance;
        }
    }
    class otherCustomer extends customar{
        test(){
            this._balance
        }
    }
    const res1 = new customar(11, 200, 'food');
    // res1.blance = (20)
    res1.addAmount(30);
    const myBalance = res1.getBalance();
    console.log(myBalance);
}