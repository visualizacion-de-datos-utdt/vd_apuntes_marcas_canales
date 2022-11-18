// https://hypeauditor.com/top-tiktok-argentina/ 
d3.csv('../data/data2000.csv', d3.autoType)
.then(data => {
  console.log(data)

  let chart = Plot.plot({
  marks: [
    Plot.dot(data, {
      x: "fertility",
      y: "life_expect",
      stroke:"#666af0",
  })],
  x:{
    domain: [0, (d3.max(data, d => d.fertility)+1)],
    nice:true,
    line: true,
    grid: true,
  },
  y: {
    tickFormat: d3.format(".0f"),
    domain: [0, d3.max(data, d => d.life_expect)],
    nice:true,
    line: true,
    grid: true,
  },
  color: {
    
  }
});
  d3.select("#chart").append(() => chart);
});
