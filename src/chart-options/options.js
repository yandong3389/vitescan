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
            legend: {
                enabled: false
            },
            colors: ['#6c757e', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
            xAxis: {
            	    // name:"日期",
                    categories: ['8/15', '8/15', '8/15','8/15','8/15','8/15', '8/15', '8/15','8/15','8/15','8/15', '8/15', '8/15','8/15','8/15','8/15'] //指定x轴分组
                },
            yAxis: {
                    title: {
                    text: "", //指定y轴的标题
                },
                },
        	plotOptions: {
                column: {
            	  colorByPoint:true
                }
        	},
            series: [{ //指定数据列
            		allowPointSelec:true,
            		lineWidth:1,
            		fillOpacity:0.2,
            		compare: null,
            		dashStyle:'Solid',
            		linecap:null,
            		linkedTo: ':previous',
            	    name:"总交易数",
            	    marker: {
        				//fillColor: 'red',
        				lineWidth: 1,
        				//  "circle"（圆形）、"square"（正方形）、"diamond"（菱形）、 "triangle"（三角形）及 "triangle-down"（倒三角形）
        				symbol: 'diamond',
        				radius:4,
        				//lineColor: null // inherit from series
        			},
                    data: [400, 900, 1000, 5000, 4000,5000,2000,6000,8000,4000, 5000, 3000, 2000, 7000] //数据
                }]
  }
}
