{
    //promis
    type TodoData = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }
    const getTodo = async(): Promise<TodoData> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json();
        // console.log(data)
        return data;
    }

    getTodo()

    type Something = {
        name: string;
    }
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {name: "something"};
            if (data) {
                resolve(data);
            }
            else {
                reject('failde to data load')
            }
        })
    };

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        // console.log(data)
        return data;
    }
    
    
}