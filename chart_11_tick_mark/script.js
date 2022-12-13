d3.csv("data2000.csv", d3.autoType).then((data) => {
  createChart(data);
});

function createChart(data) {
  cluster = [0, 1, 2, 3, 4, 5];
  let chart = Plot.plot({
    height: 200,
    line: true,
    nice: true,
    x: {
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, (d) => d.fertility)],
      grid: true,
    },
    // y: {
    //   // tickFormat: d3.format(".0f"),
    //   domain: cluster,
    //   ticks: 5,
    // },
    marks: [
      Plot.tickX(data, {
        x: "fertility",
        y: "cluster",
        // stroke:"#666af0",
        strokeWidth: 1,
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
}
