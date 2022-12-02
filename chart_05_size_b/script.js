d3.csv("data2000.csv", d3.autoType).then((data) => {
  console.log(data);

  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
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
    r: {
      range: [0, 18],
    },
  });
  d3.select("#chart").append(() => chart);
});
