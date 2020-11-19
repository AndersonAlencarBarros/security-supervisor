// const socket = io();

function criarGrafico(nome, posicao, unidade ) {
    let ctx = document.getElementById(posicao).getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: nome,
                data: [],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'linear',
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'h:mm:ss'
                        }
                    },
                    ticks: {
                        min: 10,
                        max: 10,
                        minRotation: 0,
                        maxRotation: 0
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: unidade,
                        fontSize: 14
                    }
                 }]
            }
        }
    });

    return myChart;
}

var myChart = criarGrafico("Som", "meuGrafico", "dB");
var myChart1 = criarGrafico("Batimentos Cardíacos", "meuGrafico1", "BPM");

// Função Temporária para Renderizar o Gráfico
setInterval(() => {
    myChart.data.labels.push(new Date());
    myChart.data.datasets[0].data.push(Math.random() * (1000 - 10) + 10);
    myChart.update();
}, 1000);

setInterval(() => {
    myChart1.data.labels.push(new Date());
    myChart1.data.datasets[0].data.push(Math.random() * (150 - 0) + 0);
    myChart1.update();
}, 1000);


// Função Para a leitura serial
// socket.on("Serial-data:", dataSerial => {
//     timer = new Date().getTime();
//     myChart.data.labels.push(timer);
//     myChart.data.datasets[0].data.push(dataSerial);

//     myChart.update();
// });

// Códigos que Foram Removidos

// console.log(myChart.data.datasets.data);

// if (dataSerial.value.indexOf(" %") != -1) {
//     myChart.data.datasets[1].data.push(parseFloat(dataSerial.value.replace(" %", "")));
// }
// if (dataSerial.value.indexOf(" *C") != -1) {
//     myChart.data.datasets[0].data.push(parseFloat(dataSerial.value.replace(" ºC", "")));
// }
// myChart.data.datasets[0].data.push(dataSerial.value.replace("Saida A0:", ""));


// options: {
//     scales: {
//         yAxes: [{
//             id: "T",
//             type: "linear",
//             position: "left",
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     }
// }
// data: [1, 2, 3, 100],

// myChart.data.labels.push(counter);
// if (dataSerial.value.indexOf(" %") != -1) {
//     myChart.data.datasets[1].data.push(parseFloat(dataSerial.value.replace(" %", "")));
// }
// if (dataSerial.value.indexOf(" *C") != -1) {
//     myChart.data.datasets[0].data.push(parseFloat(dataSerial.value.replace(" ºC", "")));
// }
// myChart.data.datasets[0].data.push(dataSerial.value.replace("Saida A0:", ""));
// counter = counter + 1;
// myChart.update();
