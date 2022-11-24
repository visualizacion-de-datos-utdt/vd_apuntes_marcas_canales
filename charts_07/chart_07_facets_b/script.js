import addTooltips from "./addTooltips.js";
let chart;
d3.csv('../../data/data2000.csv', d3.autoType)
.then(data => {
  console.log(data)

  chart = Plot.plot({
  grid: true,
  line: true,
  nice:true,
  height:200,
  width: 2000,
  facet: {
    data: data,
    x: "cluster"
  },
  marks: [
    Plot.dot(data, {
      x: "fertility",
      y: "life_expect",
      fill: "cluster",
      fillOpacity: 0.5,
      r: "pop",
      title: (d) => `${d.country}`,
  })],
  color: {
    range: ["#a3c4f3", "#ffd670", "#ff9770", "#8eecf5", "#60d394", "#ffef9f" ],
  },
  x:{
    domain: [0, d3.max(data, d => d.fertility)],
  },
  y: {
    tickFormat: d3.format(".0f"),
    domain: [0, d3.max(data, d => d.life_expect)],
  },
  r: {
    range: [0, 18]
  },
});
  addTooltips(chart);
  d3.select("#chart").append(() => chart);
});
