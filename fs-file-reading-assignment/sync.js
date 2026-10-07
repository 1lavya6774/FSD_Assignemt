const fs = require("fs");

console.log("Before reading");

const data = fs.readFileSync("large.txt", "utf8");

console.log("File reading completed");
console.log(data);

console.log("After reading");