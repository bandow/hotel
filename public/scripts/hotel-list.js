requirejs.config({
    paths: {
        zepto: 'lib/zepto.min',
        dropload: 'lib/dropload.min'
    }
});

requirejs(['zepto','dropload'],function(zepto,dropload){  
    $(document).ready(function () {

       var size=$(window).width()/10;
        $("html").css('fontSize',size);
        if($(window).width()>=640){
           $("html").css('fontSize','24px');
        }

        $("#click-g").on("click",function(){
            $(".g-page").show();
        });

        $(".search-header .left").on("click",function(){
             $(".g-page").hide();
        });

        $(".page-ul-list li").on("click",function(){
           $(this).addClass("active").siblings().removeClass("active");
           $(".g-page-all .g-page-list").eq($(this).index()).show().siblings().hide();
        });

        $(".g-areaList dd").on("click",function(){
           $(this).addClass("z-active").siblings().removeClass("z-active");
           $(".g-areaItem .g-areaItem-list").eq($(this).index()).show().siblings().hide();
        });

        $(".g-areaItem-list dl dd").on("click",function(){
            $(this).addClass("l-active").siblings().removeClass("l-active");
            if($(this).find("i").size()>=1){
                return false;
            }else{   
                $(this).append("<i class='iconfont icon-dagou'></i>").siblings().find("i").remove();
            }
        });

       
        (function() {
            var lineUl=document.getElementById("line-ul");
            var lineLi=lineUl.getElementsByTagName("li");   
            var empty=document.getElementById("empty");     
            var f = document.forms[0],
                range = f['range'],
                // result = f['result'],
                cachedRangeValue = localStorage.rangeValue ? localStorage.rangeValue : 0; 

            // 检测浏览器是否是足够酷
            // 识别range input.
            var o = document.createElement('input');
            o.type = 'range';
            if ( o.type === 'text' ) alert('不好意思，你的浏览器还不够酷，试试最新的Opera浏览器吧。');

            // 设置初始值
            // 无论是否本地存储了，都设置值为0
            range.value = cachedRangeValue;
            // result.value = cachedRangeValue;

            // 当用户选择了个值，更新本地存储
            range.addEventListener("mouseup", function() {
                console.log("你选择的值是：" + range.value + ". 我现在正在用本地存储保存此值。在现代浏览器上刷新并检测。");
                localStorage ? (localStorage.rangeValue = range.value) : alert("数据保存到了数据库或是其他什么地方。");

            }, false);

            // 滑动时显示选择的值
            range.addEventListener("change", function() {
                // result.value = range.value;
                if(range.value==0){
                   lineLi[0].className="line-active"; 
                   lineLi[1].className="";
                   lineLi[2].className="";
                   lineLi[3].className="";
                   lineLi[4].className="";
                   lineLi[5].className="";
                }
                if(range.value==1){  
                  lineLi[0].className="line-active";                               
                  lineLi[1].className="line-active";
                  lineLi[2].className="";
                   lineLi[3].className="";
                   lineLi[4].className="";
                   lineLi[5].className="";
                }
                if(range.value==2){  
                  lineLi[0].className="line-active";                               
                  lineLi[1].className="line-active";                              
                  lineLi[2].className="line-active";
                  lineLi[3].className="";
                   lineLi[4].className="";
                   lineLi[5].className="";
                }
                if(range.value==3){    
                lineLi[0].className="line-active";                               
                  lineLi[1].className="line-active";                              
                  lineLi[2].className="line-active";                            
                  lineLi[3].className="line-active";
                   lineLi[4].className="";
                   lineLi[5].className="";
                }
                if(range.value==4){   
                lineLi[0].className="line-active";                               
                  lineLi[1].className="line-active";                              
                  lineLi[2].className="line-active";                            
                  lineLi[3].className="line-active";                             
                  lineLi[4].className="line-active";
                  lineLi[5].className="";
                }
                if(range.value==5){   
                  lineLi[0].className="line-active";                               
                  lineLi[1].className="line-active";                              
                  lineLi[2].className="line-active";                            
                  lineLi[3].className="line-active";                             
                  lineLi[4].className="line-active";                             
                  lineLi[5].className="line-active";
                }
            }, false);

            //
            empty.onclick=function(){
                range.value = cachedRangeValue;
                lineLi[0].className="line-active"; 
               lineLi[1].className="";
               lineLi[2].className="";
               lineLi[3].className="";
               lineLi[4].className="";
               lineLi[5].className="";
            }
        })();

        $("#empty").on("click",function(){
            $(".m-items li").removeClass("active");
        });

        $(".m-ul-c li").on("click",function(){
           $(this).addClass("active").siblings().removeClass("active");
        });
        $(".m-ul-b li").on("click",function(){
           $(this).addClass("active").siblings().removeClass("active");
        });

    });
    $(function(){
        var counter = 0;
        // 每页展示4个
        var num = 4;
        var pageStart = 0,pageEnd = 0;

        // dropload
        $('.container').dropload({
            scrollArea : window,
            loadDownFn : function(me){
                $.ajax({
                    type: 'GET',
                    url: '../public/scripts/json/more.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;

                        for(var i = pageStart; i < pageEnd; i++){
                            result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                            +'<img src="'+data.lists[i].pic+'" alt="">'
                                            +'<h3>'+data.lists[i].title+'</h3>'
                                            +'<span class="date">'+data.lists[i].date+'</span>'
                                        +'</a>';
                            if((i + 1) >= data.lists.length){
                                // 锁定
                                me.lock();
                                // 无数据
                                me.noData();
                                break;
                            }
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.lists').append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
        });
    });



});