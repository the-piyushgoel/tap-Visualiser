function parseTAP(data) {
    const lines = data.split("\n");
    const tests = [];

    for (let line of lines) {
        line = line.trim();

        if (line.startsWith("ok") || line.startsWith("not ok")) {
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

            tests.push({
                id: Number(id),
                name,
                status
            });
        }
    }

    return { tests };
}

module.exports = parseTAP;