function goback() {
    window.location.href = "homepage.html"
}

var tooltip = {
    trigger: 'axis',
    borderColor: "#00ABD7",
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
}

var colorLine = ['#f6909e', '#83dce7', '#fad797', '#59ccf7', '#c3b4df'];
var leftTopTwo = ['#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB'];
var i = 0;
var colors = ['#f6909e', '#83dce7', '#fad797', '#59ccf7', '#c3b4df'];
var centerBottom = ['#02ECFC', '#EF541E']
var leftTopFore = ['rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB', 'rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB', 'rgba(125, 113, 243, 1)', 'rgba(31, 69, 230, 1)', 'rgba(119, 62, 253, 1)', 'rgba(255, 24, 113, 1)', 'rgba(255, 71, 43, 1)', 'rgba(250, 187, 24, 1)', 'rgba(26, 210, 244, 1)', 'rgba(30, 255, 158, 1)', 'rgba(46, 147, 255, 1)', 'rgba(9, 110, 240, 1)', '#CF0ED0', '#18F0C3', '#FE6E00', '#674EEB']
var swiperData = [{
        "desc": "为全面增强全区节能环保意识，6月13日，九台区组织环保志愿者开展节能宣传周和低碳体验日活动，通过加强宣传，全面营造低碳环保的社会氛围",
        "image": "1.jpg",
        "title": "九台区开展“低碳体验日”环保志愿宣传活动"
    }, {
        "desc": "活动通过悬挂条幅、摆放宣传展板、发放宣传单等形式普及节能知识，倡导垃圾分类，低碳出行，共享绿色环境。节能降耗、节水护水、绿色出行等节能宣传海报十分醒目，干部职工纷纷驻足仔细观看。",
        "image": "2.jpg",
        "title": "九台区开展“低碳体验日”环保志愿宣传活动"
    }, {
        "desc": "据了解，此次活动旨在贯彻落实习近平新时代中国特色社会主义思想和党的十九大精神，牢固树立创新、协调、绿色、开放、共享新发展理念，广泛宣传生态文明建设，培育和践行节约集约循环利用的资源观，提高资源利用效率，加快改善生态环境，推进节约型机关、节约型医院、节约型校园创建活动，培育崇尚节俭的社会风尚，厚植绿色生态文化，充分发挥公共机构示范引领作用，带动全社会深入、持久、自觉行动，以高效的能源资源使用效率支撑我区经济社会可持续发展，努力建设美丽吉林，深入进行全民节能低碳宣传教育，大力倡导简约适度、绿色低碳的工作和生活方式，积极营造崇尚节俭、厉行节约的良好氛围。",
        "image": "3.jpg",
        "title": "九台区开展“低碳体验日”环保志愿宣传活动"
    }, {
        "desc": "为迎接“全国助残日”的到来，由九台区区委宣传部、九台区文明办主办，九台区国税局（国家级文明单位）、九台区气象局（国家级文明单位）协办，及爱心志愿者们来到善满家园看望残障人士，奉献爱心。今年的5月20日是第28个“全国助残日”，为倡导助残扶残的良好社会风尚，进一步弘扬中华民族扶弱助残的传统美德，逐步形成全社会理解、关心和帮助残障人士的社会氛围，让残疾人士感受到社会的关爱和温暖，增强残疾人士自尊、自信、自立、自强的信念。九台区气象局的志愿者为残障人士发放带来的各种慰问品，共发放迷彩服48套，T恤衫48套；床单、被罩、枕套各50套，洗衣粉50大袋，仁爱志愿者协会赵纯宪医生为残障人士义诊。所有志愿者帮助帮助残障人士整理内务、打扫卫生，最后志愿者们与残障人士开展绘画互动、折纸互动、歌唱互动。",
        "image": "4.jpg",
        "title": "九台区气象局参加“爱心助残 情暖家园”志愿服务活动"
    }, {
        "desc": "为迎接“全国助残日”的到来，由九台区区委宣传部、九台区文明办主办，九台区国税局（国家级文明单位）、九台区气象局（国家级文明单位）协办，及爱心志愿者们来到善满家园看望残障人士，奉献爱心。今年的5月20日是第28个“全国助残日”，为倡导助残扶残的良好社会风尚，进一步弘扬中华民族扶弱助残的传统美德，逐步形成全社会理解、关心和帮助残障人士的社会氛围，让残疾人士感受到社会的关爱和温暖，增强残疾人士自尊、自信、自立、自强的信念。九台区气象局的志愿者为残障人士发放带来的各种慰问品，共发放迷彩服48套，T恤衫48套；床单、被罩、枕套各50套，洗衣粉50大袋，仁爱志愿者协会赵纯宪医生为残障人士义诊。所有志愿者帮助帮助残障人士整理内务、打扫卫生，最后志愿者们与残障人士开展绘画互动、折纸互动、歌唱互动。",
        "image": "5.jpg",
        "title": "九台区气象局参加“爱心助残 情暖家园”志愿服务活动"
    }, {
        "desc": "为迎接“全国助残日”的到来，由九台区区委宣传部、九台区文明办主办，九台区国税局（国家级文明单位）、九台区气象局（国家级文明单位）协办，及爱心志愿者们来到善满家园看望残障人士，奉献爱心。今年的5月20日是第28个“全国助残日”，为倡导助残扶残的良好社会风尚，进一步弘扬中华民族扶弱助残的传统美德，逐步形成全社会理解、关心和帮助残障人士的社会氛围，让残疾人士感受到社会的关爱和温暖，增强残疾人士自尊、自信、自立、自强的信念。九台区气象局的志愿者为残障人士发放带来的各种慰问品，共发放迷彩服48套，T恤衫48套；床单、被罩、枕套各50套，洗衣粉50大袋，仁爱志愿者协会赵纯宪医生为残障人士义诊。所有志愿者帮助帮助残障人士整理内务、打扫卫生，最后志愿者们与残障人士开展绘画互动、折纸互动、歌唱互动。",
        "image": "6.jpg",
        "title": "九台区气象局参加“爱心助残 情暖家园”志愿服务活动"
    }, {
        "desc": "为迎接“全国助残日”的到来，由九台区区委宣传部、九台区文明办主办，九台区国税局（国家级文明单位）、九台区气象局（国家级文明单位）协办，及爱心志愿者们来到善满家园看望残障人士，奉献爱心。今年的5月20日是第28个“全国助残日”，为倡导助残扶残的良好社会风尚，进一步弘扬中华民族扶弱助残的传统美德，逐步形成全社会理解、关心和帮助残障人士的社会氛围，让残疾人士感受到社会的关爱和温暖，增强残疾人士自尊、自信、自立、自强的信念。九台区气象局的志愿者为残障人士发放带来的各种慰问品，共发放迷彩服48套，T恤衫48套；床单、被罩、枕套各50套，洗衣粉50大袋，仁爱志愿者协会赵纯宪医生为残障人士义诊。所有志愿者帮助帮助残障人士整理内务、打扫卫生，最后志愿者们与残障人士开展绘画互动、折纸互动、歌唱互动。",
        "image": "7.jpg",
        "title": "九台区气象局参加“爱心助残 情暖家园”志愿服务活动"
    }, {
        "desc": "为进一步弘扬中华民族孝敬父母的传统美德，表达对母亲的敬意和感恩之情。母亲节前夕，九台区文明办、九台区妇联与善无疾中医门诊联合开展“传承好家风，感恩母亲”主题义诊活动。为九台区48名获得“最美女性”称号的妇女送上温馨的关怀和节日的祝福。",
        "image": "8.jpg",
        "title": "九台区文明办、九台区妇联联合开展“传承好家风 感恩母亲”义诊活动"
    }, {
        "desc": "义诊活动中，医务人员耐心细致地为前来就诊的女性进行体检，还为前来参加义诊女性讲解定期检查身体的重要性，鼓励大家要树立积极乐观的生活态度，养成健康的生活习惯。诊治过程中，医务人员详细询问她们的身体情况，为他们进行了量血压、测血糖、心肺听诊等常规检查，就每位就诊女性的体检结果专家都会给出诊治方案，一一解答她们的疑惑，对女性疾病的预防和治疗提出了许多合理化的建议，并提出注意事项和日常保健等方面建议，为大家进行健康生活指导。大家纷纷表示，通过义诊活动，不仅了解到预防“两癌”的相关知识，也增长了自我保健意识和自我防范病患意识。",
        "image": "9.jpg",
        "title": "九台区文明办、九台区妇联联合开展“传承好家风 感恩母亲”义诊活动"
    }, {
        "desc": "此次活动是九台区文明办、九台区妇联与善无疾中医门诊联合为广大女性送上的一份节日礼物，工作人员介绍道，“在以后的日子里，我们还将不断的开展此类公益活动，为更多的市民提供便民服务，让更多人感受到温暖，提升九台人民的幸福感。”",
        "image": "10.jpg",
        "title": "九台区文明办、九台区妇联联合开展“传承好家风 感恩母亲”义诊活动"
    }, {
        "desc": "一大早，虽然细雨如织，但却丝毫不能浇灭志愿者与残友们出游的热情。大家都早早地来到集合地点――九台区南山公园正门。点名签到，分组乘车，一切都井然有序进行。对于一些重残或上下车不便的残友，志愿者们或背或抱，贴心细致地帮助他们坐到座位上。八点整，满载着残友与志愿者们以及仁爱康复中心的医疗人员的三辆大巴车准时出发，向着活动的目的地――长春北湖国家湿地公园行进。",
        "image": "11.jpg",
        "title": "九台区文明办、九台区妇联联合开展“传承好家风 感恩母亲”义诊活动"
    }, {
        "desc": "一路上欢声笑语，精彩不断。残友与志愿者们时而合唱，时而独唱，倾情互动，亲如一家，其乐融融。每个人都沉浸在欢聚里，完全忽略了车窗外愈渐浓密的雨滴。对于那些重残的残友，终日坐在轮椅之上，若要走出家门，融入人群，亲身感受户外阳光，亲近自然，是一种简单而遥不可及的奢望。每个生命都是值得敬畏的，应该被温柔以待，此次春游就是希望这些残友们可以和我们一样在大自然的怀抱里尽情放飞自己，愉悦身心，增强自信。",
        "image": "12.jpg",
        "title": "九台区文明办、九台区妇联联合开展“传承好家风 感恩母亲”义诊活动"
    }, {
        "desc": "一个多小时的行程一晃而过，天公作美，风停雨住，被晨雨洗刷过的北湖国家湿地公园焕然一新。有序下车后，按组列队，发放早已准备好的矿泉水。等候在这里的大学生志愿者们被分派到各组，充当导游。在他们的引领下，游园之旅有序进行。长春北湖湿地公园公园占地11",
        "image": "13.jpg",
        "title": "九台区文明办组织残友开展“拥抱春天·与爱同行”主题春游活动"
    }, {
        "desc": "长春北湖国家湿地公园园区也暖心地为每一位残疾朋友提供了可自选的免费乘坐观光车游览的服务。很多残友为了零距离感受美丽的大自然，坚持不乘坐观光车，由很多志愿者陪同，或坐轮椅或步行游览。园区内沿途有一百多座雕塑，有瞭望阁、佑国塔、万寿寺景点，有亭台桥堤点缀其中，四处皆景致，志愿者和残友们都在这美景里开心不已。一些志愿者为了能让行动不便的残友们领略到湿地公园的美景，不辞辛苦把他们背到每一个标志性建筑或者景点前，让摄影师志愿者为他们定格下美丽的瞬间。",
        "image": "14.jpg",
        "title": "九台区文明办组织残友开展“拥抱春天·与爱同行”主题春游活动"
    }, {
        "desc": "午餐时间大家聚在一起，纷纷拿出各自准备好的美食，团团围坐，一起品尝，亲如一家，残友们露出了一张张幸福的笑脸。午餐过后，志愿者们把垃圾收拾到随身携带的塑料袋里，保持了园区的干净卫生。下午两点三十分，大家在停车场集合，合影留念，并同一直陪伴此次行程的大学生志愿者团队道别，残友们纷纷对大学生志愿者们表示感谢和不舍。归途中，协会组织了游戏互动，发放纪念品，对志愿者表示感谢，让残友们开心。",
        "image": "15.jpg",
        "title": "九台区文明办组织残友开展“拥抱春天·与爱同行”主题春游活动"
    }, {
        "desc": "活动中涌现了很多让人心暖的举动，很多志愿者背着重残的残友上下车，一路背着残友到各处景点为他们和亲人拍照留影。很多志愿者为大家准备物品，来来回回不厌其烦，自己却顾不上坐下来歇息片刻。很多志愿者不顾自己有腰腿痛，推着残友各处游览。有的残友因晕车呕吐，志愿者也不嫌弃，主动为其擦拭，一路悉心照顾。一桩桩，一件件，志愿者们无私付出，以残友快乐为己任的暖心故事不断涌现。",
        "image": "16.jpg",
        "title": "九台区文明办组织残友开展“拥抱春天·与爱同行”主题春游活动"
    }, {
        "desc": "此次活动是九台区文明办与九台区仁爱志愿者协会在全国助残日即将到来之际，联合为广大残友提前送上的一份节日礼物，目的是让残友们感受到来自社会各界的关爱和温暖，也希望更多的爱心人士关注残友们的精神世界，多多支持助残公益事业，献出一份爱心，让爱心队伍不断壮大，为和谐社会尽一份力量。",
        "image": "17.jpg",
        "title": "九台区文明办组织残友开展“拥抱春天·与爱同行”主题春游活动"
    }
    ]
