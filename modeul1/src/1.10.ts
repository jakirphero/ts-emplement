{
    //
    // union type

    // type ForentDeveloper = 'fakibaji' | 'jonior developer'
    // type FullStackDeveloper = 'fakibaji' | 'Expert developer';
    // type Developer = ForentDeveloper | FullStackDeveloper;

    // const newDeveloper: Developer = "jonior developer";

    // type User = {
    //     name: string,
    //     contact?: number,
    //     addre: string,
    //     gender: 'Male' | 'female',
    //     bloodGroup: 'A+' | 'o+' | 'A-' | '0-'
    // }

    // const user1: User = {
    //     name: 'jakir',
    //     addre: 'noakhali',
    //     gender: 'Male',
    //     bloodGroup: '0-'
    // }
    type FroentendDeveloper = {
        skill: string[],
        desination1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skill: string[],
        desination2: 'Backend Developer'
    }
    type FullStackDeveloper = FroentendDeveloper & BackendDeveloper;
    const fullstackDeveloper: FullStackDeveloper = {
        skill: ['Html', 'CSS', 'Express'],
        desination1: 'Frontend Developer',
        desination2: 'Backend Developer'
        
    }
    //
}