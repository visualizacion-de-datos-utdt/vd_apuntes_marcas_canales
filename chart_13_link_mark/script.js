d3.csv("data.csv", d3.autoType).then((data) => {
  createChart(data)
});

function createChart(data){
  let chart = Plot.plot({
    height:500,
    width:400,
    marginLeft:60,
    marginBottom:50,
    marks: [
      Plot.link(data.filter(d => d.year == 1955 || d.year == 2005), {
        x1: 1955,
        x2: 2005,
        y1: d => data.find( dat => ( dat.year == 1955 && dat.country == d.country)).pop,
        y2: d => data.find( dat => ( dat.year == 2005 && dat.country == d.country)).pop,
        stroke: "country",
        opacity: 0.5,
      })
    ],
    x:{
      tickFormat: d3.format(".0f"), 
      type: "ordinal",
    },
    y:{
      ticks:7,
    },
  });
  d3.select("#chart").append(() => chart);
};

// d3.csv("data.csv", d3.autoType).then((data) => {
//   createChart(data)
// });

// function createChart(data){
//   let chart = Plot.plot({
//     height:500,
//     width:400,
//     marginLeft:60,
//     marginBottom:50,
//     marks: [
//       Plot.line(data.filter(d => d.year == 1955 || d.year == 2005), {
//         x: "year", 
//         y: "pop", 
//         stroke: "country",
//         opacity: 0.5,
//       })
//     ],
//     x:{
//       tickFormat: d3.format(".0f"), 
//       type: "ordinal",
//     },
//     y:{
//       ticks:7,
//     },
//   });
//   d3.select("#chart").append(() => chart);
// };

