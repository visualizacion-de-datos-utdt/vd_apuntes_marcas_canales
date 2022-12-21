let data;
d3.csv("data.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:400,
    width:600,
    marginLeft:60,
    marginBottom:50,
    marks: [
      Plot.line(data, {
        x: "year", 
        y: "fertility", 
        sort: highlight,
        stroke: highlight
      })
    ],
    x:{
      domain:[d3.min(data, (d) => d.year) , d3.max(data, (d) => d.year)],
      ticks: 11,
      tickRotate:-90,
    },
    color: {
      domain: [false, true],
      range: ["#ccc", "red"]
    },
  });
  d3.select("#chart").append(() => chart);
};

function highlight(d) {
  return /C/.test(d.cluster);
}