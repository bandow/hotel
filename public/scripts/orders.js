requirejs.config({
    paths: {
        jquery: 'lib/jquery-3.1.0.min'
    }
});

requirejs(['jquery','common'],function($,common){  
  $(document).ready(function () {
    //top-contacts
    $(".head-click").on("click",function(){
       $(".add-order-check-in").show();
    });
    
  });    
});