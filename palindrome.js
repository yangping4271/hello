let palindrome = string => string.toLowerCase() === Array.from(string).reverse().join("").toLowerCase();

console.log(palindrome('levEl'));