
      //////Q&A/////////
      $('.question-content').on('click', function(){
        $(this).toggleClass('active')
        $(this).siblings().removeClass('active')

    })//.question-content end
    
  // 小於768執行
    $('#btn-nav-switch').on('click', function(){
        $('nav').toggleClass('active')
    })// btn-nav-switch end
    
    $('nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('active')
    })// nav>ul>li end

    $('.child').prepend($('.child>img').last().clone())//第二層裡面最前面 補上 圖片陣列中的最後一個 的複製元素
    $('.child').append($('.child>img').eq(1).clone()) //第二層裡面最前面 補上 圖片陣列中的最後二個 的複製元素

    let currentNum = 1 //當前的數字
    let parentWidth = $('.parent').width() //父層寬度
    let imgLength = $('.child>img').length //子層圖片個數
    let childTotalWidth = parentWidth * imgLength //父層寬度*子層圖片個數

    $('.child').css({ 'margin-left': -parentWidth * (currentNum) })//調整第二層一開始位移的位置                        
    $('.child').width(childTotalWidth) //子層總寬 = 父層寬度*子層個數(進到畫面讀一次)
    $('.child>img').width(parentWidth) //子層下的圖片寬 = 父層寬度

    $(window).on('load',function(){
        $('.loadin-overlay').addClass('active')
        parentWidth = $('.parent').width()
        childTotalWidth = parentWidth * imgLength
        $('.child').css({ 'margin-left': -parentWidth * currentNum })
        $('.child').width(childTotalWidth)
        $('.child>img').width(parentWidth)
    })//window load end

    //for 迴圈 從0到圖片總數-2 的條件下，i累加1
    for(let i = 0; i < imgLength-3; i++){
        $('.indicator>li.active').after('<li></li>')
    }

    // 縮放時的變化
    $(window).resize(function () {
        parentWidth = $('.parent').width()
        childTotalWidth = parentWidth * imgLength
        $('.child').css({ 'margin-left': -parentWidth * currentNum })
        $('.child').width(childTotalWidth)
        $('.child>img').width(parentWidth)
    })//window resize end

    $('.right-arrow').on('click', function () {
        if (currentNum == imgLength - 1) { //假如當前的數字相等於圖片總數

        } else {
            currentNum = currentNum + 1 //當前數字累加1
            common()
            // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
            // -500*(2-1)
        }//if currentNum == imgLength end
    })// .right-arrow end

    $('.left-arrow').on('click', function () {
        if (currentNum == 0) {

        } else {
            currentNum = currentNum - 1
            common()
            // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
        }//if currentNum == 1 end

    })// .right-arrow end


    $('.indicator>li').on('click', function () {
        currentNum = $(this).index() + 1 //當前的數字 = 點擊的序列號 + 1
        common()
        // $('.indicator>li').eq(currentNum - 1).addClass('active')
        // $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active')
    })//indicator>li end

    function common() {

        $('.child').animate({ 'margin-left': -parentWidth * currentNum }, function () {
            // callback 函式執行完之後執行
            //假如當前的數字 相等於 總數 -1
            if (currentNum == imgLength - 1) {
                currentNum = 1
            }
            if (currentNum == 0) {
                currentNum = imgLength - 2
            }
            //前面跑完動畫執行
            $('.child').css({ 'margin-left': -parentWidth * currentNum })
            $('.indicator>li').eq(currentNum - 1).addClass('active')
            $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active')

        })//collback end
    } //common() end

    setInterval(function () {
        $('.right-arrow').click()
    }, 3000)

    $('.banner').slick({
        infinite: true,
        slidesToShow: 2.36,
        slidesToScroll: 3
    });
  

