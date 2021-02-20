class AnEmployee {
    name: string
    title: string
    constructor (name:string, title: string) {
        this.name = name
        this.title = title
    }
}
/**
 * This functional will use the class AnEmployee, print the employee in the console.
 * @param AnEmployee data - You MUST use the class AnEmployee to format the employee correctly. 
 Th*/
 function practice (data: AnEmployee) {
    if(data.name === "Andrew") {
        console.log(data.name)
    }
    else {
        console.log('That is not Dre')
    }
    if(data.title === 'CEO') {
        console.log('Whoa')
    }
    else {
        console.log('Not CEO')
    }
}
let myEmployee = new AnEmployee('Mars','CEO');

practice(myEmployee);