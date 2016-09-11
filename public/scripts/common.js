define(['jquery'],function($){

	//设置字体响应式
	$(function(){
		var size=$(window).width()/10;
	    $("html").css('fontSize',size);
		if($(window).width()>=640){
		   $("html").css('fontSize','24px');
		}
	});	

});