# FSD Assignment - Synchronous vs Asynchronous File Reading

## Question

Compare the execution behavior of `fs.readFileSync("large.txt")`
and `fs.readFile("large.txt", callback)`. Why is the second approach
generally preferred inside a Node.js web server?

## fs.readFileSync()

`fs.readFileSync()` is a synchronous method. It blocks the Node.js
event loop until the file has been completely read.

This means that while the file is being read, the server cannot
continue processing other JavaScript tasks or respond to other
requests.

## fs.readFile()

`fs.readFile()` is an asynchronous method. It starts the file-reading
operation and allows Node.js to continue executing other work.
Once the operation is completed, the callback function is executed
with the result.

## Why is readFile() preferred in a web server?

A web server needs to handle multiple requests efficiently. If
`readFileSync()` is used for a large file, the Node.js thread can be
blocked while waiting for the file operation to finish.

During this time, other incoming requests may have to wait.

With `fs.readFile()`, the server can continue handling other work
while the file operation is in progress. This keeps the server
responsive and improves its ability to handle multiple requests.

## Conclusion

`fs.readFileSync()` is simpler but blocking, while `fs.readFile()`
is asynchronous and non-blocking. Therefore, `fs.readFile()` is
generally preferred for file operations inside a Node.js web server.