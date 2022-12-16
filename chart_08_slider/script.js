let chart;
let data;

let selectElement = d3.select("#input");
selectElement.on("change", (event) => {
  let yearSelected = event.target.value;
  changeValueInput(yearSelected);
  createChart(yearSelected);
});

d3.csv("data.csv", d3.autoType).then((dataChart) => {
  data = dataChart;
  let initYear = selectElement.attr("value");
  changeValueInput(initYear);
  createChart(initYear);
});

function changeValueInput(value) {
  const resultado = document.querySelector("#value-input");
  resultado.textContent = value;
}

function createChart(yearSelected) {
  let dataFilter = data.filter((d) => d.year == yearSelected);
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.dot(dataFilter, {
        x: "fertility",
        y: "life_expect",
        fill: "cluster",
        fillOpacity: 0.6,
        r: "pop",
        title: "country",
      }),
    ],
    color: {
      legend: "ramp",
    },
  });
  d3.select("#chart figure").remove();
  d3.select("#chart").append(() => chart);
}
