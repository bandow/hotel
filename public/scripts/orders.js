requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper,){  
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

    //orders-report
    $(".profit-list dl dd:even").css("backgroundColor","#f4f4f4");
    $(".profit-list dl dd:odd").css("backgroundColor","#fff");

    $(".profit-list .radio-text").on("click",function(){
        $(this).next().show();
    });
    $(".confirm").on("click",function(){
       $(this).parent().parent().hide();
    });
    $(".container").children().not(".profit-list").on("click",function(){
       $(".profit-list dl").hide();
    });

    $(".profit-list dd").on("click",function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("#radioTxte").html($(this).html());
      $(".profit-list dl").hide();
    });
    



    $(".profit-surface ul li").on("click",function(){
       $(this).addClass("active").siblings().removeClass("active");
       $('.profit-surface-all .profit-surface').eq($(this).index()).show().siblings().hide();
       var indexNum=$('.profit-surface-all .profit-surface').eq($(this).index()).attr("data-index");
        if(indexNum==1){
          $(".profit-surface ul").css({
            transform:"translate(60vw,0)"
          })
        }else if(indexNum==2){
          $(".profit-surface ul").css({
            transform:"translate(60vw,0)"
          })
        }else if(indexNum==3){
          $(".profit-surface ul").css({
            transform:"translate(60vw,0)"
          })
        }else if(indexNum==4){
          $(".profit-surface ul").css({
            transform:"translate(40vw,0)"
          })
        }else if(indexNum==5){
          $(".profit-surface ul").css({
            transform:"translate(20vw,0)"
          })
        }else if(indexNum==6){
          $(".profit-surface ul").css({
            transform:"translate(0,0)"
          })
        }else if(indexNum==7){
          $(".profit-surface ul").css({
            transform:"translate(-20vw,0)"
          })
       }else if(indexNum==8){
          $(".profit-surface ul").css({
            transform:"translate(-40vw,0)"
          })
       }else if(indexNum==9){
          $(".profit-surface ul").css({
            transform:"translate(-60vw,0)"
          })
       }else if(indexNum==10){
          $(".profit-surface ul").css({
            transform:"translate(-80vw,0)"
          })
       }else if(indexNum==11){
          $(".profit-surface ul").css({
            transform:"translate(-80vw,0)"
          })
       }else if(indexNum==12){
          $(".profit-surface ul").css({
            transform:"translate(-80vw,0)"
          })
       }
    });
    
  });    
});