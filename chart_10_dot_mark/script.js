d3.csv("data2000.csv", d3.autoType).then((data) => {
  createChart(data);
});

function createChart(data) {
  let chart = Plot.plot({
    height: 200,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "cluster",
        fill: "#666af0",
        fillOpacity: 0.6,
        r: 7,
      }),
    ],
    x: {
      grid: true,
    },
    y: {
      reverse: true,
      ticks: 5,
    },
  });
  d3.select("#chart").append(() => chart);
}
