{
    // object destructureing
    const user = {
        id: 1,
        name: {
            firstName: 'jakir',
            lastName: 'hossain'
        },
        contact: '018...',
        add: 'noakhali, companigon'
    };
    const { id, name: { firstName }, contact: phoneNumber } = user;

    const myFriends = ['jamil', 'kam', 'jamrul', 'jk'];
    const [a, b, bestFriend, ...rest] = myFriends;
}