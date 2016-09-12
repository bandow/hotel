// define(['jquery','highcharts'],function($,highcharts){

   //设置字体响应式
    $(function(){
        var size=$(window).width()/10;
        $("html").css('fontSize',size);
        if($(window).width()>=640){
           $("html").css('fontSize','24px');
        }
    }); 


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



    $(function(){
         $('#profit-surface6').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                lineColor: "#ccc",
                labels: {
                    y: 5, //x轴刻度往下移动20px
                    x:-20,
                    style: {
                        color: '#000',//颜色
                        fontSize:'14px'  //字体
                    }
                },
                categories: ['易耗品', '水费', '电费', '物业费 ', '网络费','清洁费','洗涤费','交通费','其他'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '单位 (元)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 50,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#fff'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                data: [{'color':'#008077','y':158.5},
                       {'color':'#ffa100','y':268.9},
                       {'color':'#008077','y':468.9},
                       {'color':'#ffa100','y':358.45},
                       {'color':'#008E8E','y':134.8},
                       {'color':'#ffa100','y':88.5},
                       {'color':'#008E8E','y':368.7},
                       {'color':'#ffa100','y':108.5},
                       {'color':'#008E8E','y':170.89}],
            }]
          });
      }); 
// })
  