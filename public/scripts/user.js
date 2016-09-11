requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min'
    }
});

requirejs(['jquery','common'],function($,common){  
    $(document).ready(function () {
       console.log("jquery已经调进来了");
    });    

});