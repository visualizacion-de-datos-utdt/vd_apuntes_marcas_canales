d3.csv("data.csv", d3.autoType).then((data) => {
  let dataNA = data.filter( d => d.country ===  "United States" || d.country ===  "Canada" || d.country ===  "Mexico")
  createChart(dataNA)
});

function createChart(data){
  let chart = Plot.plot({
    height:400,
    width:600,
    marginLeft:60,
    marginBottom:50,
    line:true,
    nice:true,
    marks: [
      Plot.areaY(data, { 
        x: "year",
        y1: d => d3.min( data.filter( dat => dat.year == d.year), (d) => d.fertility),
        y2: d => d3.max( data.filter( dat => dat.year == d.year), (d) => d.fertility), 
        fill:"#0077b6"
      })
    ],
    x:{
      ticks:11,
      tickRotate:-90,
    },
    y:{
      domain:[ 0, d3.max(data, (d) => d.fertility)],
      grid:true,
      label:"Min of fertility, Max of fertility"
    },
  });
  d3.select("#chart").append(() => chart);
};

