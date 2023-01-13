d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.country == 'Argentina'),
        {
          x: 'year',
          y: 'life_expect',
          z: 'country',
        },
      ),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
