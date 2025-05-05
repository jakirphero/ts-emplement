{
    const list1: string[] = ['jamil', 'kamil', 'jamrul']
    const list2: string[] = ['kamrul', 'abdul', 'parul'];
    list1.push(...list2)

    const level1 = {
        html: "1 month",
        css: "1 month",
        javascript: '2 month'
    }
    const level2 = {
        ts: "1 month",
        redux: "1 month",
        nextJS: '2 month'
    }
    const courseList = {
        ...level1,
        ...level2
    }

    const firendList = (...friends: string[]) => {
        friends.forEach((friend: string)=>console.log(`HI ${friend}`))
    }
    firendList('jakir', 'kar', 'mir', 'jamil')
}