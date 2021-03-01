function getPalindrome(word: string) {
    return word.split("").reverse().join("")
}
let palindrome: Array<string> = [
    "racecar",
    "mpm",
    "kayak",
    "wow",
    "level"
]
let notPalindrome: Array<string> = [
    "school",
    "home",
    "house",
    "palindrome",
    "comma"
]
palindrome.forEach((word) => {
    test(`looking to see if "${word}" is a palindrome`, () => {
        expect(getPalindrome(word)).toEqual(word)
    })
})