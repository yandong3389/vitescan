module.exports = {
  bar: {
    chart: {
            type:'areaspline'//指定图表的类型，默认是折线图（line）
            },
            credits: {
              enabled:false
            },//去掉地址
            title: {
                text: '' //指定图表标题
            },
            colors: ['#00d1b2', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
            xAxis: {
                    categories: ['1号', '2号', '3号','3号','3号'] //指定x轴分组
                },
            yAxis: {
                    title: {
                    text: null, //指定y轴的标题
                },
                },
            plotOptions: {
                    column: {
                    colorByPoint:true
                        },
                    },

            series: [{ //指定数据列
            	    name:null,
                    data: [100, 300, 1000, 5000, 4000,5000,2000,8000,20000] //数据
                }]
  }
}
