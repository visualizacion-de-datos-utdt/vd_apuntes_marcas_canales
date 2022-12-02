d3.csv("data2000.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:300,
    width:1000,
    marginLeft:100,
    marginBottom:100,
    marks: [
      Plot.barY(data, {
        x: "country",
        y: "pop",
        fill: "#666af0",
      }),
    ],
    x: {
      tickRotate:-90,
    },
    y: {
      line: true,
      tickFormat: d3.format(",.0f"),
      domain:[0 , d3.max(data, (d) => d.pop)],
    }
  });
  d3.select("#chart").append(() => chart);
};

