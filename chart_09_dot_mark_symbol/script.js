d3.csv("data2000.csv", d3.autoType).then((data) => {
  createChart(data);
});

function createChart(data) {
  let chart = Plot.plot({
    height: 200,
    line: true,
    zero: true,
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "cluster",
        fill: "#666af0",
        symbol:"cluster"
      }),
    ],
    symbol: {
      legend: true,
    },
    x: {
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
}
