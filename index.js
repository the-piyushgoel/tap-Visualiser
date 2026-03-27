const fs = require("fs");

function parseTAP(data) {
    const lines = data.split("\n");
    const tests = [];

    for (let line of lines) {
        line = line.trim();

        if (line.startsWith("ok") || line.startsWith("not ok")) {
            const parts = line.split(" ");

            let status = parts[0] === "ok" ? "ok" : "not ok";
            let id = parts[1];
            let name = parts.slice(2).join(" ");

            tests.push({
                id: Number(id),
                name: name,
                status: status
            });
        }
    }

    return { tests };
}

// read file
const file = process.argv[2];

if (!file) {
    console.log("Usage: node index.js sample.tap");
    process.exit(1);
}

const data = fs.readFileSync(file, "utf-8");
const result = parseTAP(data);

console.log(JSON.stringify(result, null, 2));