var myChartraa = echarts.init(document.getElementById('rightAlarmArea'));

optionraa = {
    // backgroundColor:'#fff',
    // title : {
    //    text: '抽检异议情况分析',
    //     subtext: '各环节异议通过占比'
    // },
    title : [ 
        {
        text: '人员占比',
        x: '18%',
        y: '80%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0DD4F9',
            fontSize: '15'
        }
    },
    {
        text: '车辆占比',
        x: '68%',
        y: '80%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0DD4F9',
            fontSize: '15'
        }
    }
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
        data:['生产','流通','餐饮'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            // name:'各环节异议通过占比',
            type:'pie',
            center:['26%', '38%'],
            radius: ['0', '45%'],
            color: ['#FBAB02', '#7BE3A7', '#F37432'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:40, name:'B区'},
                {value:30, name:'C区'},
                {value:30, name:'A区'}
         
            ]
        },
          {
            name:'各环节异议通过占比',
            type:'pie',
            center:['76%', '38%'],
            radius: ['0', '45%'],
            color: [ '#7BE3A7','#05C8fD', '#E8E07D'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:40, name:'B 区'},
                {value:30, name:'C 区'},
                {value:30, name:'A 区'}
         
            ]
        }
    ]
};
myChartraa.setOption(optionraa);

setInterval(function () {
    optionraa.series.forEach(element => {
      element.data.forEach(data =>{
          data.value= (Math.random() * 100).toFixed(0)
        //   a.splice(index,1,(Math.random() * 100).toFixed(0))
      })
    })
    myChartraa.setOption(optionraa, true);
},4000);