d3.csv("data2000.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:300,
    width:600,
    marginLeft:50,
    marginBottom:50,
    marks: [
      Plot.barX(data, {
        x1: d => d3.min( data.filter( dat => dat.cluster == d.cluster), (d) => d.life_expect),
        x2: d => d3.max( data.filter( dat => dat.cluster == d.cluster), (d) => d.life_expect),
        y: "cluster",
        fill: "#666af0",
      }),
    ],
    x: {
      domain:[0 , d3.max(data, (d) => d.life_expect)],
      grid: true,
      label:"Min of life_expect, Max of life_expect"
    },
  });
  d3.select("#chart").append(() => chart);
};

