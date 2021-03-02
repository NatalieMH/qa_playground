class Bird1 {
    name: string
    canFly: boolean
    hasFeathers: boolean = true
    constructor(name: string, canFly: boolean) {
        this.name = name
        this.canFly = canFly
    }
    flapWings () {  //this is a report (aka method) within the class Bird
        if(this.canFly)
            console.log(`${this.name} flaps its wings, and takes off`)
        else
            console.log(`${this.name} flaps its wings, and in the end it doesn't really matter`)
    }
}
let birds: Array<Bird> = [  //using class name instead of variable type
    new Bird1("toucan", true),
    new Bird1("ostrich", false)
]
birds.forEach((item:Bird) => { //loops through each item in the array
    item.flapWings()
})