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
    type Department = {
        name: string
    }

    type Employee = {
        name: string
        age: number
    }

    class TeslaCompany {
        private static role = "Admin"
        private readonly credentials: string = ''
        private departments: (Department)[] = []
        private employees: (Employee)[] = []

        constructor(cred: string) {
            this.credentials = cred
        }

        addDepartment(value: Department) {
            this.departments = [...this.departments, value]
        }

        addEmployee(value: Employee) {
            this.employees = [...this.employees, value]
        }
    }

    class TeslaEmployee extends TeslaCompany {
        private new_employee: Employee = { name: '', age: 0 }

        public setName(name: Employee): void {
            this.new_employee = name

        }
    }

    const newTeslaEmployee = new TeslaEmployee('123456')
    newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 })
    newTeslaEmployee.addDepartment({ name: 'Finance' })
    newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
    console.log(newTeslaEmployee)


}