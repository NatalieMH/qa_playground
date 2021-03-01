let iceCreamFlavors: Array<string> = ["oreo","cookie dough", "peanut butter swirl", "mint chip", "milk and cookies", "cherry garcia", "americone dream"]

describe("Ice Cream Flavors", () => {
    it("Ice cream flavors are not the same", () => {
        expect(iceCreamFlavors[0]).not.toBe(iceCreamFlavors[1])
    })
} )
for (let i = 0; i < iceCreamFlavors.length; i++) {
console.log(`Ice Cream #${i + 1}: ${iceCreamFlavors[i]}`)
}
iceCreamFlavors.forEach((thing)) => {
    console.log(`You still need to ${thing}`)
}