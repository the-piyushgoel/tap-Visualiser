function showChart(data) {
    console.log("\nBenchmark Results:\n");

    if (!data.length) {
        console.log("No data to display");
        return;
    }

    data.sort((a, b) => b.value - a.value);

    const maxValue = Math.max(...data.map(d => d.value), 1);

    const MAX_BAR_WIDTH = 30;

    for (let item of data) {
        const barLength = Math.round((item.value / maxValue) * MAX_BAR_WIDTH);

        const bar = barLength > 0 ? "█".repeat(barLength) : "░";

        console.log(
            `${item.label.padEnd(35)} ${bar} ${item.value}`
        );
    }
}

module.exports = showChart;