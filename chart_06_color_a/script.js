d3.csv("data2000.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: "ramp",
    },
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        stroke: "cluster",
        r: "pop",
      }),
    ],
  });

  d3.select("#chart").append(() => chart);
});
