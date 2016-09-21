requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        highcharts: 'lib/highcharts'
    }
});

requirejs(['jquery','common'],function($,common){  

  $(document).ready(function () {
    //  user begin
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
    //user comment begin
    $(".close").on("click",function(){
       if(window.confirm("确实要删除吗？")){
            $(this).parent().parent().parent().parent().hide();
        }else{
            return;
        }     
    });
    //publish comment
    $(".img1").on("click",function(){
      $(this).parent().addClass("g5");
      $(this).parent().removeClass("g6");
      $(this).parent().removeClass("g4");
      $(this).parent().removeClass("g3");
      $(this).parent().removeClass("g2");
      $(this).parent().removeClass("g1");
    });
    $(".img2").on("click",function(){
      $(this).parent().addClass("g4");
      $(this).parent().removeClass("g6");
      $(this).parent().removeClass("g5");
      $(this).parent().removeClass("g3");
      $(this).parent().removeClass("g2");
      $(this).parent().removeClass("g1");
    });
    $(".img3").on("click",function(){
      $(this).parent().addClass("g3");
      $(this).parent().removeClass("g6");
      $(this).parent().removeClass("g5");
      $(this).parent().removeClass("g4");
      $(this).parent().removeClass("g2");
      $(this).parent().removeClass("g1");
    });
    $(".img4").on("click",function(){
      $(this).parent().addClass("g2");
      $(this).parent().removeClass("g6");
      $(this).parent().removeClass("g5");
      $(this).parent().removeClass("g3");
      $(this).parent().removeClass("g4");
      $(this).parent().removeClass("g1");
    });
    $(".img5").on("click",function(){
      $(this).parent().addClass("g1");
      $(this).parent().removeClass("g6");
      $(this).parent().removeClass("g5");
      $(this).parent().removeClass("g3");
      $(this).parent().removeClass("g2");
      $(this).parent().removeClass("g4");
    });


  });  

});