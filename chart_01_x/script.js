// https://hypeauditor.com/top-tiktok-argentina/ 
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
  marginLeft: 120,
});
  d3.select("#chart").append(() => chart);
});


