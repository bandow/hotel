requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper){  
  $(document).ready(function () {
    //orders-submit
    $(".names i").on("click",function(){
           $(this).parent().hide();         
    });

    var mySwiper = new Swiper('#swiper-container3',{
  			pagination: '.my-pagination',
  			paginationClickable: true,
  			paginationBulletRender: function (index, className) {
    			switch (index) {
    			  case 0: name='有效订单';break;
    			  case 1: name='历史订单';break;
    			  default: name='';
    			}
  			  return '<span class="' + className + '">' + name + '</span>';
  			}
  	});     
  });    
});