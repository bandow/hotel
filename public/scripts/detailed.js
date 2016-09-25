requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper){  
    $(document).ready(function () {
        console.log("jquery已经调进来了");

        $(".info-a").on("click",function(){
            var active=$(this).parent().addClass("info-bottom").hasClass("info-bottom-active");
            if(active){
              $(this).parent().removeClass("info-bottom-active");
              $(this).text("详情");
            }else{
              $(this).parent().addClass("info-bottom-active");
               $(this).text("收缩");
            }
        });

        $(".standard-botoom-a").on("click",function(){
            var active=$(".standard-botoom-ul").hasClass("standard-botoom-ul-active");
            if(active){
               $(".standard-botoom-ul").removeClass("standard-botoom-ul-active");
               $(this).text("全部");
            }else{
               $(".standard-botoom-ul").addClass("standard-botoom-ul-active");
               $(this).text("收缩");
            }
        });

        var mySwiper1 = new Swiper('#swiper-container1',{
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          spaceBetween : 10,
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });

         var mySwiper1 = new Swiper('#swiper-container2',{
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });

    });
    

});