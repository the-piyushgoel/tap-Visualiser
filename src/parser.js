function parseTAP(data) {
    const lines = data.split("\n");
    const tests = [];

    let currentTest = null;
    let inYaml = false;
    let yamlData = {};

    for (let line of lines) {
        line = line.trim();

        if (!line) continue;

        if (line.startsWith("ok") || line.startsWith("not ok")) {

            if (currentTest) {
                currentTest.diagnostics = yamlData;
                tests.push(currentTest);
            }

            yamlData = {};
            inYaml = false;

            const parts = line.split(" ");

            let status, id, name;

            if (parts[0] === "ok") {
                status = "ok";
                id = parts[1];
                name = parts.slice(2).join(" ");
            } else {
                status = "not ok";
                id = parts[2];
                name = parts.slice(3).join(" ");
            }

            currentTest = {
                id: Number(id),
                name,
                status
            };
        }

        else if (line === "---") {
            inYaml = true;
        }

        else if (line === "...") {
            inYaml = false;
        }

        else if (inYaml) {
            const [key, value] = line.split(":").map(s => s.trim());
            if (key && value) {
                yamlData[key] = Number(value);
            }
        }
    }

    if (currentTest) {
        currentTest.diagnostics = yamlData;
        tests.push(currentTest);
    }

    return { tests };
}

module.exports = parseTAP;