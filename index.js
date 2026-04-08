const fs = require("fs");

const parseTAP = require("./src/parser");
const transformData = require("./src/transform");
const showChart = require("./src/visualizer");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: node index.js <file.tap>");
    process.exit(1);
}

const filePath = args[0];

try {
    const data = fs.readFileSync(filePath, "utf-8");

    const parsed = parseTAP(data);

    const transformed = transformData(parsed);

  
    showChart(transformed);

} catch (err) {
    console.error("Error:", err.message);
}