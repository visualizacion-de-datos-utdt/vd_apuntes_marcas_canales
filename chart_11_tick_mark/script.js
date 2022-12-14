d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'fertility',
        y: 'cluster',
      }),
    ],
    width: 600,
    height: 200,
    line: true,
    nice: true,
    grid: true,
  })
  d3.select('#chart').append(() => chart)
})
