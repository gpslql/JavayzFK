var myChartrar = echarts.init(document.getElementById('rightAlarmRatio'));
// app.title = '堆叠条形图';

optionrar = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        // data: ['人员报警', '车辆报警'],
        data: [
            {
                name: '人员报警',
                // 强制设置图形为圆。
                icon: 'circle',
                textStyle: {
                    color: '#798FA3'
                }
            },
            {
                name: '车辆报警',
                // 强制设置图形为圆。
                icon: 'circle',
                textStyle: {
                    color: '#798FA3'
                }
            }
        ],
        right: '10%',
        top:'8%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: function (value, index) {
                    return value >= 0 ? '#56719B' : 'red';
                }
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#1E6193', '#1E6193']
            }
        }
    },
    xAxis: {
        type: 'category',
        // data: ['周一','周二','周三','周四','周五','周六','周日']
        data: [
            {
                value: '7月7日',
                textStyle: {
                    color: '#0DD4F9'
                }
            },
            {
                value: '7月8日',
                textStyle: {
                    color: '#0DD4F9'
                }
            },
            {
                value: '7月9日',
                textStyle: {
                    color: '#0DD4F9'
                }
            },
            {
                value: '7月10日',
                textStyle: {
                    color: '#0DD4F9'
                }
            }, {
                value: '7月11日',
                textStyle: {
                    color: '#0DD4F9'
                }
            }, {
                value: '7月12日',
                textStyle: {
                    color: '#0DD4F9'
                }
            }, {
                value: '7月131日',
                textStyle: {
                    color: '#0DD4F9'
                }
            }
        ],
        boundaryGap: ['20%', '20%'],
        textStyle: {
            color: '#177E9C'
        }
    },
    series: [
        {
            name: '人员报警',
            type: 'bar',
            stack: '总量',
            barWidth:30,
            itemStyle: {
                // color: 'option.color'
                color: '#00C6FD'
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
            //     data: [
            //     {
            //         value: 320,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     },
            //     {
            //         value: 302,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     },
            //     {
            //         value: 301,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     },
            //     {
            //         value: 120,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     }, {
            //         value: 45,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     }, {
            //         value: 78,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     }, {
            //         value: 90,
            //         textStyle: {
            //             color: '#1E6193'
            //         }
            //     }
            // ]
        },
        {
            name: '车辆报警',
            type: 'bar',
            stack: '总量',
            barWidth:30,
            itemStyle: {
                // color: 'option.color'
                color: '#EF6A8D'
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
};
var myDate = new Date();//获取系统当前时间
console.log(myDate)

  var getYear=myDate.getYear(); //获取当前年份(2位)
  var FullYear=myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  var Month=myDate.getMonth(); //获取当前月份(0-11,0代表1月)
  var getDate=myDate.getDate(); //获取当前日(1-31)

  optionrar.xAxis.data.forEach((element,index) => {
      let intervalDay=6-index
    element.value=(Month+1)+'月'+(getDate-intervalDay)+'日';
  })

// optionma.xAxis.data[0].value = (Math.random() * 100).toFixed(2) - 0;
myChartrar.setOption(optionrar);

setInterval(function () {
    optionrar.series.forEach(element1 => {
        element1.data.forEach((data1,index,a) =>{
            // data1= (Math.random() * 500).toFixed(0)
            a.splice(index,1,(Math.random() * 500).toFixed(0))
        })
      })
    myChartrar.setOption(optionrar, true);
},3000);