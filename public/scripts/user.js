requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        swiper: 'lib/swiper-3.3.1.min'
    }
});

requirejs(['jquery','common','swiper'],function($,common,swiper){  
  $(document).ready(function () {

    /*
      user begin
    */
    var wHeight=$(window).height();
    var cHeight=$(".container").height();
    var sHeight=$(".switching-mode").height();
    var bHeight=$(".book-immediately").height();
    if(cHeight+sHeight+bHeight>wHeight){
      $(".book-immediately").css("position","inherit");
      $(".switching-mode").css({
        position:"inherit",
        paddingLeft:"2%"
      });
      $(".m-hotel").css("paddingBottom",0);
    }

    /*
      user-profit begin
    */
    $(".profit-list dl dd:even").css("backgroundColor","#f4f4f4");
    $(".profit-list dl dd:odd").css("backgroundColor","#fff");

    $(".profit-list dl dt").on("click",function(){
        $(this).parent().parent().find("dd").show();
    });
    $(".confirm").on("click",function(){
       $(this).parent().parent().find("dd").hide();
    });
    $(".m-hotel").children().children().not(".profit-list").on("click",function(){
       $(".profit-list dd").hide();
    });

    $(".check-all").click(function(){   
      if(this.checked){   
       $("input[name='checkname']").each(function(){this.checked=true;});
       $(".check-confirm").text("取消全选");   
      }else{   
       $("input[name='checkname']").each(function(){this.checked=false;});   
       $(".check-confirm").text("全选"); 
      }  
    });

    var mySwiper = new Swiper('#swiper-container5',{
        pagination: '.my-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
          switch (index) {
            case 0: name='2016.01';break;
            case 1: name='2016.02';break;
            case 2: name='2016.03';break;
            case 3: name='2016.04';break;
            case 4: name='2016.05';break;
            case 5: name='2016.06';break;
            case 6: name='2016.07';break;
            case 7: name='2016.08';break;
            case 8: name='2016.09';break;
            case 9: name='2016.10';break;
            case 10: name='2016.11';break;
            case 11: name='2016.12';break;
            default: name='';
          }
          return '<span class="' + className + '">' + name + '</span>';
        },
        onSlideChangeStart: function(swiper){
            $(".my-pagination").css({
              transform:"translale(-10%,0)"
            })
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    });     
  });    

});