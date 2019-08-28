define(["jquery", "echarts"], function ($, echarts) {
    /**
     * 限定柱形图的宽度 series每一项： barWidth:5,
     * 常量配置
     * @type {{toolTipBG: string, toolTipColor: string, toolTipLineColor: string, toolTipCrossColor: string, legendIcon: {lineDefault: string, barGradient: string}, axisLineColor: string}}
     */
        //渐变色
    var gradientColor = {
            start: "#1BDFDC",
            end: '#1DF6B0'
        }

    //Echarts使用到的字体大小
    var scale = window.innerWidth / 1920;//基准是1920px 来计算当前窗口显示的字号
    var fontSizeInit = {
        legend: 12,//图例字号
        label: 12,//轴上的文字字号
        tooltip: 14
    }
    var fontSize = {
        legend: 12,// * scale,//图例字号
        label: 12,// * scale,//轴上的文字字号
        tooltip: 14,// * scale
    }
    //圆弧或者饼图大小
    var barSize = {
        barWidth: 6,
        barMaxWidth: 8
    }
    var radius = {
        max: 77,//最外层的大小
        width: 6,//宽度,这个宽度也在柱形图中使用到了
        margin: 6,//阴影单侧宽度
        center: ["50%", "55%"],
        padding: 10//多弧时  弧间距
    }
    var config = {
        fontFamily:"宋体",
        labelColor: "#83c2ff",//轴上文字颜色
        toolTipBG: "rgba(0, 34, 46,0.95)",
        toolTipColor: "#00FFF6",
        toolTipBorder: "#14283a",
        toolTipBorderWidth: 1,
        toolTipLineColor: 'RGBA(77, 112, 140, 1)',
        toolTipCrossColor: 'RGBA(77, 112, 140, 1)',
        legendIcon: {
            lineDefault: "path://M21.000,3.000 L12.949,3.000 C12.718,4.141 11.709,5.000 10.500,5.000 C9.290,5.000 8.282,4.141 8.050,3.000 L-0.000,3.000 L-0.000,2.000 L8.050,2.000 C8.282,0.859 9.290,-0.000 10.500,-0.000 C11.709,-0.000 12.718,0.859 12.949,2.000 L21.000,2.000 L21.000,3.000 Z",
            barGradient: "path://M3.000,-0.000 L13.000,-0.000 C14.657,-0.000 16.000,1.343 16.000,3.000 C16.000,4.657 14.657,6.000 13.000,6.000 L3.000,6.000 C1.343,6.000 -0.000,4.657 -0.000,3.000 C-0.000,1.343 1.343,-0.000 3.000,-0.000 Z"
        },
        axisLineColor: 'rgba(9, 95, 201, 1)',
        legendType: "scroll",//图例滚动条
        //图例分页样式
        pageIcons: ['path://M0.350,3.126 L3.297,-0.003 L3.992,0.734 L1.392,3.495 L3.992,6.255 L3.297,6.992 L0.350,3.863 L0.004,3.495 L0.350,3.126 Z', 'path://M3.650,3.126 L0.703,-0.003 L0.008,0.734 L2.608,3.495 L0.008,6.255 L0.703,6.992 L3.650,3.863 L3.996,3.495 L3.650,3.126 Z'],
        pageIconColor: "rgb(77, 112, 140)",
        pageIconColorActive: "rgb(0, 255, 246)",
        pageTextStyle: {
            color: "rgb(77, 112, 140)",
            fontSize: fontSize.legend
        }
    }
    //直角坐标系会用到的tooltip
    var tooltip = {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            snap: true,
            label: {
                show: true,
                color: config.toolTipColor,
                fontsSize: fontSize.label,
                backgroundColor: config.toolTipBG,

            },

            lineStyle: {          // 直线指示器样式设置
                color: config.toolTipLineColor
            },
            crossStyle: {
                color: config.toolTipColor
            },
            shadowStyle: {                     // 阴影指示器样式设置
                color: 'rgba(200,200,200,0.2)'
            }
        },
        borderColor: config.toolTipBorder,
        borderWidth: config.toolTipBorderWidth,
        backgroundColor: config.toolTipBG,
        textStyle: {
            fontSize: fontSize.tooltip,
            fontFamily:config.fontFamily
        }
    };
    var grid = {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: "18%",
        containLabel: true
    };

    /**
     * 柱线混搭
     * @param json
     */
    var barLineFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        //图例
        this.series = json.series;
        this.legendData = json.legendData;
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            tooltip: tooltip,
            calculable: true,
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: "10%",
                containLabel: true
            },
            legend: {
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                right: "3%",
                data: (function () {
                    var arr = [];
                    $.each(that.legendData, function (index, item) {
                        var map = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color,
                                fontFamily:config.fontFamily
                            },
                        };
                        if (item.type == "line") {
                            map.icon = config.legendIcon.lineDefault;
                        } else {
                            map.icon = config.legendIcon.barGradient;
                        }
                        arr.push(map);
                    })
                    return arr;
                })()
            },
            xAxis: {
                name: '',
                type: "category",
                data: ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                axisLabel: {
                    outside: false,
                    textStyle: {
                        color: config.labelColor,
                        fontSize: fontSize.label,
                        fontFamily:config.fontFamily
                    },
                    interval:0,
                    formatter: function (value, index) {
                        // {b}</br> {c} ({d}%)
                        // 格式化成月/日，只在第一个刻度显示年份
                        var arr = value.split("");
                        return arr.join("\n");
                    }
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    lineStyle: {
                        color: config.axisLineColor
                    }
                },
                z: 10
            },
            yAxis: [
                {
                    axisLabel: {
                        outside: true,
                        textStyle: {
                            color: config.axisLineColor,
                            fontSize: fontSize.label,
                            fontFamily:config.fontFamily
                        }
                    },
                    axisTick: {       //y轴刻度线
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: config.axisLineColor
                        }
                    },
                }
            ],
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: (function () {
                //第一项是柱后面的背景
                var arr = [{
                    type: "bar",
                    itemStyle: {
                        normal: {color: config.toolTipBG}
                    },
                    barGap: '-100%',
                    barCategoryGap: '80%',
                    animation: true,
                    uy7: that.barShadow ? barSize.barMaxWidth : 0,//
                    data: [0, 0, 0, 0, 0, 0, 0]
                }]
                $.each(that.series, function (index, item) {
                    var map = {
                        name: item.name,
                        type: item.type,
                    }
                    if (item.type == "bar") {
                        //单柱渐变色
                        // map.barMaxWidth = barSize.barMaxWidth;
                        map.itemStyle = {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: gradientColor.start},
                                        {offset: 1, color: gradientColor.end}
                                    ]
                                ),
                                barBorderRadius: [15, 15, 0, 0]
                            },
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: gradientColor.start},
                                        {offset: 1, color: gradientColor.end}
                                    ]
                                )
                            }
                        }
                    } else {
                        map.yAxisIndex = 0;
                        map.color = item.color;
                    }
                    map.data = [];
                    arr.push(map);
                })
                return arr;
            })(),
        })

        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "bar")
        });

    }
    barLineFn.prototype = {
        setOption: function (data) {
            var that = this;
            this.target.setOption({
                tooltip: {
                    formatter: function (param) {
                        var str = param[1].axisValue + ":<br/>";
                        for (var i = 1; i < param.length; i++) {
                            str += '<span class="tooltip-lb-' + param[i].seriesIndex + '"></span>' + param[i].seriesName + ":" + param[i].value + "</br>"
                        }
                        return str;
                    }
                },
                xAxis: {
                    data: (function () {
                        var arr = (data.xAxis.data).map(function (item, index) {
                            return item + data.xAxis.name
                        })
                        return arr
                    })()
                },
                series: (function () {
                    var maxArr = [];
                    var length = 0;
                    $.each(data.series, function (index, item) {
                        item.symbol = "circle";
                        maxArr = maxArr.concat(item.data);
                        length = item.data.length;
                    })
                    var max = Math.max.apply(null, maxArr);
                    var shadowArr = Array.apply(null, Array(length)).map(function (item, index) {
                        return that.max;
                    })
                    var arr = ([{
                        type: 'bar',
                        data: shadowArr
                    }]).concat(data.series)
                    return arr;
                })()
            })
        }
    }

    /**
     * 折线图
     * @param json
     */
    var lineFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        //图例
        this.series = json.series;
        this.legendData = json.legendData;
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.color = (function () {
            var map_ = {};
            (that.legendData).map(function (item, index) {
                map_[item.name] = item.color;
            })
            return map_;
        })();
        this.target.setOption({
            tooltip: tooltip,
            calculable: true,
            grid: grid,
            legend: {
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                right: "3%",
                data: (function () {
                    var arr = [];
                    $.each(that.legendData, function (index, item) {
                        var map = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color
                            },
                            icon: config.legendIcon.lineDefault
                        };
                        arr.push(map);
                    })
                    return arr;
                })()
            },
            xAxis: {
                name: '',
                type: "category",
                data: ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                axisLabel: {
                    outside: true,
                    textStyle: {
                        color: config.axisLineColor,
                        fontSize: fontSize.label,
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: config.axisLineColor
                    }
                },
                z: 10
            },
            yAxis: [
                {
                    axisLabel: {
                        outside: true,
                        textStyle: {
                            color: config.axisLineColor,
                            fontSize: fontSize.label
                        }
                    },
                    axisTick: {       //y轴刻度线
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: config.axisLineColor
                        }
                    },

                }
            ],
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: []
        })

        if (json.clickabled) {
            that.target.on("click", function (params) {
                return json.clickCallback({
                    seriesName: params.seriesName,
                    name: params.name,
                    value: params.value
                })
            })
        }

        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "line")
        });
    }
    lineFn.prototype = {
        setOption: function (data) {
            var that = this;
            this.target.setOption({
                xAxis: {
                    data: (function () {
                        var arr = (data.xAxis.data).map(function (item, index) {
                            return item + data.xAxis.name
                        })
                        return arr
                    })()
                },
                series: (function () {
                    var data_ = data.series;
                    $.each(data_, function (index, item) {
                        item.color = that.color[item.name];
                        item.symbol = "circle";
                    })
                    return data_;

                })()
            })
        }
    }

    /**
     * 柱状图:单柱，堆叠，排列
     *
     * 单柱的还没测
     */
    var barFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }

        //图例
        this.series = json.series;
        this.legendData = json.legendData || [];
        this.type = json.type;
        this.singleColors = json.colors;
        this.color = (function () {
            var arr = [];
            //N个柱 N个颜色
            (that.legendData).map(function (item, index) {
                arr.push(item.color);
            })
            return arr;
        })();
        this.rotate = json.rotate || 0;
        this.orient = json.orient || "horizontal";
        this.target = echarts.init(document.getElementById(json.id));//图表容器id

        this.target.setOption({
            tooltip: tooltip,
            calculable: true,
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: "10%",
                containLabel: true
            },
            color: that.color,
            legend: {
                show: true,//that.legendStatus,
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                left: "3%",
                icon: "circle",
                itemWidth: 10,
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(that.legendData, function (index, item) {
                        var map = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color,
                                fontFamily:config.fontFamily
                            },
                        };
                        arr.push(map);
                    })
                    return arr;
                })()
            },
            xAxis: (function () {
                var map_ = {
                    name: '',
                    axisLabel: {
                        outside: false,
                        textStyle: {
                            color: config.labelColor,
                            fontFamily:config.fontFamily,
                            // fontSize: fontSize.label,
                            fontSize: (function () {
                                return fontSize.label;
                            })(),
                        },
                        interval:0,
                        formatter: function (value, index) {
                            var arr = value.split("");
                            return arr.join("\n");
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
                            color: config.axisLineColor
                        }
                    },
                    z: 10
                }
                if (json.orient == "vertical") {
                    map_.type = "value";
                } else {
                    map_.type = "category";
                    map_.data = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
                }
                return map_;
            })(),
            yAxis: (function () {
                var arr = []
                var map_ = {
                    axisLabel: {
                        outside: true,
                        textStyle: {
                            color: config.labelColor,
                            fontSize: fontSize.label,
                            fontFamily:config.fontFamily,
                        },
                        rotate: (function () {
                            try {
                                return json.rotate.y ? 45 : 0
                            } catch (e) {
                                return 0
                            }
                        })()
                    },
                    axisTick: {       //y轴刻度线
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: config.axisLineColor
                        }
                    },
                    z: 10
                };
                if (json.orient == "vertical") {
                    map_.type = "category";
                    map_.data = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
                } else {
                    map_.type = "value";
                }
                arr.push(map_);
                return arr;
            })(),
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: (function () {
                var arr = (that.type == "stack" || that.type == "single-colors") ? [{
                    name: "shadow",
                    type: "bar",
                    itemStyle: {
                        normal: {color: config.toolTipBG}
                    },
                    barGap: '-100%',
                    barCategoryGap: '80%',
                    animation: true,
                    // barMaxWidth: barSize.barMaxWidth,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }] : [];
                $.each(that.legendData, function (index, item) {
                    var map = {
                        name: item.name,
                        type: "bar",
                        // barMaxWidth: barSize.barMaxWidth
                    }
                    map.data = [];
                    arr.push(map);
                })
                return arr;
            })(),
        })

        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "bar")
        });
    }
    barFn.prototype = {
        setOption: function (data) {
            var that = this;
            if (that.type == "single-colors") {
                //1个柱N个颜色
                that.color = gradientColors(that.singleColors[0], that.singleColors[1], data.xAxis.data.length);
            }
            this.target.setOption({
                tooltip: {
                    formatter: function (param) {
                        var str = param[1].axisValue + ":<br/>";
                        for (var i = that.barShadow ? 1 : 0; i < param.length; i++) {
                            str += param[i].marker + param[i].seriesName + ":" + param[i].value + "</br>"
                        }
                        return str;
                    }
                },
                xAxis: (function () {
                    if (that.orient == "vertical") {
                        return {};
                    } else {
                        return {
                            data: (function () {
                                var arr = (data.xAxis.data).map(function (item, index) {
                                    return item + data.xAxis.name
                                })
                                return arr
                            })()
                        }
                    }
                })(),
                yAxis: (function () {
                    if (that.orient == "vertical") {
                        return [{
                            data: (function () {
                                var arr = (data.xAxis.data).map(function (item, index) {
                                    return item + data.xAxis.name
                                })
                                return arr
                            })()
                        }]
                    } else {
                        return []
                    }
                })(),
                series: (function () {
                    var max = 0;
                    var length = 0;
                    var data_ = [];
                    $.each(data.series, function (index, item) {
                        max += Math.max.apply(null, item.data);
                        length = item.data.length;
                        // item.barMaxWidth = barSize.barMaxWidth;
                        //柱形图类型
                        if (that.type == "stack") {
                            item.stack = "总量";

                            if (index + 1 == data.series.length) {
                                item.itemStyle = {
                                    normal: {
                                        barBorderRadius: that.orient == "vertical" ? [0, 15, 15, 0] : [15, 15, 0, 0]
                                    }
                                };
                                item.color = that.color[item.name];
                            }
                        } else if (that.type == "single-colors") {

                            item.itemStyle = {
                                //通常情况下：
                                normal: {
                                    //每个柱子的颜色即为colorList数组里的每一项
                                    color: function (params) {
                                        return that.color[params.dataIndex];
                                    },
                                    barBorderRadius: that.orient == "vertical" ? [0, 15, 15, 0] : [15, 15, 0, 0]
                                },
                                //鼠标悬停时：
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        } else {
                            item.itemStyle = {
                                normal: {
                                    barBorderRadius: that.orient == "vertical" ? [0, 15, 15, 0] : [15, 15, 0, 0]
                                }
                            };
                        }
                        data_.push(item);
                    })
                    var shadowArr;
                    if (that.type == "stack" || that.type == "single-colors") {
                        shadowArr = Array.apply(null, Array(length)).map(function (item, index) {
                            return max;
                        })
                    } else {
                        shadowArr = [];
                    }
                    var arr = ([{
                        type: 'bar',
                        data: shadowArr
                    }]).concat(data_)
                    return arr;
                })()
            })
        }
    }

    /**
     * 饼图
     * @param json
     */
    var pieFn = function (json, callback) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}</br> {c} ({d}%)",
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontSize: fontSize.legend,
                        fontFamily:config.fontFamily,
                        backgroundColor: config.toolTipBG
                    },
                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                },
                backgroundColor: config.toolTipBG,
                textStyle: {
                    fontSize: fontSize.legend,
                    fontFamily:config.fontFamily,
                }
            },
            legend: {
                show: ((typeof json.legend == "undefined") || json.legend) ? true : false,
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: json.orient || 'horizontal',
                x: json.x || 'center',
                y: json.y || "top",
                icon: 'circle',
                itemWidth: 10,  // 设置宽度
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(json.legendData, function (index, item) {
                        var map_ = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color
                            }
                        }
                        arr.push(map_)
                    })
                    return arr;
                })()
            },
            color: (function () {
                var arr = [];
                $.each(json.legendData, function (index, item) {
                    arr.push(item.color);
                })
                return arr;
            })(),
            series: []

        })
        if (callback) {
            that.target.on("click", function (param) {
                return callback(param.data)
            });
        }
        window.addEventListener("resize", function () {
            fontSizeResize(that.target, "pie")
        });
    }
    pieFn.prototype = {
        setOption: function (data) {
            var that = this;
            that.target.setOption({
                series: (function () {
                    var arr = [{
                        name: data.name,
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [(radius.max - radius.width) + "%", (radius.max) + "%"],
                        center: radius.center,
                        label: {
                            normal: {
                                show: false,
                                position: 'inner',

                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data.data,
                        z: 10
                    }, {
                        name: '',
                        type: 'pie',
                        radius: [(radius.max - radius.width - radius.margin) + "%", (radius.max + radius.margin) + "%"],
                        center: radius.center,
                        hoverAnimation: false,
                        data: [
                            {value: 1, name: ''}
                        ],
                        itemStyle: {
                            color: config.toolTipBG
                        },
                        z: 1,
                        tooltip: {
                            show: false
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inner',
                                fontFamily: "宋体",
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    }]
                    return arr;
                })()
            })
        }
    }

    /**
     * 饼图：南丁格尔玫瑰图
     */
    var pieFn2 = function (json, callback) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
            return false;
        }
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            grid:{
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: "3%",
                containLabel: true
            },
            tooltip: {
                show: json.tooltip || true,
                trigger: 'item',
                formatter: "{b}</br> {c} ({d}%)",
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontSize: fontSize.legend,
                        backgroundColor: config.toolTipBG
                    },
                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                },
                backgroundColor: config.toolTipBG,
                textStyle: {
                    fontSize: fontSize.legend,
                }
            },
            legend: {
                show: ((typeof json.legendData == "undefined") || json.legendData) ? true : false,
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: json.orient || 'horizontal',
                x: json.x || 'center',
                y: json.y || "top",
                icon: 'circle',
                itemWidth: 10,  // 设置宽度
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(json.legendData, function (index, item) {
                        var map_ = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color
                            }
                        }
                        arr.push(map_)
                    })
                    return arr;
                })()
            },
            color: (function () {
                var arr = [];
                $.each(json.legendData, function (index, item) {
                    arr.push(item.color);
                })
                return arr;
            })(),
            series: []
        })
        this.endColor = ['#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18"];
        this.startColor = ['#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B", '#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B"];
        if (callback) {
            that.target.on("click", function (param) {
                return callback(param.data)
            });
        }
        window.addEventListener("resize", function () {
            fontSizeResize(that.target, "pie")
        });
    }
    pieFn2.prototype = {
        setOption: function (data) {
            var that = this;
            that.target.setOption({
                series: [
                    //中心圆环
                    {
                        radius: ['7%', '8%'],
                        center: ['50%', '55%'],
                        type: 'pie',
                        label: {
                            normal: {
                                color: "red",
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [{
                            value: 100,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: '#1DEEBE',
                                }
                            }
                        }],
                        animation: false
                    },
                    //真实数据
                    {
                        radius: ['17%', '50%'],
                        center: ['50%', '55%'],
                        type: 'pie',
                        roseType: 'radius',
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    textStyle: {
                                        fontSize: 12
                                    },
                                    formatter: function (param) {
                                        return param.name + ':\n' + param.value;
                                    },
                                    fontFamily:config.fontFamily,
                                },
                                labelLine: {
                                    length: 10,
                                    length2: 7
                                }
                            }
                        },
                        avoidLabelOverlap: true,
                        data: (function () {
                            data.forEach(function(item, index){
                                item.label = {
                                    color: that.startColor[index]
                                };
                                item.itemStyle = {
                                    normal: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: that.startColor[index] // 0% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: that.endColor[index] // 100% 处的颜色
                                            }],
                                            global: false // 缺省为 false
                                        },
                                    }
                                }
                            });
                            return data;
                        })(data),
                    }]

            })
        }
    }


    /**
     * 饼图：漩涡
     * @param json
     * @param callback
     * @returns {boolean}
     */
    var pieFn3 = function (json, callback) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
            return false;
        }
        this.id = json.id;
        this.endColor = ['#7D71F3', '#773EFD', '#FF8E02', '#2E93FF', '#1AD2F4', "#FF472B"];
        this.startColor = ['#1F45E6', '#FF1871', '#FBFF2A', '#096EF0', '#1EFF9E', "#FABB18"];
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            title: {
                text: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: fontSize.label,
                },
                x: 'center',
                y: 'center',
            },
            tooltip: {
                show: json.tooltip || true,
                trigger: 'item',
                formatter: "{b}</br> {c} ({d}%)",
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontSize: fontSize.legend,
                        backgroundColor: config.toolTipBG
                    },
                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                },
                backgroundColor: config.toolTipBG,
                textStyle: {
                    fontSize: fontSize.legend,
                }
            },
            legend: {
                show: ((typeof json.legendData == "undefined") || json.legendData) ? true : false,
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: json.orient || 'horizontal',
                x: json.x || 'center',
                y: json.y || "middle",
                icon: 'circle',
                itemWidth: 10,  // 设置宽度
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(json.legendData, function (index, item) {
                        var map_ = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color || that.startColor[index]
                            }
                        }
                        arr.push(map_)
                    })
                    return arr;
                })()
            },
            color: (function () {
                var arr = [];
                $.each(json.legendData, function (index, item) {
                    arr.push(item.color);
                })
                return arr;
            })(),
            series: []
        })

        if (callback) {
            that.target.on("click", function (param) {
                return callback(param.data)
            });
        }
        window.addEventListener("resize", function () {
            fontSizeResize(that.target, "pie")
        });
    }
    pieFn3.prototype = {
        setOption: function (name, data) {
            var that = this;
            that.target.setOption({
                title: {
                    // left: (function () {
                    //     console.log($("#"+that.id).width()*0.4 - name.length* fontSize.label/2)
                    //     return $("#"+that.id).width()*0.4 - name.length* fontSize.label/2;
                    // })(),
                    // top: "58%",
                    text: name,
                    textStyle: {
                        color: '#fff',
                        fontSize: fontSize.label,
                    },
                },
                series: (function () {
                    var series = [];
                    for (var i = 0; i < 8; i++) {
                        series.push({
                            center: ['50%', '50%'],
                            name: '浏览器（数据纯属虚构）',
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: i > 6,
                                        textStyle: {
                                            fontSize: fontSize.legend,
                                        },
                                        formatter: function (param) {
                                            return param.name + ':\n' + (+param.value - i * 64 * (i + 1));
                                        },
                                        fontFamily:config.fontFamily,
                                    },
                                    labelLine: {
                                        show: i > 6,
                                        length: 20
                                    }
                                }
                            },
                            silent: true,
                            radius: [(6 * i + 20) + "%", (6 * i + 25) + "%"],
                            data: (function () {
                                var arr = [];
                                data.forEach(function (item, index) {
                                    arr.push({
                                        label: {
                                            color: that.startColor[index]
                                        },
                                        value: i * 128 / 2 * (i + 1) + (+item.value),
                                        name: item.name,
                                        labelLine: {
                                            length: 4,
                                            length2: 8
                                        },
                                        itemStyle: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0,
                                                    color: that.startColor[index] // 0% 处的颜色
                                                }, {
                                                    offset: 1,
                                                    color: that.endColor[index] // 100% 处的颜色
                                                }],
                                                global: false // 缺省为 false
                                            }
                                        }
                                    })
                                })
                                return arr;
                            })()
                        })
                    }
                    return series;
                })()
            })
        }
    }

    /**
     * 多环环形图
     * @param hexStr
     * @returns {number[]}
     */
    var circlesFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            tooltip: {
                show: false,//判断
                trigger: 'item',
                formatter: "{b}</br> {c} ({d}%)",
                borderColor: config.toolTipBorder,
                borderWidth: config.toolTipBorderWidth,
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontSize: fontSize.legend,
                        backgroundColor: config.toolTipBG
                    },
                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                },
                backgroundColor: config.toolTipBG,
                textStyle: {
                    fontSize: fontSize.legend,
                }
            },
            legend: {
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                x: 'center',
                icon: 'circle',
                itemWidth: 10,  // 设置宽度
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(json.legendData, function (index, item) {
                        var map_ = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color
                            }
                        }
                        arr.push(map_)
                    })
                    return arr;
                })()
            },
            color: (function () {
                var arr = [];
                $.each(json.legendData, function (index, item) {
                    arr.push(item.color);
                })
                return arr;
            })(),
            graphic: (function () {
                return [];
                // return [{
                //     type: 'text',
                //     left: 'center',
                //     top: '40%',
                //     style: {
                //         text: '成交到访比',
                //         fill: 'rgba(0, 255, 246, 1)',
                //         width: 30,
                //         height: 25,
                //         fontSize: 12,
                //     }
                // }, {
                //     type: 'text',
                //     left: 'center',
                //     top: '50%',
                //     style: {
                //         text: '成交报备比',
                //         fill: 'rgba(0, 255, 246, 1)',
                //         width: 30,
                //         height: 25,
                //         fontSize: 12,
                //     }
                // }, {
                //     type: 'text',
                //     left: 'center',
                //     top: '60%',
                //     style: {
                //         text: '到访报备比',
                //         fill: 'rgba(0, 255, 246, 1)',
                //         width: 30,
                //         height: 25,
                //         fontSize: 12,
                //     }
                // }]
            })(),
            series: []
        })
        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "circle")
        });
    }
    circlesFn.prototype = {
        setOption: function (data) {
            var that = this;
            that.target.setOption({
                series: (function () {
                    var arr = [];
                    var radius_ = radius.max;

                    $.each(data.data, function (index, item) {
                        var map_ = {
                            name: item.name,
                            type: 'pie',
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [(radius_ - radius.width) + "%", (radius_) + "%"],
                            center: radius.center,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false,
                                    }
                                }
                            },
                            data: [
                                {
                                    name: item.name,
                                    value: item.value,
                                },
                                {
                                    name: '',
                                    value: data.data[0].value - item.value,
                                    itemStyle: {
                                        normal: {
                                            color: config.toolTipBG,
                                            label: {
                                                show: false,
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                        arr.push(map_);
                        radius_ -= radius.padding;
                    })
                    return arr;
                })()
            })
        }
    }

    /**
     * 单环
     * @param json
     */
    var circleFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        this.labelTop = {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: gradientColor.start},
                        {offset: 1, color: gradientColor.end}
                    ]
                ),
                barBorderRadius: [15, 15, 15, 15],
                label: {
                    show: false,
                    position: 'center',
                    formatter: '{b}',
                    textStyle: {
                        baseline: 'bottom',
                        color: 'rgba(0, 255, 246, 1)',
                        fontSize: fontSize.legend,
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}</br> {c} ({d}%)",
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontsSize: fontSize.label,
                        backgroundColor: config.toolTipBG
                    },
                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                },
                backgroundColor: config.toolTipBG,
                borderColor: config.toolTipBorder,
                borderWidth: config.toolTipBorderWidth,
                textStyle: {
                    fontSize: fontSize.label
                }
            },
            legend: {
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                x: 'center',
                icon: 'circle',
                itemWidth: 10,  // 设置宽度
                itemGap: 15, // 设置间距
                data: (function () {
                    var arr = [];
                    $.each(json.legendData, function (index, item) {
                        var map_ = {
                            name: item.name,
                            textStyle: {
                                fontSize: fontSize.legend,
                                color: item.color
                            }
                        }
                        arr.push(map_)
                    })
                    return arr;
                })()
            },
            color: (function () {
                var arr = [];
                $.each(json.legendData, function (index, item) {
                    arr.push(item.color);
                })
                return arr;
            })(),
            series: []

        })

        window.addEventListener("resize", function () {

            fontSizeResize(that.target, "circle")
        });

    }
    circleFn.prototype = {
        setOption: function (data) {
            var that = this;
            that.target.setOption({
                series: (function () {
                    var arr = [{
                        clockwise: false,
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [(radius.max - radius.width) + "%", (radius.max) + "%"],
                        center: radius.center,
                        label: {
                            normal: {
                                show: false,
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        selectedOffset: 0,
                        hoverAnimation: false,
                        itemStyle: that.labelTop,
                        data: (function () {
                            var arr = [];
                            $.each(data.data, function (index, item) {
                                var map_ = {};
                                if (item.name) {
                                    map_ = item;
                                    map_.itemStyle = that.labelTop;
                                } else {
                                    map_ = {
                                        name: item.name,
                                        value: item.value,
                                        tooltip: {
                                            show: false
                                        },
                                        itemStyle: {
                                            color: "#00424c"
                                        }
                                    }
                                }
                                arr.push(map_);
                            })
                            return arr;
                        })(),
                        z: 10
                    }, {
                        clockwise: false,
                        name: '',
                        type: 'pie',
                        radius: [(radius.max - radius.width - radius.margin) + "%", (radius.max + radius.margin) + "%"],
                        center: radius.center,
                        hoverAnimation: false,
                        data: [
                            {value: 1, name: ''}
                        ],
                        itemStyle: {
                            color: config.toolTipBG
                        },
                        z: 1,
                        tooltip: {
                            show: false
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    }]
                    return arr;
                })()
            })
        }
    }


    var radarFn = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        var legendData = [], idicator = [], colors = {}, color = [];
        $.each(json.legendData, function (index, item) {
            legendData.push({
                name: item.name,
                textStyle: {
                    fontSize: fontSize.legend,
                    color: item.color
                },

            });
            colors[item.name] = item.color;
            color.push(item.color)
        })
        this.legendData = legendData;
        this.colors = colors;
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            color: color,
            tooltip: {
                trigger: 'item',
                position: function (pos, params, dom, rect, size) {
                    // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                    return {left: pos[0] + 20, top: pos[1]};
                },
                borderColor: config.toolTipBorder,
                borderWidth: config.toolTipBorderWidth,
                axisPointer: {
                    type: 'cross',
                    snap: true,
                    label: {
                        show: true,
                        color: config.toolTipColor,
                        fontsSize: fontSize.label,
                        backgroundColor: config.toolTipBG
                    },

                    lineStyle: {          // 直线指示器样式设置
                        color: config.toolTipLineColor
                    },
                    crossStyle: {
                        color: config.toolTipColor
                    },
                    shadowStyle: {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    },

                },
                backgroundColor: config.toolTipBG,
                textStyle: {
                    fontSize: fontSize.legend,
                }
            },
            legend: {
                data: legendData,
                type: config.legendType,
                pageIcons: {
                    horizontal: config.pageIcons
                },
                pageIconColor: config.pageIconColorActive,
                pageIconInactiveColor: config.pageIconColor,
                pageTextStyle: config.pageTextStyle,
                orient: 'horizontal',
                itemWidth: 15,
                itemHeight: 10,

            },
            radar: {
                radius: "65%",
                shape: 'circle',
                name: {
                    textStyle: {
                        color: config.labelColor,
                        fontSize: fontSize.label
                    }
                },
                splitNumber: 4,
                splitLine: {
                    lineStyle: {
                        color: ["#071827", "#071827", "#071827", "#071827", "#36536b"]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: ["#071827"]
                    }
                },
                splitArea: {
                    show: false
                },
                indicator: [
                    {
                        name: "*",
                        max: 10
                    }, {
                        name: "*",
                        max: 10
                    }, {
                        name: "*",
                        max: 10
                    }, {
                        name: "*",
                        max: 10
                    }, {
                        name: "*",
                        max: 10
                    }
                ]
            },
            series: [{
                name: "",
                type: "radar",
                symbol: "circle",
                data: []
            }]
        })
        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "radar")
        });
    }
    radarFn.prototype = {
        setOption: function (data, callback) {
            var that = this;

            //计算雷达图 每一个极坐标得最大值
            var series = [], maxArr = [], maxArr_ = [], indicator = [];
            $.each(data.series, function (index, item) {
                for (var i = 0; i < item.value.length; i++) {
                    maxArr_[i] = maxArr_[i] ? maxArr_[i] : [];
                    maxArr_[i][index] = (item.value)[i];
                }
                item.lineStyle = {
                    color: that.colors[item.name]
                }
                item.type = "radar";
                series.push(item);
            })
            for (var i = 0; i < maxArr_.length; i++) {
                maxArr[i] = Math.max.apply(null, maxArr_[i]);
            }

            $.each(data.indicator, function (index, item) {
                indicator.push({
                    name: item, max: maxArr[index] * 1.2
                })
            })
            that.target.setOption({
                radar: {
                    indicator: indicator
                },
                series: [{name: data.name, data: series}]
            })
            return callback(that.target);
        }

    }


    /**
     * 球形水滴
     */
    var liquidFill = function (json) {
        var that = this;
        if (!json.id) {
            alert("请正确配置id");
        }
        var legendData = [], idicator = [], colors = {}, color = [];
        $.each(json.legendData, function (index, item) {
            legendData.push({
                name: item.name,
                textStyle: {
                    fontSize: fontSize.legend,
                    color: item.color
                },

            });
            colors[item.name] = item.color;
            color.push(item.color)
        })
        this.legendData = legendData;
        this.colors = colors;
        this.target = echarts.init(document.getElementById(json.id));//图表容器id
        this.target.setOption({
            backgroundColor: 'rgba(0,0,0,0)',
            title: [{
                text: '全省',
                bottom: 0,
                left: "45%",
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#e9ea00',
                    fontSize: fontSize.legend,
                    textAlign: 'center',
                }
            }],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: json.color[0]},
                            {offset: 1, color: json.color[1]}
                        ]),
                    opacity: 0.95,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                },
                emphasis: {
                    opacity: 0.8
                }
            },
            series: [{
                type: "liquidFill",
                radius: '90%', //调整大小
                shape: 'circle', //修改形状，目前支持    'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                outline: {
                    show: true,
                    borderDistance: 0, //内环padding值
                    itemStyle: {
                        borderWidth: 1, //圆边线宽度
                        show: false,
                        borderColor: 'rgba(9, 95, 201, 1)',
                    },
                },
                backgroundStyle: { // 内图 背景色 边
                    color: 'rgba(0,0,0,0)',
                },
                label: {
                    normal: {
                        textStyle: {
                            fontSize: fontSize.label + 3,
                            color: 'rgba(171, 171, 171, 1)',
                            insideColor: '#FFF',
                            baseline: 'middle',
                            fontWeight: 'normal',
                        }
                    }
                },
                // itemStyle: {
                //     normal: {
                //         color: new echarts.graphic.LinearGradient(
                //             0, 0, 0, 1,
                //             [
                //                 {offset: 0, color: "red"},
                //                 {offset: 1, color: "yellow"}
                //             ]),
                //         global: false // 缺省为 false
                //     },
                // },
                data: []
            }]
        })
        window.addEventListener("resize", function () {
            // fontSizeResize(function () {
            //     that.target.resize();
            // })
            fontSizeResize(that.target, "radar")
        });
    }
    liquidFill.prototype = {
        setOption: function (data, callback) {
            var that = this;
            that.target.setOption({
                title: [{
                    text: data[0].name
                }],
                series: [{data: data}]
            })
            // return callback(that.target);
        }
    }

    /**
     * 总部table
     * @param flag 是table的id
     * @param data 是table数据 是list*
     */
    var timer;
    var tableFn = function (flag, data) {
        var i = 0;
        if(timer){
            clearInterval(timer);
            $(flag+" li:nth-child(n+2)").remove();
        }
        timer = setInterval(function () {
            if (data.length > i) {
                var str = "<li class='fadeInUp'>" +
                    '<div>' + data[i].ext1 + '</div><div>' + data[i].ext2 + '</div><div>' + data[i].ext3 + '</div><div>' + data[i].ext4 + '</div><div>' + data[i].ext5 + '</div><div>' + data[i].ext6 + '</div>' +
                    "</li>";
                $(flag).find("li:nth-child(n+3)").remove();
                $(flag).find("li:nth-child(1)").after(str);
                i++;
            } else {
                //clearInterval(timer);
                i = 0;
            }

        }, 5000)
    }


    //渐变色计算工具方法一
    function parseColor(hexStr) {
        return hexStr.length === 4 ? hexStr.substr(1).split('').map(function (s) {
            return 0x11 * parseInt(s, 16);
        }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function (s) {
            return parseInt(s, 16);
        })
    }

    //渐变色计算工具方法二
    function pad(s) {
        return (s.length === 1) ? '0' + s : s;
    }

    /**
     * 渐变色计算方法入口
     * @param start:渐变色开始颜色
     * @param end：渐变色结束颜色
     * @param steps：渐变多少次
     * @param gamma：无用参数
     * @returns {Array}
     */
    function gradientColors(start, end, steps, gamma) {
        var i, j, ms, me, output = [], so = [];
        gamma = gamma || 1;
        var normalize = function (channel) {
            return Math.pow(channel / 255, gamma);
        };
        start = parseColor(start).map(normalize);
        end = parseColor(end).map(normalize);
        for (i = 0; i < steps; i++) {
            ms = i / (steps - 1);
            me = 1 - ms;
            for (j = 0; j < 3; j++) {
                so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
            }
            output.push('#' + so.join(''));
        }
        return output;
    }

    function fontSizeResize(target, type) {
        var scale = window.innerWidth / 1920;//基准是1920px 来计算当前窗口显示的字号
        //需要修改的字号有：legend tooltip label
        target.setOption({
            tooltip: {
                axisPointer: {
                    label: {
                        fontsSize: fontSizeInit.label * scale,
                    }
                },
                textStyle: {
                    fontSize: fontSizeInit.tooltip * scale,
                }
            },
            legend: {
                pageTextStyle: {
                    fontSize: fontSizeInit.legend * scale
                }
            },
            radar: {
                show: type == "radar" ? true : false,
                name: {
                    textStyle: {
                        fontSize: fontSize.label
                    }
                },
            },
            xAxis: {
                show: (type == "bar" || type == "line" ? true : false),
                axisLabel: {
                    textStyle: {
                        fontSize: fontSizeInit.label * scale,
                    }
                },
            },
            yAxis: [
                {
                    show: (type == "bar" || type == "line" ? true : false),
                    axisLabel: {
                        textStyle: {
                            fontSize: fontSizeInit.label * scale,
                        }
                    },
                }]
        })
        target.resize();
    }

    /**
     * 属性暴漏
     */
    return {
        barLineFn: barLineFn,
        lineFn: lineFn,
        barFn: barFn,
        pieFn: pieFn,
        pieFn2: pieFn2,
        pieFn3: pieFn3,
        circlesFn: circlesFn,
        circleFn: circleFn,
        radarFn: radarFn,
        tableFn: tableFn,
        liquidFill: liquidFill
    };

})