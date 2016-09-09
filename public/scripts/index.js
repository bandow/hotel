requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.jquery.min'
    }
});

requirejs(['jquery','swiper'],function($,swiper){  
    $(document).ready(function () {
       console.log("jquery已经调进来了");
       var mySwiper = new Swiper('.swiper-container',{
		  pagination : '.swiper-pagination',
	   });
    });
    

});