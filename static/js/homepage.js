require.config({
    paths: {
        "jquery": "./jquery-3.3.1.min",
        "echarts": "./echarts.min",
        "echartsliquidfill": "./echarts-liquidfill",
        "toolsEcharts": "./tools.echarts",
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "toolsEcharts": {
            deps: ["jquery", "echarts", "echartsliquidfill"],
            exports: "toolsEcharts"
        }
    }
})
require(["jquery", "toolsEcharts"], function ($, echartsFn) {
    //初始化 包含字段series、legendData的值
    //民需中心
    var partA = new echartsFn.pieFn2({tooltip: false, id: "partA"})

    //点单中心,考核中心,志愿中心
    var partB, partC, partD;
    var partE = new echartsFn.liquidFill({id: "partE", color: ["rgba(255, 253, 43, 1)", "rgba(69, 255, 65, 1)"]})
    var partF = new echartsFn.liquidFill({id: "partF", color: ["rgba(255, 71, 43, 1)", "rgba(250, 184, 25, 1)"]})
    var partG = new echartsFn.liquidFill({id: "partG", color: ["rgba(241, 59, 255, 1)", "rgba(73, 25, 250, 1)"]})
    var partH = new echartsFn.liquidFill({id: "partH", color: ["rgba(37, 104, 255, 1)", "rgba(25, 247, 250, 1)"]})
    var partI = new echartsFn.pieFn2({tooltip: false, id: "partI",})

    //表格---每五秒动态添加一条数据到表格
    getData({tag: 1});//初始请求九台数据 param={}

    function getData(param) {
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterC',
            type: 'get',
            dataType: 'json',
            async: false,
            data: param,
            success: function (data) {
                echartsFn.tableFn(".ul-table", data)
            }
        })

        //民需中心
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterA',
            type: 'get',
            dataType: 'json',
            async: false,
            data: param,
            success: function (data) {
                if (data != '') {
                    partA.setOption(data)
                } else {
                    partA.setOption([{value: '435', name: '已合作'}, {value: '145', name: '待合作'}, {
                        value: '45',
                        name: "独家项目"
                    }])
                }
            }
        })

        //点单中心
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterB',
            type: 'get',
            dataType: 'json',
            async: false,
            data: param,
            success: function (data) {
                var color = ['rgba(250, 184, 25, 1)', 'rgba(239, 84, 30, 1)', '#1CECC1'];
                if (!partB) {
                    //第一次渲染 图形
                    partB = new echartsFn.barLineFn({
                        id: "partB",
                        barShadow: false,//不要柱形图的阴影
                        series: (function () {
                            $.each(data.series, function (index, item) {
                                item.color = color[index];
                            })
                            return data.series;
                        })(),
                        legendData: (function () {
                            var arr = [];
                            $.each(data.series, function (index, item) {
                               arr.push({name:item.name,color:color[index]});
                            })
                            return arr;
                        })(),
                    })
                }
                //填充数据
                partB.setOption({
                    xAxis: {
                        name: '',
                        data: data.xAxis.data
                    },
                    series: data.series
                })

            }
        })

        //考核中心
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterF',
            type: 'get',
            dataType: 'json',
            async: false,
            data: param,
            success: function (data) {
                var color = ['rgba(251, 172, 26, 1)', "rgba(35, 123, 255, 1)", 'rgba(29, 246, 176, 1)']
                if (!partC) {
                    partC = new echartsFn.barFn({
                        id: "partC",
                        barShadow: false,//不要柱形图的阴影
                        legendStatus: true,
                        legendData: (function () {
                            $.each(data.series, function (index, item) {
                                item.color = color[index]
                            })
                            return data.series;
                        })()
                    })
                }
                partC.setOption({
                    xAxis: {
                        name: '',
                        data: data.xAxis.data
                    },
                    legendData: (function () {
                        $.each(data.series, function (index, item) {
                            item.color = color[index]
                        })
                        return data.series;
                    })(),
                    series: data.series
                })
            }
        })

        //志愿中心
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterD',
            type: 'get',
            dataType: 'json',
            data: param,
            success: function (data) {
                if (!partD) {
                    partD = new echartsFn.pieFn3({
                        tooltip: false,
                        id: "partD",
                        orient: "vertical",
                        x: "right"
                        // legendData: data.column
                    })
                }
                partD.setOption(data.sum, data.data)
            }
        })

        //新增志愿项目
        $.ajax({
            url: 'htmlInterface/V1/civilNeedsCenterE',
            type: 'get',
            dataType: 'json',
            async: false,
            data: param,
            success: function (data) {
                partE.setOption(data[0])
                partF.setOption(data[1])
                partG.setOption(data[2])
                partH.setOption(data[3])
            }
        })
    }

    var mapData = {};
    $.ajax({
        url: "htmlInterface/V1/civilNeedsCenterG",
        type: "post",
        success: function (data) {
            //单击延时触发
            var clickTimeId;

            $.each(data.data1, function (index, item) {
                mapData["No_" + item.ext1] = {
                    bh: item.ext1,
                    mc: item.ext2,
                    zyzrs: item.ext3,
                    zyztds: item.ext4,
                    fwrc: item.ext5,
                    fwsc: item.ext6,
                    xs: item.ext7,
                    fwxms: item.ext8
                }
            })
            $.each(data.data2, function (index, item) {
                mapData["No_" + item.ext1] = {
                    bh: item.ext1,//编号
                    mc: item.ext2,//区域名称
                    zyzrs: item.ext3,//志愿者人数
                    zyztds: item.ext4,//志愿者团队数
                    fwrc: item.ext5,//服务人次
                    fwsc: item.ext6,//服务时长
                    xs: item.ext7,//星数
                    fwxms: item.ext8//服务项目数
                }
            })

            var _target = new Set();
            $("svg#svg-jt polygon[id^=part]").on("click", function (e) {
                var this_ = $(this).attr("id");
                if (this_ == "part518") {
                    return false;
                }
                if (_target.has(this_)) {
                    $(this).css("fill", "rgba(255,255,255,0)");
                    _target.delete(this_);
                } else {
                    _target.add(this_);
                    $(this).css("fill", "rgba(255,255,255,0.2)");
                }
                var jtPie = [];
                _target.forEach(function (item, index) {
                    jtPie.push({
                        value: mapData["No_" + item.replace(/part/g, "")].fwxms,
                        name: mapData["No_" + item.replace(/part/g, "")].mc,
                    })
                })
                partI.setOption(jtPie)
            }).hover(function (e) {
                $("#mapXs img").attr("src", "./img/xxm.png")
                var this_ = $(this).attr("id");
                if (this_ == "part518") {
                    return false;
                }
                if (!_target.has(this_)) {
                    $(this).css("fill", "rgba(255,255,255,0.2)");
                }
                    $("#mapMc").html(mapData["No_" + $(this).data("index")].mc)
                    $("#mapZyzrs").html(mapData["No_" + $(this).data("index")].zyzrs)
                    $("#mapZyztds").html(mapData["No_" + $(this).data("index")].zyztds)
                    $("#mapFwrc").html(mapData["No_" + $(this).data("index")].fwrc + "(人)")
                    $("#mapFwsc").html(mapData["No_" + $(this).data("index")].fwsc + "(小时)")
                    $("#mapXs img:nth-child(n+" + (+mapData["No_" + $(this).data("index")].xs + 1) + ")").attr("src", "./img/xxk.png")
            }, function (e) {
                var this_ = $(this).attr("id");
                if (this_ == "part518") {
                    return false;
                }
                if (!_target.has(this_)) {
                    $(this).css("fill", "rgba(255,255,255,0)");
                }
            })
        }
    })

    $("#partB,#partD,#partA").off("click").on("click",function(e){
        var id = $(this).attr("id");
       if(id=="partB"){
           window.location.href = "pointCenter.html"
       }else if(id=="partD"){
           window.location.href = "index.html"
       }else if(id=="partA"){
           window.location.href = "minXCenter.html"
       }
    })

})
