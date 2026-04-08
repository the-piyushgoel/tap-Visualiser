# TAP Visualizer

A simple CLI tool to parse TAP (Test Anything Protocol) output and visualize results.

## 🚀 Features

- TAP parsing
- Middleware transformation layer
- Unicode bar chart visualization

## 🧠 Architecture

TAP → Parser → Middleware → Visualizer

## Advanced Features

- YAML diagnostics parsing (rate, iterations, elapsed)
- Middleware transformation layer
- Sorted benchmark visualization

## 📦 Project Structure
```
src/
parser.js
transform.js
visualizer.js
```


## ▶️ Usage

```bash
node index.js sample.tap
```

## Benchmark results
```
should add numbers                  ██████████████████████████████ 1
should multiply numbers             ██████████████████████████████ 1
should subtract numbers             ░ 0
```