// https://hypeauditor.com/top-tiktok-argentina/ 
d3.csv('../../data/data2000.csv', d3.autoType)
.then(data => {
  console.log(data)

  let chart = Plot.plot({
  grid: true,
  line: true,
  nice:true,
  marks: [
    Plot.dot(data, {
      x: "fertility",
      y: "life_expect",
      fill: "cluster",
      fillOpacity: 0.5,
      r: "pop",
      sort: { x: "y"},
  })],
  color: {
    legend: "ramp",
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
  d3.select("#chart").append(() => chart);
});
