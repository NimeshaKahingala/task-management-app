import { addTwoNumbers, convertObjectToList, divide, mockFetchData, mockFetchDataAsync } from "./util";


describe("addTwoNumbers", () => {
    test("addTwoNumbers should return 5 when pass 3 and 2", () => {
        expect(addTwoNumbers(2, 3)).toBe(5);
    })

    test("addTwoNumbers should return -2 when pass 0 and -2", () => {
        expect(addTwoNumbers(-2, 0)).toBe(-2);
    })
})

describe("convertObjectToList", () => {

    test("should return a list when pass object", () => {
        expect(convertObjectToList({ name: "liza", age: 20 })).toEqual(["liza", 20]);
    })

    test("should return a list when pass empty object", () => {
        expect(convertObjectToList({})).toEqual([]);
    })
})

describe("divide", () => {
    test("should return  2 when pass 10 and 5", () => {
        expect(divide(10, 5)).toBe(2);
    })

    test("should throw an error when pass num2 as 0", () => {
        expect(() => { divide(10, 0) }).toThrow("invalid argument");
    })
})


describe("mockFetchData", () => {
    test("should return data array", (done) => {
        function callbackfn(a) {
            expect(a).toEqual([1, 4, 6])
            done()
        }
        mockFetchData(callbackfn)
    })
})

describe("mockFetchDataAsync", () => {
    test("should return data array", async () => {
        try {
            const result = await mockFetchDataAsync(1)
            expect(result).toEqual([1, 4, 6])
        } catch (e) {
            expect(e).toBeNull()
        }

    })

    test("should throw an error", async () => {
        expect.assertions(1)
        try {
            await mockFetchDataAsync(2)
        } catch (e) {
            expect(e).toEqual(new Error("invalid user id"))
        }

    })
})