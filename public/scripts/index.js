requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.jquery.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper){  
    $(document).ready(function () {
       console.log("jquery已经调进来了");
        var mySwiper = new Swiper('#swiper-container0',{
    		   pagination : '.swiper-pagination',
           loop : true,
           autoplay: 5000
	      });
       

        var mySwiper1 = new Swiper('#swiper-container1',{
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          spaceBetween : 10,
          loop : true,
        })

    });
    

});