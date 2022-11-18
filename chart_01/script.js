// https://hypeauditor.com/top-tiktok-argentina/
let data = [
  { influencer: "@emiliamernes", born: "Entre Ríos", viewsProm: 8100000, commentsProm: 2100 },
  { influencer: "@mariabecerra_22", born: "Buenos Aires", viewsProm: 3900000, commentsProm: 1500 },
  { influencer: "@augustogimenez", born: "CABA", viewsProm: 3800000, commentsProm: 532 },
  { influencer: "@pablitocastilloo", born: "Buenos Aires", viewsProm: 1500000, commentsProm: 751 },
  { influencer: "@lucasvarelaaaa", born: "Corrientes", viewsProm: 1400000, commentsProm: 969 },
];
let maxViewProm = d3.max(data, (d) => d.viewsProm);

let chart = Plot.plot({
  marks: [
    Plot.dot(data, {
      x: "influencer",
      y: "viewsProm",
      fill: "born",
      r: "commentsProm",
      sort: { x: "y" },
    }),
  ],
  color: {
    type: "categorical",
    range: ["#08306B", "#1C6AAF", "#ABCFE6", "#D5E8FC"],
  },
  marginLeft: 120,
  y: { grid: true, domain: [0, maxViewProm * 1.05] },
  r: {
    range: [0, 35],
  },
});
// Apendeamos el gráfico al DOM
d3.select("#chart").append(() => chart);
