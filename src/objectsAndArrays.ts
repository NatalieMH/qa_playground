var myObject = {
    firstName: "Natalie",
    lastName: "Halloran",
    age: "33"
}
console.log(myObject.firstName)
console.log(`Person:\n\t Name: ${myObject.firstName} ${myObject.lastName}\n\t Age: ${myObject.age}`)

var myArray: Array<string> = ["Hawaii","New York City","Amherst"]

myArray.forEach((thing, i) => {
    console.log(`${i + 1}. ${thing}`);
});