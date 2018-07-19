

var myChartma = echarts.init(document.getElementById('mainAnalysis'));
optionma = {
    title: [
        {
            x: "15%",
            y: "18%",
            bottom: 100,
            text: '超低',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 11,
                color: "#fff"
            },
        },
        {
            x: "28%",
            y: "18%",
            bottom: 100,
            text: '低',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 13,
                color: "#fff"
            },
        },
        {
            x: "29%",
            y: "57%",
            bottom: 100,
            text: '中',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 13,
                color: "#fff"
            },
        },
        {
            x: "16%",
            y: "85%",
            bottom: 100,
            text: '人员占比',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: "#0DD4F9"
            },
        },
        {
            x: "15%",
            y: "57%",
            bottom: 100,
            text: '高',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 13,
                color: "#fff"
            },
        },
        {
            x: "65%",
            y: "18%",
            bottom: 100,
            text: '超低',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: "#fff"
            },
        },
        {
            x: "79%",
            y: "17%",
            bottom: 100,
            text: '低',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 13,
                color: "#fff"
            },
        },
        {
            x: "79%",
            y: "58%",
            bottom: 100,
            text: '中',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 13,
                color: "#fff"
            },
        },
        {
            x: "66%",
            y: "85%",
            bottom: 100,
            text: '车辆占比',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: "#0DD4F9"
            },
        },
        {
            x: "66%",
            y: "58%",
            bottom: 100,
            text: '高',
            textStyle: {
                fontWeight: 'normal',
                fontSize:13,
                color: "#fff"
            },
        }
    ],
    tooltip: {
        show: true,
    },
    series: [
        {
            name: '',
            type: 'gauge',
            startAngle: 150,
            endAngle: -140,
            radius: '78%',
            center: ['25%', '45%'], // 默认全局居中
            min: 0,
            max: 180,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 18,
                    shadowBlur: 0,
                    color: [
                        [0.17, '#F37432'],
                        [0.34, '#FBAB02'],
                        [0.51, '#FBAB02'],
                        [0.68, '#EAE050'],
                        [0.85, '#EAE050'],
                        [1, '#7BE3A7']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle:{
                    color:'#000',
                    width:'0.5'
                }
            },
            splitLine: {
                show: false,
                length: 20,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
                width:4,
            },
            detail: {
                show: true,
                offsetCenter: ['-90%', '10%'],
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",
                }
            },
            data: [{
                value: 436
            }]
        },
        {
            name: '累计受理',
            type: 'gauge',
            startAngle: 150,
            endAngle: -140,
            radius: '78%',
            center: ['75%', '45%'], // 默认全局居中
            min: 0,
            max: 100,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 18,
                    shadowBlur: 0,
                    color: [
                        [0.17, '#F37432'],
                        [0.34, '#FBAB02'],
                        [0.51, '#FBAB02'],
                        [0.68, '#EAE050'],
                        [0.85, '#EAE050'],
                        [1, '#7BE3A7']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle:{
                    color:'#000',
                    width:'0.5'
                }
            },
            splitLine: {
                show: false,
                length: 20,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
                width:4,
            },
            detail: {
                show: true,
                offsetCenter: ['-90%', '10%'],
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",
                }
            },
            data: [{
                value: 200
            }]
        }
    ]
};
// myChart.setOption(option);
 myChartma.setOption(optionma, true);
setInterval(function () {
    optionma.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    optionma.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChartma.setOption(optionma, true);
},2000);


