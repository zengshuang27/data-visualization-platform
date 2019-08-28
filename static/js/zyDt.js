// //地图
// var target_="";
// $(function(){
//
// })
// function ajaxFn(index){
// 	$.ajax({
//         type: "POST",
//         url: "/culture_practice_core/htmlInterface/V1/selectAreaWithSomeNum",
//         data:{
//         	code:index
//         },
//         async: false,
//         success: function (data) {
//             $("#xxContent").empty();
// 	        $("#zyzrs").html(data.ext1);
// 	        $("#zyztds").html(data.ext2);
// 	        $("#ljfwrc").html(data.ext3+"(人)");
// 	        $("#ljfwsc").html(data.ext4+"(小时)");
//
//
// 	        var xxStr=""
// 	        for(var i=0;i<data.ext5;i++){
// 	        	xxStr += '<img data-index= "'+i+'"src="img/xxm.png"></img>'
// 	        }
// 	        for(var i=data.ext5;i<5;i++){
// 	        	xxStr += '<img data-index= "'+i+'"src="img/xxk.png"></img>'
// 	        }
// 	        $("#xxContent").append(xxStr)
//         }
// 	});
// }
// $("svg#svg-jt polygon[id^=part]").on("click", function (e) {
//     //alert("序号::"+$(this).data("index")+";名称::"+$(this).data("name"))
// 	target_=$(this).attr("id");
// 	$(this).css("fill", "rgba(255,255,255,0.4)");
// 	$(this).parent().siblings("g:not(.other)").find("polygon").css("fill", "rgba(255,255,255,0)");
// 	$("#part10").css("fill", "rgba(224, 98, 34, 0.8)");
// 	var index = $(this).data("index");
// 	ajaxFn(index)
//
// }).hover(function (e) {
//     if($(this).attr("id") != target_){
//     	$(this).css("fill", "rgba(255,255,255,0.2)");
//     }
// }, function (e) {
//     if($(this).attr("id") != target_){
//     	if($(this).attr("id") == "part10"){
//
//         	$(this).css("fill", "rgba(224, 98, 34, 0.8)");
//
//         }else{
//
//
//     	$(this).css("fill", "rgba(255,255,255,0)");
//         }
//     }
//
// })
//地图
var target_="";
$(function(){

})
function ajaxFn(index){
	$.ajax({
		type: "POST",
		url: "/culture_practice_core/htmlInterface/V1/selectAreaWithSomeNum",
		data:{
			code:index
		},
		async: false,
		success: function (data) {
			$("#xxContent").empty();

			$("#zyzrs").html(data.ext1);
			$("#zyztds").html(data.ext2);
			$("#ljfwrc").html(data.ext3+"(人)");
			$("#ljfwsc").html(data.ext4+"(小时)");


			var xxStr=""
			for(var i=0;i<data.ext5;i++){
				xxStr += '<img data-index= "'+i+'"src="img/xxm.png"></img>'
			}
			for(var i=data.ext5;i<5;i++){
				xxStr += '<img data-index= "'+i+'"src="img/xxk.png"></img>'
			}
			$("#xxContent").append(xxStr)
		}
	});
}
var target_;
$("svg#svg-jt polygon[id^=part]").on("click", function (e) {
	target_=$(this).data("index");
	if(target_ == "518"){return false;}
	$(".cls-2").css("fill", "rgba(255,255,255,0)");
	$(this).css("fill", "rgba(255,255,255,0.2)");
	$("#xzqh").html($(this).data("name"))
	ajaxFn(target_)

}).hover(function (e) {
	if($(this).data("index")  == "518"){return false;}
	if($(this).data("index") != target_){
		$(this).css("fill", "rgba(255,255,255,0.2)");
	}
}, function (e) {
	if($(this).data("index")!=target_){
		$(this).css("fill", "rgba(255,255,255,0)");
	}

}) 
