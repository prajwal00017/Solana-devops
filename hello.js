const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Piyush Mera Chuss",
    e: "xx",
    T:"x ",
  })
  );

var cowsay = require("cowsay");
var Quote = require("inspirational-quotes")
const quote = Quote.getRandomQuote()

console.log(cowsay.say({
  text: "quote",
  e: "oO",
  T: "U",
}));
