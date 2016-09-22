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