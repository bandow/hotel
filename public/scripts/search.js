requirejs.config({
    paths: {
        jquery: 'lib/jquery-1.12.2.min',
        daterangepicker: 'lib/jquery.daterangepicker',
        moment: 'lib/moment.min',
    }
});

requirejs(['jquery','common','daterangepicker','moment'],function($,common,daterangepicker,moment){  

  $(document).ready(function () {

    var myDate = new Date();
    var m=myDate.getMonth()+1;
    var day=myDate.getDate();
    var hDay=myDate.getDate()+1;
    
    //初始化当天时间
    $(".check-in-day").html(m+"-"+day);
    $(".check-out-day").html(m+"-"+hDay);

    //初始化1晚
    var num=$("#checkInDay").html()-$("#checkOutDay").html();
    $("#num").html(num);
    $("#num").html("1");
    

    $('#date').dateRangePicker(
      {
        startDate: new Date(),  //默认今天开始
        getValue: function()    //选择开始和结束的日期
        {
          if ($('#checkInDay').html() && $('#checkOutDay').html() )
            return $('#checkInDay').html() + ' to ' + $('#checkOutDay').html();
          else
            return '';
        },
        setValue: function(s,s1,s2)  //回调页面上
        {
          $('#checkInDay').html(s1);
          $('#checkOutDay').html(s2);
        },
        showDateFilter: function(time, date)   //显示价格
        {   
         var html='<div style="padding:0 5px;">';
             html+='<span style="font-size:14px;">'+date+'</span>';
             html+='<div style="opacity:1;"></div>';
             html+='</div>';
          return html;
        },
        showShortcuts:false,   //去掉快捷html
        inline:false,
        singleMonth:false,  //true显示1个月，false为2个月
        batchMode:true,
        stickyMonths:true, //如果是true，只会有一个以前和一个下一个按钮。点击他们将改变两个月。
        // extraClass:'dengcb',  //添加class
        showTopbar:false,     //true显示确定按钮 false不显示确定按钮选择好就确定
        selectForward:false,   //true选择开始的时间前面就不能选，默认false
        selectBackward:false,  //true只能选择1天     
      })
  });  

  
  /*阻止ios拖拽到底部还能继续拖拽*/
var ScrollFix = function(elem) {
    // Variables to track inputs
    var startY, startTopScroll;
    
    elem = elem || document.querySelector(elem);
    
    // If there is no element, then do nothing    
    if(!elem)
        return;

    // Handle the start of interactions
    elem.addEventListener('touchstart', function(event){
        startY = event.touches[0].pageY;
        startTopScroll = elem.scrollTop;
        
        if(startTopScroll <= 0)
            elem.scrollTop = 1;

        if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
            elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
    }, false);
};

/*判断设备调用ScrollFix*/

var sUserAgent=navigator.userAgent.toLowerCase();
if(sUserAgent.match(/iphone os/i) == "iphone os"){
    $('.month-wrapper').addClass('month-wrapper2');
    ScrollFix($('.month-wrapper2')[0]); 
}

/*阻止用户双击使屏幕上滑*/
var agent = navigator.userAgent.toLowerCase();        //检测是否是ios
var iLastTouch = null;                                //缓存上一次tap的时间
if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0)
{
    document.body.addEventListener('touchend', function(event)
    {
        var iNow = new Date()
            .getTime();
        iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
        var delta = iNow - iLastTouch;
        if (delta < 500 && delta > 0)
        {
            event.preventDefault();
            return false;
        }
        iLastTouch = iNow;
    }, false);
}


});