;
var FnAllEcharts = function () {
};
FnAllEcharts.prototype = {
    init: function () {
        return this.swiperFn().lfteTopOne().lfteTopTwo().leftTopThree().leftTopFour().leftBottomT().centerBottomT().rightTopOne().rightTopTwo().rightTopThree().rightTopFore().rightBottomT();

    },
    lfteTopOne: function () {
        var myChartLeftOne = echarts.init(document.getElementById("lfteTopOne"));
        var option = {
            title: {
                text: '志愿者人数',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                x: 'left',
                y: 'top'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#8249F1', '#1D96FF', '#FD7622', '#25DFA6', '#02F0FD', '#B1FF35', '#EA20F7'],
            calculable: false,
            series: (function () {
                var series = [];
                for (var i = 0; i < 6; i++) {
                    series.push({
                        name: '浏览器（数据纯属虚构）',
                        type: 'pie',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: i > 5
                                },
                                labelLine: {
                                    show: i > 5,
                                    length: 8
                                }
                            }
                        },
                        silent: true,
                        radius: [i * 3 + 15, i * 3 + 20],
                        data: [
                            {value: "1", name: "南2关区"},
                            {value: "2", name: "二2道区"},
                            {value: "3", name: "宽2城区"},
                            {value: "4", name: "汽2开区"},
                            {value: "5", name: "九2台区"},
                        ]

                    })
                }
                return series;
            })()

        };

        myChartLeftOne.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectVolunteerNumByParams",
            //请求发送到TestServlet处
            //data : {},
            dataType: "json",        //返回数据形式为json
            success: function (data) {
                console.log(data.data)
                $("#lfteTopOne").attr("data-content", data.total)
                var series = [];
                for (var i = 0; i < 6; i++) {
                    series.push({
                        center: ['50%', '55%'],
                        name: '浏览器（数据纯属虚构）',
                        type: 'pie',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: i > 4,
                                    //formatter: '{c}\n{b}'
                                    formatter: function (param) {
                                        return param.name + ':\n' + (+param.value - (i - 1) * 64 * i);
                                    }
                                },
                                labelLine: {
                                    show: i > 4,
                                    length: 20
                                }
                            }
                        },
                        silent: true,
                        radius: [5 * i + 20, 5 * i + 25],
                        data: (function () {
                            var arr = [];
                            data.data.forEach(function (item, index) {
                                arr.push({
                                    label: {
                                        color: leftTopFore[index * 2]
                                    },
                                    value: i * 128 / 2 * (i + 1) + (+item.value),
                                    name: (item.name).substr(0, 3) + "\n" + (item.name).substr(3),
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
                                                color: leftTopFore[index * 2] // 0% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: leftTopFore[index * 2 + 1]// 100% 处的颜色
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
                myChartLeftOne.setOption({ //加载数据图表
                    series: series
                });

            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartLeftOne.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartLeftOne.resize();
        });
        return this;
    },
    lfteTopTwo: function () {
        myChartLeftTwo = echarts.init(document.getElementById("lfteTopTwo"));
        //柱形图
        option = {
            title: {                       //标题
                text: '志愿团队数',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                x: 'left',
                y: 'top'
            },
            tooltip: {
                trigger: 'item',
                borderColor: "#00ABD7",
                borderWidth: 1,
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            calculable: true,           //是否启用拖拽重计算特性，默认关闭(即值为false)
            grid: {                    //图形外边框
                x: "20%",                   //上边距
                // y2: 30,                //下边距
                // x: 30
            },
            xAxis: [
                {
                    type: 'category',
                    show: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#0BB6DB',
                        }
                    },
                    axisLabel: {interval: 0, rotate: 40},//     字体全部显示斜体
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#0BB6DB',
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                }
            ],
            series: [
                {
                    name: '志愿团队数',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],         //柱状图圆角--4个角
                            color: function (params) {
                                // build a color map as your need.
                                var colorList = leftTopTwo;
                                return colorList[params.dataIndex]
                            },

                        }
                    },
                    barWidth: '14', //柱体宽度
                    data: [],

                }
            ]
        };
        myChartLeftTwo.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectUserTeamNum",
            //请求发送到TestServlet处
            //data : {},
            dataType: "json",        //返回数据形式为json
            success: function (data) {
                console.log(data)
                myChartLeftTwo.setOption({ //加载数据图表
                    xAxis: {
                        data: data.data1
                    },
                    series: {
                        // 根据名字对应到相应的系列
                        //name: ['数量'],
                        data: data.data2
                    }
                });

            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartLeftOne.hideLoading();
            }
        })

        window.addEventListener("resize", function () {
            myChartLeftTwo.resize();
        });

        return this;
    },
    leftTopThree: function () {
        var myChartLeftThree = echarts.init(document.getElementById("lfteTopThree"));
        var data = {
            "name": "满族,回族,汉族,蒙古族,朝鲜族,壮族,其他",
            "num": "5,6,3,4,9,3,9,3"
        }
        var xArr = data.name.split(",")
        var arrType = []
        $.each(xArr, function (index, item) {
            arrType.push({"text": item})
        })
        var arrNum = data.num.split(",")
        /*console.log(arrNum)
        console.log(arrType)*/
        var option = {
            title: {
                text: '志愿者政治面貌',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
            },
            tooltip: {
                trigger: 'item',
                borderColor: "#00ABD7",
                borderWidth: 1,
                position: "right",
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            radar: [
                {
                    indicator: arrType,
                    center: ['50%', '50%'],
                    radius: 55,
                    startAngle: 60,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#0BB6DB'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: [],
                            shadowColor: '#14B496',
                            shadowBlur: 10
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "#095FC9",
                            // 图表背景网格线的颜色
                        }
                    }

                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: [

                        {
                            value: arrNum,
                            areaStyle: {
                                normal: {
                                    color: '#0EB590'
                                }
                            }
                        }
                    ]
                }

            ]
        }
        myChartLeftThree.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/volunteerNationCount",
            //请求发送到TestServlet处
            //data : {},
            dataType: "json",        //返回数据形式为json
            success: function (data) {
                //console.log(data)
                var num = [];
                var namezy = [];
                for (var i = 0; i < data.length; i++) {
                    num.push(data[i].max);
                    namezy.push({"text": (data[i].text).substr(0, 2) + "\n" + (data[i].text).substr(2)})
                }
                ;

                /*console.log(num)
                console.log(namezy)*/
                myChartLeftThree.setOption({ //加载数据图表
                    radar: [
                        {
                            indicator: namezy,
                        }
                    ],
                    series: [
                        {
                            data: [
                                {
                                    value: num,
                                    areaStyle: {
                                        normal: {
                                            color: '#0EB590'
                                        }
                                    }
                                }
                            ]
                        }

                    ]
                });

            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartLeftThree.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartLeftThree.resize();
        });
        return this
    },
    leftTopFour: function () {
        var myChartLeftFour = echarts.init(document.getElementById("lfteTopFore"));
        var option = {
            title: {
                text: '身份类别',//'志愿者身份类别'   0612修改-为  身份类别
                textStyle: {
                    color: '#fff',
                    fontSize: 14, 

                },
            },
            tooltip: {
                trigger: 'item',
                borderColor: "#00ABD7",
                borderWidth: 1,
                position: ['40%', '30%'],
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name: '志愿者身份类别',
                    type: 'pie',
                    center: ["50%", "60%"],
                    radius: ['20%', '45%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outer',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 3,
                            length2: 6,
                            lineStyle: {}

                        }
                    },

                    data: []
                }
            ]
        };
        myChartLeftFour.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectVolunteerNumByJob",
            dataType: "json",
            success: function (data) {
                data = [{"name": "国家公务员", "value": "2"}, {"name": "专业技术人员", "value": "3"}, {
                    "name": "职员",
                    "value": "3"
                }, {"name": "企业管理人员", "value": "1"}, {"name": "农民", "value": "3"}, {"name": "其他", "value": "2"}]
                var arr = []
                $.each(data, function (index, item) {
                    arr.push({
                        name: (item.name).substr(0, 3) + "\n" + (item.name).substr(3),
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
                myChartLeftFour.setOption({
                    series: [
                        {
                            // data:arr
                            data: (function () {
                                var arr_ = [];
                                arr_.push(arr[2])
                                arr_.push(arr[4])
                                arr_.push(arr[1])
                                arr_.push(arr[3])
                                arr_.push(arr[0])
                                return arr_;
                            })()
                        }]
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartLeftFour.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartLeftFour.resize();
        });
        return this
    },
    leftBottomT: function () {
        var myChartLeftBootom = echarts.init(document.getElementById("leftBottomT"));
        var option = {
            title: {
                text: '志愿服务动态',//文字更改0612
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },

            },
            grid: {                    //图形外边框
                borderWidth: 0,         //框宽
                y: 40,                   //上边距
                y2: 30,                //下边距
                x: 50
            },
            tooltip: {
                trigger: 'axis',
                borderColor: "#00ABD7",
                borderWidth: 1,
                position: "right",
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#0BB6DB',//左边线的颜色
                            width: '1'//坐标线的宽度
                        }
                    },
                    axisLabel: {interval: 0},//     字体全部显示斜体
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#0BB6DB',
                            width: '1'
                        }
                    },
                    splitLine: {show: false}
                }
            ],
            series: []
        };
        myChartLeftBootom.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/lengthOfService",
            dataType: "json",
            success: function (data) {
                myChartLeftBootom.setOption({
                    xAxis: [
                        {data: data.xAxis}],
                })
                var item = [];
                for (var i = 0; i < data.data.length; i++) {
                    item.push({
                        name: data.data[i].name,
                        data: data.data[i].data,
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                areaStyle: {type: 'default', color: "#01D9F2"},
                                lineStyle: {color: '#00D9FF'}
                            }
                        },
                    })
                }
                myChartLeftBootom.setOption({
                    series: item,
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartLeftBootom.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartLeftBootom.resize();
        });
        return this
    },
    centerBottomT: function () {
        var myChartCenterBottomT = echarts.init(document.getElementById("centerBottomT"));
        var option = {
            title: {
                text: '志愿服务主体',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
                left: "center"
            },

            grid: {                    //图形外边框
                borderWidth: 0,
                x: "15%",
                y: "20%",                   //上边距
                y2: 30,                //下边距
                x: 50
            },
            tooltip: tooltip,
            calculable: true,
            color: leftTopTwo,
            legend: {right: 10, top: "15%"},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#0BB6DB',//左边线的颜色
                        width: '1'//坐标线的宽度
                    }
                },
                axisLabel: {interval: 0},//     字体全部显示斜体
                data: ['--', '--', '--', '--', '--', '--', '--']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#0BB6DB',
                        width: '1'
                    }
                },
                splitLine: {show: false}
            },
            series: []
        };
        myChartCenterBottomT.setOption(option);
        $.ajax({
            type: "get",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectProjectWithOrgansWire",
            dataType: "json",
            success: function (data) {
                var item_ = [];            
                for (var i = 0; i < data.series.length; i++) {
                	if(i==1){
                		continue;
                	}
                    item_.push({
                        name: data.series[i].name,
                        data: data.series[i].data,
                        type: 'line',
                        itemStyle: {normal: {lineStyle: {color: leftTopTwo[i]}}},
                    })
                }
                myChartCenterBottomT.setOption({
                    xAxis: [
                        {data: data.data1}],
                })
                myChartCenterBottomT.setOption({
                    legend: {
                        data: (function () {
                            var data_ = [];
                            $.each(data.series, function (index, item) {
                                data_.push({
                                    name: item.name,
                                    icon: "roundRect",
                                    textStyle: {color: leftTopTwo[index]},
                                    itemHeight: 15,
                                    itemWidth: 20
                                })
                            })
                            return data_
                        })()
                    },
                    series: item_
                })
                //console.log(num)
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartCenterBottomT.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartCenterBottomT.resize();
        });
        return this
    },
    rightTopOne: function () {
        var myChartRightTopOne = echarts.init(document.getElementById("rightTopOne"));
        var option = {
            title: {
                text: '志愿服务区域排名',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
                x: 'left',
                y: 'top'
            },
            color: ['#8249F1', '#FD7622', '#25DFA6', '#02F0FD', '#B1FF35', '#EA20F7'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                borderColor: "#00ABD7",
                borderWidth: 1,
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            calculable: true,
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: ["20%", "40%"],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                            position: "outer"
                        },

                    },
                    data: [
                    ]
                },
            ]
        };

        myChartRightTopOne.setOption(option);
        $.ajax({
            type: "get",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectProjectWithOrgans",
            dataType: "json",
            success: function (data) {
                var arr = []
                $.each(data.data2, function (index, item) {
                    arr.push({
                        name: (item.name).substr(0,3)+"\n"+(item.name).substr(3)+":\n"+item.value,
                        value: item.value,
                        label: {
                            color: leftTopFore[index * 2],
                        },
                        labelLine: {
                            length: 8,
                            length2: 6
                        },
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
                        }
                    })
                })
                myChartRightTopOne.setOption({
                    series: [
                        {data: arr}
                    ]
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartRightTopOne.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartRightTopOne.resize();
        });
        return this
    },
    rightTopTwo: function () {
        myChartRightTopTwo = echarts.init(document.getElementById("rightTopTwo"));
        option = {
            //backgroundColor: '#0E2A43',
            title: {
                text: "志愿者学历统计",
                textStyle: {
                    color: '#FFF',
                    fontSize: 14
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                top: '20%',
                containLabel: true
            },

            tooltip: tooltip,
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0BB6DB',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#aaa',
                    }
                },
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0BB6DB',
                    }
                },
                axisLabel: {interval: 0},//     字体全部显示斜体
                data: []
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: []
            }],
            series: []
        };
        myChartRightTopTwo.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/selectUserVolunteerWithEducation",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                var max = [];
                for (var i = 0; i < data.data2.length; i++) {
                    max.push(data.data2[i] * 2 + "");
                }
                //console.log(max)
                myChartRightTopTwo.setOption({
                    xAxis: [
                        {data: data.data1}],
                })
                myChartRightTopTwo.setOption({
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            xAxisIndex: 1,

                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: 'rgba(29, 105, 255, 1)',
                                    barBorderRadius: 80,
                                    borderWidth: 0,
                                    borderColor: '#333',
                                }
                            },
                            barWidth: '40%',
                            data: max
                        }, {
                            name: '人数',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#00FFE6'
                                    }, {
                                        offset: 1,
                                        color: '#007CC6'
                                    }]),
                                    barBorderRadius: 50,
                                    borderWidth: 0,
                                    borderColor: '#333',
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            barWidth: '40%',
                            data: data.data2
                        }
                    ]
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartRightTopTwo.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartRightTopTwo.resize();
        });
        return this
    },
    rightTopThree: function () {
       var myChartRightTopThree = echarts.init(document.getElementById("rightTopThree"));
       var option = {
            title: {
                text: '志愿进行时·新增',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
                x: 'left',
                y: 'top'
            },
            color: ['#8249F1', '#1D96FF', '#FD7622', '#25DFA6', '#02F0FD', '#B1FF35', '#EA20F7'],
            tooltip: {
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                trigger: 'item',
                borderColor: "#00ABD7",
                borderWidth: 1,
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            },
            calculable: true,
            series: [
                {
                    name: '志愿进行时',
                    type: 'pie',
                    radius: ["16%", "40%"],
                    center: ['50%', '50%'],
                    labelLine: {
                        normal: {
                            length: 0.2
                        }
                    },
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                            position: "center"
                        }
                    },
                    lableLine: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                            position: "center"
                        },

                    },
                    data: []
                },
            ]
        };

        myChartRightTopThree.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/serviceProcess",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                var arr = []
                $.each(data, function (index, item) {
                    arr.push({
                        name: (item.name).substr(0,2)+"\n"+(item.name).substr(2)+":\n"+item.value,
                        value: item.value,
                        label: {
                            color: leftTopFore[index * 2]
                        },
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
                        }
                    })
                })
                myChartRightTopThree.setOption({
                    series: [
                        {data: arr}
                    ]
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartRightTopThree.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartRightTopThree.resize();
        });
        return this
    },
    rightTopFore: function () {
        var myChartRightTopFore = echarts.init(document.getElementById("rightTopFore"));
        var data = {
            "name": "--,--,--,--,--,--,--,--",
            "num": "5,6,3,4,9,3,9,3"
        }
        var xArr = data.name.split(",")
        var arrType = []
        $.each(xArr, function (index, item) {
            arrType.push({"text": item})
        })
        var arrNum = data.num.split(",")
        var option = {
            title: {
                text: '志愿进行时·完成',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
            },
            tooltip: {
                trigger: 'item',
                borderColor: "#00ABD7",
                borderWidth: 1,
                position: "left",
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            radar: [
                {
                    indicator: arrType,
                    center: ['50%', '50%'],
                    radius: 40,
                    startAngle: 90,
                    splitNumber: 4,
                    //shape: 'circle',       控制雷达圆还是角
                    name: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#0BB6DB'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: [],
                            shadowColor: '#14B496',
                            shadowBlur: 10
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "#095FC9",
                            // 图表背景网格线的颜色
                        }
                    }

                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: [

                        {
                            value: arrNum,
                            areaStyle: {
                                normal: {
                                    color: '#0EB590'
                                }
                            }
                        }
                    ]
                }

            ]
        }

        myChartRightTopFore.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/volunteerServiceflow",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                var num = [];
                var namezy = [];
                for (var i = 0; i < data.length; i++) {
                    num.push(data[i].max);
                    namezy.push({"text": (data[i].text).substr(0,3)+"\n"+(data[i].text).substr(3)})
                }
                myChartRightTopFore.setOption({ //加载数据图表
                    radar: [
                        {
                            indicator: namezy,
                        }
                    ],
                    series: [
                        {
                            data: [
                                {
                                    value: num,
                                    areaStyle: {
                                        normal: {
                                            color: '#0EB590'
                                        }
                                    }
                                }
                            ]
                        }

                    ]
                });
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartRightTopFore.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartRightTopFore.resize();
        });
        return this
    },
    rightBottomT: function () {
        myChartRightBottomT = echarts.init(document.getElementById("rightBottomT"));
        var option = {
            title: {
                text: '志愿者年龄/性别统计',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
            },
            legend: {
                data: ['男', '女'],
                right: '0%',
                textStyle: {
                    fontSize: 16,
                    color: '#8cdcfb'
                }
            },
            tooltip: { //提示框组件
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
                borderColor: "#00ABD7",
                borderWidth: 1,
                position: "right",
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '6%',
                top: 30,
                padding: '0 0 10 0',
                containLabel: true,
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: [],
                    axisTick: {//坐标轴刻度相关设置。
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#0BB6DB',
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    },
                    axisLabel: {interval: 0},//     字体全部显示斜体
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitNumber: 5,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#0BB6DB',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                }
            ],
            series: [
                {
                    name: '流入',
                    type: 'bar',
                    data: [4.9, 7.3, 9.2, 5.6, 7.7, 5.6, 4.2, 3.6, 6, 6.4],
                    barWidth: 10,
                    barGap: 0,//柱间距离
                    itemStyle: {//图形样式

                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(255, 77, 42, 1)'
                            }, {
                                offset: 0.9, color: 'rgba(255, 77, 42, 0.8)'
                            }, {
                                offset: 0.25, color: 'rgba(250, 175, 25, 0.8)'
                            }, {
                                offset: 0, color: 'rgba(250, 175, 25, 1)'
                            }], false),
                        },
                    },
                },
                {
                    name: '流出',
                    type: 'bar',
                    data: [2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0],
                    barWidth: 10,
                    barGap: 0.2,//柱间距离
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(27, 223, 220, 1)'
                            }, {
                                offset: 0.9, color: 'rgba(27, 223, 220, 0.8)'
                            }, {
                                offset: 0.31, color: 'rgba(27, 223, 220, 0.8)'
                            }, {
                                offset: 0.15, color: 'rgba(29, 246, 176, 0.8)'
                            }, {
                                offset: 0, color: 'rgba(29, 246, 176, 1)'
                            }], false),
                        },
                    },
                }
            ]
        };
        myChartRightBottomT.setOption(option);
        $.ajax({
            type: "post",
            async: true,
            url: "/culture_practice_core/htmlInterface/V1/volunteerSexAgeCount",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                myChartRightBottomT.setOption({
                    xAxis: [
                        {data: data.data}],
                })

                myChartRightBottomT.setOption({
                    series: [
                        {
                            name: '女',
                            type: 'bar',
                            data: data.data1,
                            barWidth: 10,
                            barGap: 0,//柱间距离
                            itemStyle: {//图形样式
                                normal: {
                                    barBorderRadius: [5, 5, 0, 0],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 1, color: 'rgba(255, 77, 42, 1)'
                                    }, {
                                        offset: 0.9, color: 'rgba(255, 77, 42, 0.8)'
                                    }, {
                                        offset: 0.25, color: 'rgba(250, 175, 25, 0.8)'
                                    }, {
                                        offset: 0, color: 'rgba(250, 175, 25, 1)'
                                    }], false),
                                },
                            },
                        },
                        {
                            name: '男',
                            type: 'bar',
                            data: data.data2,
                            barWidth: 10,
                            barGap: 0.2,//柱间距离
                            itemStyle: {//图形样式
                                normal: {
                                    barBorderRadius: [5, 5, 0, 0],
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 1, color: 'rgba(27, 223, 220, 1)'
                                    }, {
                                        offset: 0.9, color: 'rgba(27, 223, 220, 0.8)'
                                    }, {
                                        offset: 0.31, color: 'rgba(27, 223, 220, 0.8)'
                                    }, {
                                        offset: 0.15, color: 'rgba(29, 246, 176, 0.8)'
                                    }, {
                                        offset: 0, color: 'rgba(29, 246, 176, 1)'
                                    }], false),
                                },
                            },
                        }
                    ]
                })
            },
            error: function (errorMsg) {
                console.log("图表请求数据失败!");
                myChartRightBottomT.hideLoading();
            }
        })
        window.addEventListener("resize", function () {
            myChartRightBottomT.resize();
        });
        return this
    },
    swiperFn: function () {
        $.each(swiperData, function (index, item) {
            $(".gallery-top .swiper-wrapper,.gallery-thumbs .swiper-wrapper").append("<div data-content=\"" + item.desc + "\" class=\"swiper-slide\" style=\"background-image:url('./img/swiper/index/" + item.image + "')\"></div>")

        })
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            mousewheel: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            mousewheel: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
        return this;
    }

}
var fnEcharts = new FnAllEcharts();
fnEcharts.init();

