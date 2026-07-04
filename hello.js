// Hello World Program with personality
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello World!");
console.log("Welcome to my CSE310 Hello World project!\n");

readline.question("What's your name? ", (name) => {
    console.log(`\nNice to meet you, ${name}!`);
    console.log(`Hello World from ${name}!`);
    readline.close();
});