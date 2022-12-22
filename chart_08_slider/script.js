let chart;
let data;
let valuesDomainX;
let valuesDomainY;

let selectElement = d3.select("#input");
selectElement.on("change", (event) => {
  let yearSelected = event.target.value;
  changeValueInput(yearSelected);
  createChart(yearSelected);
});

d3.csv("data.csv", d3.autoType).then((dataChart) => {
  data = dataChart;
  let initYear = selectElement.attr("value");
  valuesDomainX = [d3.min(data, (d) => d.fertility) , d3.max(data, (d) => d.fertility)]
  valuesDomainY = [d3.min(data, (d) => d.life_expect) , d3.max(data, (d) => d.life_expect)]
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
    x: {
      domain: valuesDomainX
    },
    y:{
      domain: valuesDomainY
    }
  });
  d3.select("#chart figure").remove();
  d3.select("#chart").append(() => chart);
}
