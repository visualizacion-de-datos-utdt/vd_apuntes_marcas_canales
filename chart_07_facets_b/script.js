let chart;
d3.csv("data2000.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    r: { range: [0, 18] },
    facet: {
      data: data,
      x: "cluster",
    },
    marks: [
      Plot.dot(data, {
        x: "fertility",
        y: "life_expect",
        fill: "cluster",
        fillOpacity: 0.6,
        r: "pop",
        title: "country",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
