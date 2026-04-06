function showChart(data) {
    console.log("\nBenchmark Results:\n");

    const maxValue = Math.max(...data.map(d => d.value), 1);

    for (let item of data) {
        const barLength = Math.round((item.value / maxValue) * 20);
        const bar = "█".repeat(barLength);

        console.log(
            `${item.label.padEnd(30)} ${bar} ${item.value}`
        );
    }
}

module.exports = showChart;