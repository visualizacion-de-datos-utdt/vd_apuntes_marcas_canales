d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'year',
        y: 'fertility',
        z: 'country',
        stroke: d => (d.cluster == 'C' ? 'red' : '#ccc'),
        sort: d => d.cluster == 'C',
      }),
    ],
    line: true,
    y: { zero: true },
  })
  d3.select('#chart').append(() => chart)
})
