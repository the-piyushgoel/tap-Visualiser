function transformData(parsed) {
    return parsed.tests.map(test => {
        return {
            label: test.name,
            value: test.status === "ok" ? 1 : 0,
            group: "default"
        };
    });
}

module.exports = transformData;