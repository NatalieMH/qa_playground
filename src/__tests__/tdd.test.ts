function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }
describe("Is this a palindrome", () => {
   it("This is a palindrome", () => {
        const palindrome: string = "racecar"
        const notPalindrome: string = "car"
        expect(palindromeChecker(palindrome)).toBe(true)
        expect(palindromeChecker(notPalindrome)).toBe(false)
   });
}
)

