const fs = require("fs");

console.log("Before reading");

fs.readFile("large.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("File reading completed");
    console.log(data);
});

console.log("After reading");