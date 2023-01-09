d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'year',
        y: 'fertility',
        z: 'country',
        stroke: 'country',
      }),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
  })
  d3.select('#chart').append(() => chart)
})
