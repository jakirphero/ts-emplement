{
    // type guard
    type Newmaric = string | number;

    const add = (param1: Newmaric, param2: Newmaric): Newmaric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }
    const res = add('5', '5');

    type NormalUser = {
        name: string;
    }
    type adminUser = {
        name: string;
        Admin: "admin"
    }

    const getUser = (user: NormalUser | adminUser) => {
        if ('admin' in user) {
            console.log(`User Name is ${user.name} and Admin ${user.admin}`)
        } else {
            console.log(`User Name is Normal user ${user.name}`)
        }
    }

    const user1 : NormalUser = {
        name: 'joggle'
    }
    const user2 : adminUser = {
        name: 'jk',
        Admin: 'admin'
    }
    getUser(user1)
    getUser(user2)
}