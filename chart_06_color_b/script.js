d3.csv('data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
        r: 'pop',
        fill: 'cluster',
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
      className: 'legend-clusters',
    },
  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Grupos de países: ')
    .classed('legend-title')

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})
