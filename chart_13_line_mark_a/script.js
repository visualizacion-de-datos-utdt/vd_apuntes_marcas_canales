d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'year',
        y: 'fertility',
        stroke: 'country',
      }),
    ],
  })
  d3.select('#chart').append(() => chart)
})
