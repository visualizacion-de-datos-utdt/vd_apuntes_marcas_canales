d3.csv('data.csv', d3.autoType).then(data => createChart(data))

function createChart(data) {
  let chart = Plot.plot({
    height: 500,
    width: 300,
    marginLeft: 60,
    marginBottom: 50,
    marks: [
      Plot.line(
        data.filter(d => d.year == 1955 || d.year == 2005),
        {
          x: 'year',
          y: 'pop',
          stroke: 'country',
          opacity: 0.5,
        },
      ),
    ],
    x: {
      tickFormat: d3.format('.0f'),
      type: 'ordinal',
    },
    y: {
      ticks: 7,
    },
  })
  d3.select('#chart').append(() => chart)
}
