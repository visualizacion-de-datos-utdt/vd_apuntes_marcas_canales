// https://hypeauditor.com/top-tiktok-argentina/ 
d3.csv('../data/data2000.csv', d3.autoType)
.then(data => {
  console.log(data)

  let chart = Plot.plot({
  marks: [
    Plot.dot(data, {
      x: "fertility",
      y: "cluster",
      stroke:"#666af0"
  })],
  x:{
    domain: d3.extent(data, d => d.fertility),
    line:true,
    grid:true,
  },
  y: { 
    reverse: true, 
    tickFormat: d3.format(".0f"),
    domain: d3.extent(data, d => d.cluster),
    ticks: 5,
    line:true,
  },
  color: {
    
  }
});
  d3.select("#chart").append(() => chart);
});
