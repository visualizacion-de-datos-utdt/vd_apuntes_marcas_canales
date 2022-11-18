d3.csv('../data/data2000.csv', d3.autoType)
.then(data => {
  console.log(data)

  let chart = Plot.plot({
  marks: [
    Plot.dot(data, {
      x: "fertility",
      stroke:"#666af0",
    }),
  ],
  x : {
    line:true,
    nice:true,
    domain : [0, d3.max(data, d => d.fertility)],
    grid:true
  },
  marginLeft: 120,
});
  d3.select("#chart").append(() => chart);
});


