var myChartran = echarts.init(document.getElementById('rightAlarmNum'));


optionran = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // data: ['人数', '车次'],
        data: [
            {
                name: '人数',
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                    color: '#798FA3'
                }
            },
            {
                name: '车次',
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
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
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        // data: ['7月3日','7月4日','7月5日','7月6日','7月7日','7月8日','7月9日'],
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
                value: '7月13日',
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
    yAxis: {
        type: 'value',
        axisLabel: {
            // formatter: '{value} °C'
            formatter: '{value}'
        },
        // max: 20000,
        // min: 4000,
        axisLabel: {
            show: true,
            textStyle: {
                color: function (value, index) {
                    return value >= 0 ? '#798FA3' : '#FFAB57';
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
    series: [
        {
            name: '人数',
            type: 'line',
            data: [8000, 9000, 13000, 18000, 7600, 13000, 7900],
            itemStyle:{
                normal:{
                   borderType:"solid",
                  color:"#FFAB57"
                }
            }
            
        },
        {
            name: '车次',
            type: 'line',
            data: [8100, 7800, 8000, 11800, 11700, 8200, 7870],
            itemStyle:{
                normal:{
                   borderType:"solid",
                  color:"#7BE3A7"
                }
            }
            
        }
    ]
};
myChartran.setOption(optionran);

var myDate = new Date();//获取系统当前时间
var getYear=myDate.getYear(); //获取当前年份(2位)
var FullYear=myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var Month=myDate.getMonth(); //获取当前月份(0-11,0代表1月)
var getDate=myDate.getDate(); //获取当前日(1-31)

optionran.xAxis.data.forEach((element,index) => {
    let intervalDay=6-index
  element.value=(Month+1)+'月'+(getDate-intervalDay)+'日';
})

// optionma.xAxis.data[0].value = (Math.random() * 100).toFixed(2) - 0;
myChartran.setOption(optionran);

setInterval(function () {
    optionran.series.forEach(element1 => {
      element1.data.forEach((data1,index,a) =>{
          // data1= (Math.random() * 500).toFixed(0)
          a.splice(index,1,(Math.random() * 50000).toFixed(0))
      })
    })
    myChartran.setOption(optionran, true);
},5000);
