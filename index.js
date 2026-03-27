const fs = require("fs");

function parseTAP(data) {
    const lines = data.split("\n");

    const tests = [];

    for (let line of lines) {
        line = line.trim();

        if (line.startsWith("ok") || line.startsWith("not ok")) {

            const parts = line.split(" ");

            let status;
            let id;
            let name;

            if (parts[0] === "ok") {
                status = "ok";
                id = parts[1];
                name = parts.slice(2).join(" ");
            } 
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

const file = process.argv[2];

if (!file) {
    console.log("Usage: node index.js sample.tap");
    process.exit(1);
}


const data = fs.readFileSync(file, "utf-8");

const result = parseTAP(data);


console.log(JSON.stringify(result, null, 2));