d3.csv("data2000.csv", d3.autoType).then((data) => {
  console.log(data);

  let chart = Plot.plot({
    nice: true,
    line: true,
    grid: true,
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        stroke: "#666af0",
        r: "pop",
      }),
    ],
    x: {
      domain: [0, d3.max(data, (d) => d.fertility)],
    },
    y: {
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, (d) => d.life_expect)],
    },
  });
  d3.select("#chart").append(() => chart);
});
