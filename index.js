const fs = require("fs"); // file read karne ke liye

function parseTAP(data) {
    const lines = data.split("\n"); // har line alag

    const tests = [];

    for (let line of lines) {
        line = line.trim(); // extra spaces hatao

        // sirf useful lines lo
        if (line.startsWith("ok") || line.startsWith("not ok")) {

            const parts = line.split(" ");

            let status;
            let id;
            let name;

            // case 1: ok
            if (parts[0] === "ok") {
                status = "ok";
                id = parts[1];
                name = parts.slice(2).join(" ");
            } 
            // case 2: not ok
            else {
                status = "not ok";
                id = parts[2];
                name = parts.slice(3).join(" ");
            }

            tests.push({
                id: Number(id),
                name: name,
                status: status
            });
        }
    }

    return { tests };
}

// file input
const file = process.argv[2];

if (!file) {
    console.log("Usage: node index.js sample.tap");
    process.exit(1);
}

// file read
const data = fs.readFileSync(file, "utf-8");

// parse
const result = parseTAP(data);

// print
console.log(JSON.stringify(result, null, 2));