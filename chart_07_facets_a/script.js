import addTooltips from "./addTooltips.js";
let chart;
d3.csv("data2000.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    width: 2000,
    facet: {
      data: data,
      x: "cluster",
    },
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        fill: "cluster",
        fillOpacity: 0.6,
        r: "pop",
        title: (d) => `${d.country}`,
      }),
    ],
    x: {
      domain: [0, d3.max(data, (d) => d.fertility)],
    },
  });
  addTooltips(chart);
  d3.select("#chart").append(() => chart);
});
