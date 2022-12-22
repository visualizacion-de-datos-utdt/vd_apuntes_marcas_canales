let chart
d3.csv('data2000.csv', d3.autoType).then(data => {
  console.table(data)

  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
        r: 'pop',
        fill: 'cluster',
        opacity: 0.5,
        title: d => `${d.country}
Expectativa: ${d.life_expect} años
Fertilidad: ${d.fertility}`,
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart').append(() => chart)
})
