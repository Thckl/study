// JavaScript Document
/*开启浏览器时触发事件，判断浏览器窗口宽度并修改*/
$(window).resize(function () {

    /*获取浏览器当前宽度*/
    var bodyw = $(document.body).outerWidth(true);

    /*当宽度小于1280px时修改浏览器宽度，导航标签间隔*/
    if (bodyw < 1160) {
        $(document.body).addClass("w1000 w520 l10 w670");
        $(".show").addClass("hide");
    } else {

        /*大于1280px时移除样式，复原*/
        $(document.body).removeClass("w1000 w520 l10 w670");
        $(".show").removeClass("hide");
    }
});
/*浏览器宽度改变时触发事件，判断浏览器窗口大小并修改*/
$(function () {

    /*获取浏览器当前宽度*/
    var bodyw = $(document.body).outerWidth(true);

    /*当宽度小于1280px时修改浏览器宽度，导航标签间隔*/
    if (bodyw < 1160) {
        $(document.body).addClass("w1000 l10 w520 w670");
        $(".show").addClass("hide");
    } else {

        /*大于1280px时移除样式，复原*/
        $(document.body).removeClass("w1000 l10 w520 w670");
        $(".show").removeClass("hide");
    }
});

/*顶部导航二级菜单动效*/
var t;
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
$(function () {
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

/*首页轮播图*/
window.onload = function () {

    /*获取*/
    var Bi = document.getElementById("img-box");
    var Perv = document.getElementById("prev");
    var Next = document.getElementById("next");

    /*定义事件名称为animate*/
    function animate(offset) {

        /*定义BiLeft获取Bi的left值+offset*/
        var BiLeft = parseInt(Bi.style.left) + offset;

        /*重新给定left属性的值为BiLeft*/
        Bi.style.left = BiLeft + 'px';

        /*设定BiLeft限制以达到图片退回的目的*/
        if (BiLeft > -440) {
            Bi.style.left = -2200 + 'px';
        }

        if (BiLeft < -2200) {
            Bi.style.left = -440 + 'px';
        }
    }

    /*按钮点击切换图片事件*/
    Perv.onclick = function () {
        animate(440);
    }
    Next.onclick = function () {
        animate(-440);

    }

    /*通过计时器给定轮播间隔*/
    var t;

    function play() {
        t = setInterval(function () {
            Next.onclick()
        }, 3000)
    }
    play();

    var Box = document.getElementById("scrolall");

    /*通过清除计时器达到停止的轮播的目的*/
    function stop() {
        clearInterval(t);
    }

    /*鼠标移入执行停止事件，移出执行播放事件*/
    Box.onmouseover = stop;
    Box.onmouseout = play;

    var Bb = document.getElementById("control").getElementsByTagName("span");
    var Cu = document.getElementById("control-ul").getElementsByTagName("li");
    var Index = 1;

    /*跟随轮播按钮切换事件*/
    function Button1() {

        for (var i = 0; i < Bb.length; i++) {
            if (Bb[i].className == 'spanhover') {
                Bb[i].className = '';
            }
        }
        Bb[Index - 1].className = 'spanhover';
    }

    /*跟随轮播标题切换事件*/
    function Txt1() {

        for (var a = 0; a < Cu.length; a++) {
            if (Cu[a].className == 'controlscroll-li1') {
                Cu[a].className = 'controlscroll-li2';
            }
        }
        Cu[Index - 1].className = 'controlscroll-li1';
    }

    /*左切换按钮点击事件*/
    Perv.onclick = function () {

        /*当前按钮/文字层数减1达到切换效果*/
        Index -= 1;
        if (Index < 1) {
            Index = 5;
        }
        Button1();
        Txt1();
        animate(440);
    }

    /*右切换按钮点击事件*/
    Next.onclick = function () {
        /*当前按钮/文字层数加1达到切换效果*/
        Index += 1;
        if (Index > 5) {
            Index = 1;
        }
        Button1();
        Txt1();
        animate(-440);
    }
    for (var i = 0; i < Bb.length; i++) {
        (function (i) {
            Bb[i].onclick = function () {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 440 * (Index - clickIndex);
                animate(offset);
                Index = clickIndex;
                Button1();
                Txt1();
            }
        })(i)

    }
}

/*按钮切换近期视频层*/
$(function () {
    $(".button1").click(function () {
        $(".change1").removeClass("index2").addClass("index1");
        $(".change2").removeClass("index1").addClass("index2");

    });
    $(".button2").click(function () {
        $(".change1").removeClass("index2").addClass("index1");
        $(".change3").removeClass("index1").addClass("index2");

    });
    $(".button3").click(function () {
        $(".change2").removeClass("index2").addClass("index1");
        $(".change3").removeClass("index1").addClass("index2");

    });
    $(".button4").click(function () {
        $(".change2").removeClass("index2").addClass("index1");
        $(".change1").removeClass("index1").addClass("index2");

    });
    $(".button5").click(function () {
        $(".change3").removeClass("index2").addClass("index1");
        $(".change1").removeClass("index1").addClass("index2");

    });
    $(".button6").click(function () {
        $(".change3").removeClass("index2").addClass("index1");
        $(".change2").removeClass("index1").addClass("index2");

    });

});

/*判断浏览器是否支持webp格式图片*/
function checkWebp() {
    try {
        return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    } catch (err) {
        return false;
    }
}
console.log(checkWebp()); // true or false


$(function () {
    var tm;
    $(".generalize-picbox").hover(function () {
        var GP=$(this);
        tm = setTimeout(function () {
            $(GP).find(".generalize-progressbar").show();
            $(GP).find(".generalize-scrollbackground").show();
            $(GP).find(".generalize-span").show().css("padding-top", 70 + 'px');
        }, 1000)
    }, function () {
        clearTimeout(tm);
        $(this).find(".generalize-progressbar").hide();
        $(this).find(".generalize-scrollbackground").hide();
        $(this).find(".generalize-span").hide().css("padding-top", 80 + 'px');
    });
            /*进度条跟随鼠标移动*/
            $(".generalize-picbox").mousemove(function (e) {
                var Width = e.pageX - $(this).find(".progressbar").offset().left;
                var pbWidth = Width;
                
                if (pbWidth >= 150) {
                    pbWidth = 150;
                } else if (pbWidth <= 0) {
                    pbWidth = 0;
                }
                //console.log(pbWidth);
                $(this).find(".progressbar").css('width', pbWidth + 'px');

                /*背景定位跟随鼠标切换*/
                var x = 0; //背景定位x轴坐标
                var y = 0; //背景定位y轴坐标
                var a = 0;
                var wh = 0;
                var w;
                /*获取视频长度(只有视频没有后台给出的视频长度时使用)     
                  var videolength=$("videoId").duration;    
                   var vt1=Math.floor(videolength/60);
                   var vt2=Math.floor(videolength%60);
                   var vt3=vt1 + ':' + vt2;
                */
                var spval = $(this).find(".generalize-span").text();
                var str = spval; //获取span的值为视频长度  \\ 视频长度var str = vt3;(只有视频没有后台给出的视频长度时使用)
                var ret = str.split(".")[0]; //获取分钟数
                var ree = str.split(".")[1]; //获取秒数
                var piRet = parseInt(ret);
                var piRee = parseInt(ree);
                var c = (piRet * 60 + piRee) / 9;
                var n = Math.round(150 / c); //得出图片切换间隔
                if (n < 1.5) {
                    n = 1.5;
                }
                if (pbWidth >= n) {
                    w = Math.floor(pbWidth / n);
                    wh = 160 * w;
                    if (wh >= 1600) {
                        a = Math.floor(wh / 1600);
                        y = -a * 90;

                        x = -(wh - (a * 1600));
                    } else {
                        x = -wh;
                        y = 0;
                    }
                } else {
                    x = -160;
                }
                $(this).find(".generalize-scrollbackground").css("background-position", x + 'px ' + y + 'px');

            });


});
