d3.csv("data2000.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "fertility", y: "life_expect" })],
    x: {
      grid: true,
      line: true,
      zero: true,
      nice: true,
    },
    y: {
      zero: true,
      nice: true,
      line: true,
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
});
