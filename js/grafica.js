const ctx = document.getElementById('myChart');

const obtenerValor = async () => {
const resp = await fetch ( "https://api.frankfurter.app/${dateStart}?base=USD")
const data = await resp.json() ;

console.log(json.data);
grafica(json.data)
}
  const grafica = (precio) => {
    const precios = [{
        id: 1,
        pais: "mexico",
        valor:4,
    },
    {
        id: 2,
        pais: "colombia",
        valor:5,
    },
    {
        id: 3,
        pais: "peru",
        valor:4,
    }
]

    console.log (precio)
    const paises = precio.map((pais) => pais.pais);
    console.log (paises)

    new Chart(ctx, {
        type: 'line',
        data: {
          labels: precio,
          datasets: [{
            label: '',
            data: paises,
            borderWidth: 3,
            backgroundColor:["blue"],
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  }


  window.addEventListener("load", obtenerValor);