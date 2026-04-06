const fs = require("fs");

const parseTAP = require("./src/parser");
const transformData = require("./src/transform");
const showChart = require("./src/visualizer");

const file = process.argv[2];

if (!file) {
    console.log("Usage: node index.js sample.tap");
    process.exit(1);
}

const data = fs.readFileSync(file, "utf-8");

const parsed = parseTAP(data);

const transformed = transformData(parsed);

showChart(transformed);