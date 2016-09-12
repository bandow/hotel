requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        //jquery: 'lib/jquery-1.10.1.min',
        swiper: 'lib/swiper-3.3.1.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper){  
    $(document).ready(function () {
       console.log("jquery已经调进来了");
        var mySwiper = new Swiper('#swiper-container0',{
    		   pagination : '.swiper-pagination',
           loop : true,
           autoplay: 5000,
           observer:true,//修改swiper自己或子元素时，自动初始化swiper
           observeParents:true,//修改swiper的父元素时，自动初始化swiper
	      });
       

        var mySwiper1 = new Swiper('#swiper-container1',{
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          spaceBetween : 10,
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })

    });
    

});