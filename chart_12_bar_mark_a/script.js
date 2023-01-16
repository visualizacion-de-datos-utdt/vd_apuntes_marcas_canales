d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'pop',
        y: 'country',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.pop, b.pop)).map(d => d.country),
    },
    x: {
      grid: true,
    },
    height: 1000,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
