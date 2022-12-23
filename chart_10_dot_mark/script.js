d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    width: 600,
    height: 200,
    line: true,
    nice: true,
    zero: true,
    grid: true,
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
      }),
    ],
  })
  d3.select('#chart').append(() => chart)
})
