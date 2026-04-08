function transformData(parsed) {
    return parsed.tests.map(test => {
        const value = test.diagnostics?.rate 
            || test.diagnostics?.elapsed 
            || (test.status === "ok" ? 1 : 0);

        return {
            label: test.name,
            value: value,
            group: "default"
        };
    });
}

module.exports = transformData;