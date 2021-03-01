function addQuote(needsQuotes: string) {
  return `"${needsQuotes}"`;
}
let quote: string = "This ish is bananas B A N A N A S";
let withQuotes: string = addQuote(quote);
console.log("This is not 'quoted':", quote);
console.log("This one does have quotes", withQuotes);