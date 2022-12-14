d3.csv("data2000.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        r: "pop",
        fill: "cluster",
        opacity: 0.5,
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  });

  d3.select("#chart").append(() => chart);
});
