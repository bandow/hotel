requirejs.config({
    paths: {
        zepto: 'lib/zepto.min',
        dropload: 'lib/dropload.min'
    }
});

requirejs(['zepto','dropload'],function(zepto,dropload){  
    $(document).ready(function () {
       console.log("zepto已经调进来了");

       var size=$(window).width()/10;
        $("html").css('fontSize',size);
        if($(window).width()>=640){
           $("html").css('fontSize','24px');
        }
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