#!/usr/bin/env node
// compress.js

const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

if (process.argv.length < 4) {
  console.log("Usage: node compress.js <inputFile> <outputFile.gz>");
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Show original file size
const originalSize = fs.statSync(inputFile).size;
console.log("📦 Original size:", originalSize, "bytes");

const readStream = fs.createReadStream(inputFile);
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream(outputFile);

let totalBytesProcessed = 0;

// Progress Counter
readStream.on("data", (chunk) => {
  totalBytesProcessed += chunk.length;
  process.stdout.write(`Progress: ${((totalBytesProcessed / originalSize) * 100).toFixed(1)}%\r`);
});

// Pipe Streams
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on("finish", () => {
    const compressedSize = fs.statSync(outputFile).size;
    console.log("\n✅ Compression complete!");
    console.log("📉 Compressed size:", compressedSize, "bytes");
  })
  .on("error", (err) => {
    console.error("❌ Error:", err);
  });
