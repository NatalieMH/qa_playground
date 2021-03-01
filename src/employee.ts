class Employee {
    id: number;
    name: string;
    phoneNumber: string;
    email: string
    constructor(id: number,name: string,phoneNumber: string,email: string) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email
    }
    toString(): string {
        let output = 
            `Employee Record --- ID: ${this.id}\n` +
            `Name: ${this.name}\n` +
            `Contact Information\n` +
            `\tPhone: ${this.phoneNumber}\n` +
            `\tEmail: ${this.email}`
            return output;
    }
}
let newEmployee = new Employee(1,"Test Person","8015551234","test@person.com");
console.log(newEmployee.toString());