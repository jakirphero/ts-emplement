{
    // basic class for OOP
    // class Card {
    //     id: number;
    //     title: string;
    //     details: string

    //     constructor(id: number, title: string, details: string) {
    //         this.id = id;
    //         this.title = title;
    //         this.details = details;
    //     }
    //     getPerson(name: string){
    //         console.log(`name: ${name}`);
    //     }
    // }
    // const res1 = new Card(2, 'baby shop', 'this is good');
    // res1.getPerson('abdul')
    // console.log(res1)

    // inheritance ------ parat to child call

    // polymorphism 
    class Product {
        getDiscount() {
            return "5% discount"
        }
    }

    class ClothingProduct extends Product {
        getDiscount(): string {
            return "15% discount on clothes!"
        }
    }
    class ElectronicsProduct extends Product {
        getDiscount(): string {
            return '10% discount on clothes!'
        }
    }

    const showDiscount = (item: Product) => {
        console.log(item.getDiscount())
    }

    const getProduct = new Product();
    const getProduct1 = new ElectronicsProduct();
    showDiscount(getProduct)
    showDiscount(getProduct1)
}