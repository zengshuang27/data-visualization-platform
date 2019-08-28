function goback() {
    window.location.href = "homepage.html"
}

// var textStyle = {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'lighter'
// };
var subtextStyle = {
    color: '#818181',
    fontSize: 10,
};
var textStyle = {
    fontSize: 12,
    color: '#00FFF6',
    fontFamily: "宋体",
}
var emphasisStyle = {
    label: {
        fontSize: 14,
        fontWeight: "bold"
    }
}
var labelNormal = {
    normal: {
        formatter: '{c}' + '\n' + '{b}',
        borderWidth: 0,
        borderRadius: 4,
        padding: [0, -40],
        height: 50,
        fontSize: 11,
        fontFamily: "宋体",
        align: 'center',
        color: '#F23A12',
        rich: {
            b: {
                fontSize: 13,
                lineHeight: 5,
                color: '#41B3DC'
            }

        }
    }
};
var color = ['#f845f1', '#ad46f3', '#5045f6', '#4777f5', '#44aff0', '#45dbf7', '#f6d54a', '#f69846', '#ff4343'];
var color2 = ['#df5949', '#dc8042', '#dca23d', '#06de7a', '#09abb1', '#0a77e8'];
var leftTopFore = ['rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB', 'rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB']
var myColor = ['#FAB01A', '#f36815', '#FF4D2A'];
var myColor1 = ['#00F260', '#02b89f', '#0575E6'];
$(function () {
    topCenter1();
    topCenter2();
    topRight_top1()
    topRight_top2()
    topRight_bottom()
    bottom()

    function bottom() {
        var myChart = echarts.init(document.getElementById('bt1'));
        var data = [];
        var numLL, numFL, numWH, numJK, numHM, numKX, numJY;
        //理论
        $.ajax({
            url: 'htmlInterface/V1/queryPolicyTheoryService',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataLL'] = res.data;
                numLL = res.sum;
            }
        })
        //法律
        $.ajax({
            url: 'htmlInterface/V1/querySafeRuleOfLawService',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataFL'] = res.data;
                numFL = res.sum;
            }
        })
        //文化
        $.ajax({
            url: 'htmlInterface/V1/queryCivilizedFashionLeads',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataWH'] = res.data;
                numWH = res.sum;
            }
        })
        //健康
        $.ajax({
            url: 'htmlInterface/V1/queryCultureAndPhysicalEducation',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataJK'] = res.data;
                numJK = res.sum;

            }
        })

        //惠民
        $.ajax({
            url: 'htmlInterface/V1/queryHealthServices',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataHM'] = res.data;
                numHM = res.sum;
            }
        })
        //科学
        $.ajax({
            url: 'htmlInterface/V1/queryPopularScienceAndTechnologyService',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataKX'] = res.data;
                numKX = res.sum;
            }
        })
        //教育
        $.ajax({
            url: 'htmlInterface/V1/queryEducationCareService',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (res) {
                data['dataJY'] = res.data;
                numJY = res.sum;
            }
        })

        var option = {
            //backgroundColor: '#05274C',
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
            title: [
                {
                    top: '5%',
                    text: '理论宣讲',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '2%',
                }, {
                    top: '5%',
                    text: '法律法规',
                    //subtext:'Education Care Service',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '16%',
                }, {
                    top: '5%',
                    text: '文化服务',
                    //subtext:'Safe Rule of Law Service',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '30%',
                }, {
                    top: '5%',
                    text: '健身体育',
                    //subtext:'Culture and Physical Education',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '44%',
                }, {
                    top: '5%',
                    text: '惠民政策',
                    //subtext:'Health services',
                    textStyle: textStyle,

                    subtextStyle: subtextStyle,
                    left: '58%',
                }, {
                    top: '5%',
                    text: '科学普及',
                    //subtext:'Popular Science and Technology Service',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '72%',
                }, {
                    top: '5%',
                    text: '教育服务',
                    //subtext:'Civilized Fashion Leads',
                    textStyle: textStyle,
                    subtextStyle: subtextStyle,
                    left: '86%',
                }],
            graphic: [
                {
                    type: 'text',
                    left: '7.4%',
                    top: '53%',
                    style: {
                        text: numLL,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"

                    }
                }, {
                    type: 'text',
                    left: '21.2%',
                    top: '53%',
                    style: {
                        text: numFL,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"

                    }
                }, {
                    type: 'text',
                    left: '35.3%',
                    top: '53%',
                    style: {
                        text: numWH,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"
                    }
                }, {
                    type: 'text',
                    left: '49.2%',
                    top: '53.3%',
                    style: {
                        text: numJK,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"
                    }
                }, {
                    type: 'text',
                    left: '63.3%',
                    top: '53%',
                    style: {
                        text: numHM,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"
                    }
                }, {
                    type: 'text',
                    left: '77.3%',
                    top: '53%',
                    style: {
                        text: numKX,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"
                    }
                }, {
                    type: 'text',
                    left: '91.3%',
                    top: '53%',
                    style: {
                        text: numJY,
                        textAlign: 'center',
                        fill: '#E3B4E1',
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        fontWeight: 'lighter',
                        fontFamily: "宋体"
                    }
                }],
            series: [
                //政策理论服务 begin
                {
                    //name: '用药性别数量',
                    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['8%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                type: 'solid'
                            }
                        }
                    },
                    label: labelNormal,
                    emphasis: emphasisStyle,
                    data: (function () {
                        var arr = []
                        $.each(data.dataLL, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 1]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },
                //end
                //教育关爱服务 begin
                {
                    color: ['#76FBC0', '#2AC9FD'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['22%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    //data: data.dataSex,
                    data: (function () {
                        var arr = []
                        $.each(data.dataFL, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 1]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },
                //end
                //平安法治服务 begin
                {
                    //name: '用药性别数量',
                    color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['36%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    data: (function () {
                        var arr = []
                        $.each(data.dataWH, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 1]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()


                },
                //end
                //文化教育服务begin
                {
                    //name: '用药性别数量',
                    color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['50%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    //data: data.dataDis,
                    data: (function () {
                        var arr = []
                        $.each(data.dataJK, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 1]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },
                //end
                //健康卫生服务begin
                {
                    //name: '用药性别数量',
                    color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['64%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    //data: data.data5,
                    data: (function () {
                        var arr = []
                        $.each(data.dataHM, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 1]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },
                //end
                //科技科普服务 begin
                {
                    //name: '用药性别数量',
                    color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['78%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    //data: data.data6,
                    data: (function () {
                        var arr = []
                        $.each(data.dataKX, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2 + 3]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 4]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },
                //end
                //文明风尚引领begin
                {
                    //name: '用药性别数量',
                    color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                    type: 'pie',
                    radius: ['20%', '40%'],
                    center: ['92%', '55%'],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 35,
                            lineStyle: {
                                // color: '#41B3DC',
                                type: 'solid'
                            }
                        }

                    },
                    label: labelNormal, emphasis: emphasisStyle,
                    //data: data.data7,
                    data: (function () {
                        var arr = []
                        $.each(data.dataJY, function (index, item) {
                            arr.push({
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: leftTopFore[index * 2 + 5]
                                            },
                                                {
                                                    offset: 1,
                                                    color: leftTopFore[index * 2 + 6]
                                                }
                                            ]
                                        ),

                                    },
                                },
                                label: {
                                    color: leftTopFore[index * 2]
                                },
                            })
                        })
                        return arr;
                    })()
                },

            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //累计志愿服务服务
    function topCenter1() {
        var myChart = echarts.init(document.getElementById('tc1'));
        var option = {
            title: {
                text: '累计志愿服务 ',
                textStyle: textStyle,
                subtextStyle: subtextStyle,
            },
            tooltip: {
                trigger: 'item',
                textStyle: textStyle,
                position: ['40%', '30%'],
            },
            legend: {
                x: 'center',
                data: ['']
            },
            toolbox: {
                show: false,

            },
            //calculable : true,
            radar: [
                {
                    indicator: [
                        {text: '南关区'},
                        {text: '二道区'},
                        {text: '经开区'},
                        {text: '绿园区'},
                        {text: '朝阳区'},
                        {text: '净月区'}
                    ],
                    center: ['50%', '50%'],
                    radius: 60,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        textStyle: {
                            fontSize: 10,
                            color: '#0BB6DB',
                            fontWeight: 'lighter'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                        lineStyle: {
                            color: '#8BDA0F', // 坐标轴线线的颜色。
                            width: 1, // 坐标轴线线宽。
                            type: 'solid', // 坐标轴线线的类型。
                        }
                    },
                    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                        show: false,
                    },
                }
            ],
            series: [
                {
                    name: '志愿服务',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#FF4D2A" // 图表中各个图区域的边框线颜色
                            },
                            areaStyle: {
                                type: 'default',
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 1, color: 'rgba(0, 255, 246, 1)'},
                                        {offset: 0, color: 'rgba(122,207,123,1)'}
                                    ]
                                ),

                            },

                        },

                    },
                    emphasis: emphasisStyle,

                    data: [{
                        value: [800, 660, 600, 1300, 900, 800],
                        name: '舍普琴科'
                    }]
                }
            ]
        };
        myChart.setOption(option);
        $.ajax({
            url: 'htmlInterface/V1/queryCumulativeVolunteerService',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (data) {
                var arr = [];
                var num = data.num;
                for (var i = 0; i < num.length; i++) {
                    arr.push(num[i].value)
                }

                myChart.setOption({
                    radar: [{
                        name: {
                            formatter: function (value, index) {
                                return value.substr(0, 3) + "\n" + value.substr(3)
                            }
                        },
                        indicator: data.name
                    }],
                    series: [{
                        data: [{
                            value: arr,
                            name: '志愿服务'
                        }]
                    }]
                })
            }
        })

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function topCenter2() {
        var myChart = echarts.init(document.getElementById('tc2'));
        option = {
            title: {
                text: '民需事件、志愿服务响应排名',
                //subtext: '纯属虚构',
                textStyle: textStyle
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}",
                textStyle: textStyle,
                position: function (point, params, dom, rect, size) {
                    // 固定在顶部
                    return [point[0], '10%'];
                }
            },
            legend: {
                show: false
            },
            color: ['#df5949', '#dc8042', '#dca23d', '#06de7a', '#09abb1', '#0a77e8'],
            calculable: true,
            series: [
                {
                    funnelAlign: "center",
                    name: '民需事件',
                    type: 'funnel',
                    width: '40%',
                    height: '35%',
                    x: 'center',
                    y: '15%',
                    gap: 5,
                    itemStyle: {
                        normal: {
                            //color: ['#FBA91B','#FC8121','#FF5429'],
                            label: {
                                position: 'left',
                                align: "right"
                            },
                            borderWidth: 0
                        }
                    },
                    data: [
                        /*{value:60, name:'民需：南关区'},
                        {value:80, name:'民需：二道区'},
                        {value:120, name:'民需：绿园区'}*/
                    ]
                },
                {
                    funnelAlign: "center",
                    name: '民需服务',
                    type: 'funnel',
                    width: '40%',
                    height: '35%',
                    x: 'center',
                    y: '50%',
                    gap: 5,
                    sort: 'ascending',
                    itemStyle: {
                        normal: {
                            // color: 各异,
                            label: {
                                position: 'right',
                                align: "left"
                            },
                            borderWidth: 0
                        }
                    },
                    data: [
                        /*{value:60, name:'志愿：朝阳区',itemStyle: {normal: {color:'#06de7a'}}},
                        {value:80, name:'志愿：南关区',itemStyle: {normal: {color:'#09abb1'}}},
                        {value:120, name:'志愿：经开区',itemStyle: {normal: {color:'#0a77e8'}}}*/
                    ]
                }
            ]
        };
        myChart.setOption(option);
        $.ajax({
            url: 'htmlInterface/V1/queryCivilianDemandEventsVolunteerResponseRanking',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (data) {
                myChart.setOption({
                    series: [{
                        data: (function () {
                            $.each(data.updata, function (index, item) {
                                item.name = item.name.replace(":", ":\n")
                            });
                            return data.updata
                        }())
                    }, {
                        data: (function () {
                            $.each(data.downdata, function (index, item) {
                                item.name = item.name.replace(":", ":\n")
                            });
                            return data.downdata
                        }()),
                    }
                    ]
                })
            }
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function topRight_top1() {
        var myChart = echarts.init(document.getElementById('tr1'));
        option = {
            title: {
                text: '累计民需服务 ',
                /*subtext: 'Comulative Volunteer Service',*/
                textStyle: textStyle,
                subtextStyle: subtextStyle,
            },
            tooltip: {
                trigger: 'item',
                textStyle: textStyle,
                position: ['70%', '30%']
            },
            legend: {
                x: 'center',
                data: ['累计民需服务']
            },
            toolbox: {
                show: false,

            },
            calculable: true,
            radar: [
                {
                    indicator: [],
                    center: ['50%', '50%'],
                    radius:65,
                    startAngle: 90,
                    splitNumber: 4,
                    name: {
                        textStyle: {
                            fontSize: 12,
                            color: '#0BB6DB',
                            fontWeight: 'lighter'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                        lineStyle: {
                            color: '#8BDA0F', // 坐标轴线线的颜色。
                            width: 1, // 坐标轴线线宽。
                            type: 'solid', // 坐标轴线线的类型。
                        }
                    },
                    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                        show: false,
                    },
                }
            ],
            series: [
                {
                    name: '',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#FF4D2A" // 图表中各个图区域的边框线颜色
                            },
                            areaStyle: {
                                type: 'default',
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 1, color: 'rgba(0, 255, 246, 1)'},
                                        {offset: 0, color: 'rgba(122,207,123,1)'}
                                    ]
                                ),

                            },

                        },

                    },
                    data: []
                }
            ]
        };
        myChart.setOption(option);
        $.ajax({
            url: 'htmlInterface/V1/queryAccumulatedCivilDemandMatters',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (data) {
                var arr = [];
                var num = data.num;
                for (var i = 0; i < num.length; i++) {
                    arr.push(num[i].value)
                }

                myChart.setOption({
                    radar: [{
                        // name: {
                        //     formatter: function (value, index) {
                        //         return value.substr(0, 3) + "\n" + value.substr(3)
                        //     }
                        // },
                        indicator: data.name
                    }],
                    series: [{
                        data: [{
                            value: arr,
                            name: '民需服务'
                        }]
                    }]
                })
            }
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function topRight_top2() {
        var myChart = echarts.init(document.getElementById('tr2'));
        var dataND = [
            {value: 10, name: '法律法规'},
            {value: 5, name: '健康体育'},
            {value: 15, name: '文化服务'},
            {value: 25, name: '惠民服务'},
            {value: 20, name: '教育服务'},
            {value: 35, name: '理论宣讲'}

        ]
        option = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: "18%",
                containLabel: true,
            },
            title: {
                text: '职能部门排名',
                /* subtext: 'Organ Needs Ranking',*/
                textStyle: textStyle,
                subtextStyle: subtextStyle,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                textStyle: textStyle
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
                show: false
            },
            color: color,
            calculable: true,
            series: []
        };
        myChart.setOption(option);
        $.ajax({
            url: 'htmlInterface/V1/queryOrganNeedsRanking',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (data) {
                var dataND = data;
                myChart.setOption({
                    series: [
                        {
                            name: '机关需求',
                            type: 'pie',
                            radius: ["10%", "45%"],
                            center: ['50%', '55%'],
                            gap: 5,
                            roseType: 'area',
                            max: 40,                // for funnel
                            sort: 'ascending',     // for funnel
                            //data:dataND
                            data: (function () {
                                var arr = []
                                $.each(dataND, function (index, item) {
                                    arr.push({
                                        name: item.value,
                                        value: item.name,
                                        itemStyle: {
                                            normal: {
                                                color: new echarts.graphic.LinearGradient(
                                                    0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: leftTopFore[index * 2]
                                                    },
                                                        {
                                                            offset: 1,
                                                            color: leftTopFore[index * 2 + 1]
                                                        }
                                                    ]
                                                ),

                                            },
                                        },
                                        label: {
                                            color: leftTopFore[index * 2],

                                        },
                                        labelLine: {
                                            length: 4,
                                            length2: 3
                                        }
                                    })
                                })
                                return arr;
                            })()
                        }
                    ]
                })
            }
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function topRight_bottom() {
        var myChart = echarts.init(document.getElementById('tr3'));
        option = {
            title: {
                text: '民需事件、志愿服务处理排名',
                /*subtext: 'Ranking of Civil Demand Events and Volunteer Service Processing',*/
                textStyle: textStyle,
                subtextStyle: subtextStyle,
            },
            grid: {
                borderWidth: 1,
                y: '25%',        //上边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: textStyle
            },
            legend: {
                show: false,
                data: ['利润', '民需事件', '民需服务']
            },
            calculable: true,
            xAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        outside: true,
                        interval: 0,
                        textStyle: {
                            color: '#095FC9'
                        }

                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#095FC9'
                        }
                    },
                }
            ],
            color: ['#FF4D2A', '#FAB01A', '#09a9b2'],
            yAxis: [
                {
                    show: false,
                    type: 'category',
                    axisLabel: {
                        outside: true,
                        textStyle: {
                            color: '#0BB6DB'
                        }
                    },
                    axisTick: {       //y轴刻度线
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#095FC9'
                        }
                    },
                    data: [/*'二道区','朝阳区','南关区'*/]
                }
            ],
            series: [

                {
                    name: '民需服务',
                    type: 'bar',
                    stack: '总量',
                    // barWidth : 8,
                    itemStyle: {
                        normal: {

                            label: {
                                show: true,
                                position: "inside",
                                formatter: function (param) {
                                    return param.name;//param.seriesName.substr(0, 2) + "：" + param.name;
                                },
                                textStyle: {
                                    fontSize: 10
                                }
                            },
                            legend: {
                                show: false,
                            },
                            barBorderRadius: [0, 10, 10, 0],
                            color: function (params) {
                                var colorList = ['#FAB01A', '#fad81a', '#f36815', '#f39215', '#FF4D2A', '#ff7a2a'];
                                var index = params.dataIndex;
                                /*if(params.dataIndex >= colorList.length){
                                        index=params.dataIndex-colorList.length;
                                 }*/

                                return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                    [
                                        {offset: 0, color: colorList[index * 2]},
                                        {offset: 1, color: colorList[index * 2 + 1]}
                                    ]);
                            }
                        }
                    },
                    data: [/*320, 302, 341*/]
                },
                {
                    name: '志愿服务',
                    type: 'bar',
                    // barWidth : 8,
                    //stack: '总量',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, position: "inside",
                                formatter: function (param) {
                                    return param.name;//param.seriesName.substr(0, 2) + "：" + param.name;
                                },
                                textStyle: {
                                    fontSize: 10
                                }
                            },
                            barBorderRadius: [10, 0, 0, 10],
                            color: function (params) {
                                var colorList = ['#00F260', '#00f2ab', '#02b89f', '#05ccb1', '#0575E6', '#3e90e3'];
                                var index = params.dataIndex;
                                /*if(params.dataIndex >= colorList.length){
                                        index=params.dataIndex-colorList.length;
                                 }*/

                                return new echarts.graphic.LinearGradient(1, 0, 0, 0,
                                    [
                                        {offset: 0, color: colorList[index * 2]},
                                        {offset: 1, color: colorList[index * 2 + 1]}
                                    ]);
                            }
                        }
                    },
                    data: [/*-320, -232, -201*/]
                }
            ]
        };
        myChart.setOption(option);
        $.ajax({
            url: 'htmlInterface/V1/queryCivilianNeedsEventsVolunteerServiceProcessingRank',
            type: 'get',
            dataType: 'json',
            async: false,
            data: {},
            success: function (data) {
                var arr = [];
                $.each(data.name, function (index, item) {
                    arr.push(item.substr(3))
                })
                myChart.setOption({
                    yAxis: [{data: arr}],
                    series: [
                        {data: data.left},
                        {data: data.right}
                    ]
                })
            }
        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function ajaxFn(index) {
        $.ajax({
            type: "POST",
            url: "/culture_practice_core/htmlInterface/V1/selectAreaWithSomeNum",
            data: {
                code: index
            },
            async: false,
            success: function (data) {
                $("#xxContent").empty();

                $("#zyzrs").html(data.ext1 + "(人)");
                $("#zyztds").html(data.ext2 + "(个)");
                // $("#ljfwrc").html(data.ext3+"(人)");
                // $("#ljfwsc").html(data.ext4+"(小时)");


                var xxStr = ""
                for (var i = 0; i < data.ext5; i++) {
                    xxStr += '<img data-index= "' + i + '"src="img/xxm.png"></img>'
                }
                for (var i = data.ext5; i < 5; i++) {
                    xxStr += '<img data-index= "' + i + '"src="img/xxk.png"></img>'
                }
                $("#xxContent").append(xxStr)
            }
        });
    }

    var target_;
    //在IHtmlInterfaceVOService 类中取到的死数据0612
    $("#xzqh").html("九台区");
    $("#zyzrs").html("2565(人)");
    $("#zyztds").html("242(个)");
    $("svg#svg-jt polygon[id^=part]").on("click", function (e) {
        target_ = $(this).data("index");
        if (target_ == "518") {
            return false;
        }
        $(".cls-2").css("fill", "rgba(255,255,255,0)");
        $(this).css("fill", "rgba(255,255,255,0.2)");
        $("#xzqh").html($(this).data("name"))
        ajaxFn(target_)

    }).hover(function (e) {
        if ($(this).data("index") == "518") {
            return false;
        }
        if ($(this).data("index") != target_) {
            $(this).css("fill", "rgba(255,255,255,0.2)");
        }
    }, function (e) {
        if ($(this).data("index") != target_) {
            $(this).css("fill", "rgba(255,255,255,0)");
        }

    })
})