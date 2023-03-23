let chart
let data
let valuesDomainX
let valuesDomainY

let selectElement = d3.select('#input')
selectElement.on('input', event => {
  console.log(selectElement.property('value'))
  // Opción 2: let yearSelected = event.target.value
  let yearSelected = selectElement.property('value')
  changeValueInput(yearSelected)
  createChart(yearSelected)
})

d3.csv('data.csv', d3.autoType).then(dataChart => {
  data = dataChart
  let initYear = selectElement.attr('value')
  valuesDomainX = [d3.min(data, d => d.fertility), d3.max(data, d => d.fertility)]
  valuesDomainY = [d3.min(data, d => d.life_expect), d3.max(data, d => d.life_expect)]
  changeValueInput(initYear)
  createChart(initYear)
})

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input')
  resultado.textContent = value
}

function createChart(yearSelected) {
  let dataFilter = data.filter(d => d.year == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.dot(dataFilter, {
        x: 'fertility',
        y: 'life_expect',
        fill: 'cluster',
        fillOpacity: 0.6,
        r: 'pop',
        title: 'country',
      }),
    ],
    color: {
      legend: true,
      className: 'legend-clusters',
    },
    x: {
      domain: valuesDomainX,
    },
    y: {
      domain: valuesDomainY,
    },
  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Grupos de países: ')
    .classed('legend-title')

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
}
