$(function(){
    // ローディング
    $(window).on('load',function(){
        $("#splash-logo").delay(1200).fadeOut('slow');

        $("#splash").delay(1500).fadeOut('slow',function(){

            $('body').addClass('appear');
        });

        $('.splashbg').on('animationend',function(){

        });

    });
    // hamburger menu
    $(".burger-btn").click(function(){
        $(this).toggleClass('active');
    });
    


    // ヘッダー位置固定
    // var headerHight = 80;
    // $('a[href^=#]').click(function(){
    //     var href =$(this).attr("href");
    //         var target =$(href == "#" || href == "" ? 'html' : href);
    //             var position = target.offset().top-headerHight;
    //         $("html,body").animate({scrollTop:position},550,"swing");
    //         return false;
    // });

});