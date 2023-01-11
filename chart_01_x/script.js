d3.csv('data2000.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
      }),
    ],
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
