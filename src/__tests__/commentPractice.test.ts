let arrayExample: Array<number> = []; //Initialize an empty array of type number


/*
Each time the for loop runs a new entry is added to the array arrayExample.
*/
for(let i = 0; i < 10; i ++) { 
    arrayExample.push(i + 1); 
}
/*
This test runs to confirm that arrayExample does equal [1,2,3,4,5,6,7,8,9,10]
after running through the for loop.
*/
describe("Building an array", () => {
    it("Prints an array of numbers", () => {
        expect(arrayExample).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
})
console.log(arrayExample); //Print arrayExample