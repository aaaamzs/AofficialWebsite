$(document).ready(function () {
        let mySwiper = new Swiper ('.swiper-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            on: {
                slideChangeTransitionStart: function(){
//                  console.log(this.activeIndex);
                    if(this.activeIndex === 4){
                        $(".nav").find("li").eq(this.activeIndex-3).find("span").addClass("active");
                        $(".nav").find("li").eq(this.activeIndex-3).siblings().find("span").removeClass("active");
                    }
                    else{
                        $(".nav").find("li").eq(this.activeIndex).find("span").addClass("active");
                        $(".nav").find("li").eq(this.activeIndex).siblings().find("span").removeClass("active");
                    }
                }
            }
        });

        $(".nav").find("li").find("span").click(function () {
            let idx = $(this).parent().parent().index();
            mySwiper.slideTo(idx);
        });

        $(".download").click(function () {
            $(".mask").show();
            $(".mask2").show();
            $(".mask").addClass("transfrom");
            $(".mask2").addClass("transfrom");
            $(".img").addClass("imgshow");
        });
        $(".mask2").click(function () {
            $(".mask").removeClass("transfrom");
            $(".mask2").removeClass("transfrom");
            $(".img").removeClass("imgshow");
            setTimeout(function () {
                $(".mask").hide();
                $(".mask2").hide();
            },1000);
        })
    })