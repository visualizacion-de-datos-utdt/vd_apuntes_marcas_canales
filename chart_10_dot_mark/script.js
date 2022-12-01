d3.csv("../data/data2000.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:200,
    line: true,
    nice: true,
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "cluster",
        fill: "#666af0",
        fillOpacity: 0.6,
        r: 7,
      }),
    ],
    x: {
      domain: [0, d3.max(data, (d) => d.fertility)],
      grid: true,
    },
    y: {
      reverse: true,
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, (d) => d.cluster)+0.5],
      ticks: 5,
    }
  });
  d3.select("#chart").append(() => chart);
};
  
