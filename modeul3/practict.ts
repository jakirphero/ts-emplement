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

    // class company 

    // class Person
    class Person {
        public name: string = ''
        public role: string = ''
    }

    class basketballPlayer extends Person {
        public setName(name: string) {
            this.name = name
            this.role = 'BasketBall Player'
        }
        public getName() {
            return `User name: ${this.name} Role: ${this.role}`
        }
    }

    class golfPlayer extends Person {
        public setName(name: string) {
            this.name = name
            this.role = 'Golf Player'
        }
        public getName() {
            return `User name: ${this.name} Role: ${this.role}`
        }
    }

    const person1 = new basketballPlayer();
    const person2 = new golfPlayer();
    person1.setName('jk dhone');
    person2.setName('hero ji')
    console.log(person1.getName());
    console.log(person2.getName());

}