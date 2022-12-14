d3.csv("data2000.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        r: "pop",
        fill: "cluster",
        symbol: "cluster",
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    symbol: {
      legend: "true",
    },
  });

  d3.select("#chart").append(() => chart);
});
