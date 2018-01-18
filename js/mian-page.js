// JavaScript Document
var t;
// $(".nav-li1").hover(function () {
//     clearTimeout(t);
//     t = setTimeout(function () {
//         $(".nav-li1").find(".card-nav").animate({
//             'top': 40 + 'px',
//             'opacity': 1
//         }, 200).addClass("dis");
//     }, 500);
// });

// $(".nav-li1").mouseleave(function () {
//     clearTimeout(t);
//     $(this).find(".card-nav").animate({
//         'top': 50 + 'px',
//         'opacity': 0
//     }, 200, function () {
//         $(".nav-li1").find(".card-nav").removeClass("dis");
//     });
// });

/*顶部导航二级菜单动效*/
$(function () {
    
    $(".nav-ul li").hover(
        function () {
            var is = $(this);
            
            /*设定鼠标移入时animate效果*/
            t = setTimeout(function () {

                $(is).children("ul").animate({
                    'top': 40 + 'px',
                    'opacity': 1
                }, 200)
                $(is).children("ul").show();
            }, 1000);
        },
        function () {
        
        /*设定鼠标移出时清除效果*/
            clearTimeout(t);
            
        /*并添加移出动画*/
            $(this).children("ul").animate({
                'top': 50 + 'px',
                'opacity': 0
            }, 200)
            /*给hide添加时间防止与动画同时运行导致animate无演出效果*/
            $(this).children("ul").hide(1);
        }
    );
});

/*登录二级菜单图片滚动*/
$(function(){
 var num = 0;
    function goLeft() {
    
        /*根据图片数量设置滚动总长度*/
        if (num == -320) {
            num = 0;
        }
        num -= 1;
        
        /*图片移动位置*/
        $(".scroll").css({
            'left': num
        })

    }
    /*滚动速度*/
    var timer = setInterval(goLeft, 20);
    
});

/*中部分区二级菜单动效*/
$(function () {
    
    $(".item-ul li").hover(
        function () {
            var is = $(this);
            
            /*设定鼠标移入时显示*/
                $(is).children("ul").show();
       
        },
        function () {
        
            /*鼠标移出时隐藏*/
            $(this).children("ul").hide();
        }
    );
});