export const addTwoNumbers = (num1, num2) => {
    const total = num1 + num2;
    return total;
}

export const convertObjectToList = (inputObject) => {
    const newList = Object.values(inputObject);
    return newList;
}

export const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("invalid argument")
    }
    const value = num1 / num2;

    return value;
}

export const mockFetchData = (callback) => {
    const data = [1, 4, 6];
    setTimeout(() => callback(data), 1000);
    //setTimeout(callback,5000,data);
}

// const abcFN = (data)=> {
//     console.log(data);
// }

export const mockFetchDataAsync = async (userId) => {
    return new Promise((resolve, reject) => {
        const data = [1, 4, 6];
        setTimeout(() => {
            if (userId === 1) {
                resolve(data)
            } else {
                reject(new Error("invalid user id"))
            }
        }, 1000);
    })
    //setTimeout(callback,5000,data);
}