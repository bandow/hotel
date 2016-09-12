requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min',
        highcharts: 'lib/highcharts'
    }
});

requirejs(['jquery','common'],function($,common){  
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
  });   
});