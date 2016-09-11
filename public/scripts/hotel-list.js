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

    // dropload
    var dropload = $('.container').dropload({
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据</div>'
        },
        loadUpFn : function(me){
            $.ajax({
                type: 'GET',
                url: '../public/scripts/json/more.json',
                dataType: 'json',
                success: function(data){
                    var result = '';
                    for(var i = 0; i < data.lists.length; i++){
                        result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                        +'<img src="'+data.lists[i].pic+'" alt="">'
                                        +'<h3>'+data.lists[i].title+'</h3>'
                                        +'<span class="date">'+data.lists[i].date+'</span>'
                                    +'</a>';
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.container').html(result);
                        // 每次数据加载完，必须重置
                        dropload.resetload();
                    },1000);
                },
                error: function(xhr, type){
                     console.log('Ajax error!');
                    // 即使加载出错，也得重置
                    dropload.resetload();
                }
            });
        },
        loadDownFn : function(me){
            $.ajax({
                type: 'GET',
                url: '../public/scripts/json/more.json',
                dataType: 'json',
                success: function(data){
                    var result = '';
                    for(var i = 0; i < data.lists.length; i++){
                        result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                        +'<img src="'+data.lists[i].pic+'" alt="">'
                                        +'<h3>'+data.lists[i].title+'</h3>'
                                        +'<span class="date">'+data.lists[i].date+'</span>'
                                    +'</a>';
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.container').append(result);
                        // 每次数据加载完，必须重置
                        dropload.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    console.log('Ajax error!');
                    // 即使加载出错，也得重置
                    dropload.resetload();
                }
            });
        }
    });

    });
});