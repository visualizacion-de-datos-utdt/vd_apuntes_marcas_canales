d3.csv("data.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:500,
    width:400,
    marginLeft:60,
    marginBottom:50,
    line:true,
    marks: [
      Plot.areaY(data.filter(d => d.country == "United States"), {
        x: "year", 
        y: "fertility", 
        fill: "country",
        curve:"natural",
      })
    ],
    x:{
      domain:[d3.min(data, (d) => d.year)-1,d3.max(data, (d) => d.year)+1],
      ticks:11,
      tickRotate:-90,
    },
    y:{
      ticks:7,
      grid:true,
    },
  });
  d3.select("#chart").append(() => chart);
};

