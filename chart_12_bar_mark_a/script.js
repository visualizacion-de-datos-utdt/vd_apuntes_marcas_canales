d3.csv('data2000.csv', d3.autoType).then(data => {
  createChart(data)
})

function createChart(data) {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'country',
        y: 'pop',
      }),
    ],
    x: {
      tickRotate: -45,
      domain: d3.sort(data, (a, b) => d3.descending(a.pop, b.pop)).map(d => d.country),
    },
    y: {
      grid: true,
    },
    height: 400,
    width: 960,
    marginLeft: 100,
    marginBottom: 100,
  })
  d3.select('#chart').append(() => chart)
}
