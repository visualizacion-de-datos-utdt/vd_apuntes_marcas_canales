import addTooltips from "./addTooltips.js";
let chart;
let data;

const selectElement = document.querySelector('#input');
selectElement.addEventListener('change', (event) => {
  let yearSelected = event.target.value
  changeValueInput(yearSelected)
  createChart(yearSelected)
});

d3.csv('data.csv', d3.autoType).then(function (dataChart) {
  data = dataChart.sort((a, b) => d3.descending(a.pop, b.pop));
  changeValueInput(selectElement.value)
  createChart(selectElement.value)
});

function changeValueInput(value){
  const resultado = document.querySelector('#value-input');
  resultado.textContent = `${value}`;
}
function createChart(yearSelected){
  let dataFilter = data.filter( d => d.year == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice:true,
    marks: [
      Plot.dot(dataFilter, {
        x: "fertility",
        y: "life_expect",
        fill: "cluster",
        fillOpacity: 0.5,
        r: "pop",
        title: (d) => `${d.country}`,
    })],
    color: {
      legend: "ramp",
      range: ["#a3c4f3", "#ffd670", "#ff9770", "#8eecf5", "#60d394", "#ffef9f" ],
    },
    x:{
      domain: [0, d3.max(data, d => d.fertility)],
    },
    y: {
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, d => d.life_expect)],
    },
    r: {
      range: [0, 18]
    },
  });
  addTooltips(chart);
  d3.select("#chart figure").remove();
  d3.select("#chart").append(() => chart);
}