var myChartct = echarts.init(document.getElementById('centerAlarm'));
optionca = {
    title: [{
        text: '60%',
        x: '16.5%',
        y: '31%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '20'
        }
    },
    {
        text: '已处理',
        x: '17%',
        y: '75%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '13'
        }
    },
    {
        text: '70%',
        x: '46.5%',
        y: '31%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '20'
        }
    },
    {
        text: '未处理',
        x: '47%',
        y: '75%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '13'
        }
    },
    {
        text: '80%',
        x: '76.5%',
        y: '31%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '20'
        }
    },
    {
        text: '已忽略',
        x: '77%',
        y: '75%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '13'
        }
    }
    ],
    legend: {
        x : 'center',
        y : 'center',
        data:[
            '百分比', '百分比', '百分比'
        ]
    },
    color: ['rgba(176, 212, 251, 1)'],


    series: [
        {
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['44%', '58%'],
        center: ['20%', '40%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 60,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3BD542' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '02',
            value: 40
        }]
    },
    {
        name: 'Line 2',
        type: 'pie',
        clockWise: true,
        radius: ['44%', '58%'],
        center: ['50%', '40%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 70,
            name: '03',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d8350c' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '04',
            value: 30
        }]
    },
    ,
    {
        name: 'Line 3',
        type: 'pie',
        clockWise: true,
        radius: ['44%', '58%'],
        center: ['80%', '40%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 80,
            name: '05',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#c7d40b' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '06',
            value: 20
        }]
    }

    ]
}
myChartct.setOption(optionca);