d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'cluster',
        y: 'pop',
        fill: 'country',
        sort: 'pop',
        title: d => d.country + '\n' + d.pop,
      }),
    ],
    marginLeft: 70,
    width: 300,
  })
  d3.select('#chart').append(() => chart)
})
