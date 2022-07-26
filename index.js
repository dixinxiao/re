function TEST(array) {
    let bar_html = ''
    let bg_html = ''
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        bar_html += `<li data-index="${i}" class="${item.active ? 'active' : ''}"> <img src="imgs/png/${item.name}.jpg"> </li>`
        if (item.active) {
            bg_html += `<img 
                style="position:${item.position || 'absolute'};
                top:${item.top || '0'};
                left:${item.left || '0'};
                width:${item.width || '100%'};
                height:${item.height || '100%'};"
                data-original="imgs/png/${item.name}.jpg"
                src="imgs/png/${item.name}.jpg">`
        }
    }
    $("img").lazyload();
    $('.bar').html(bar_html)
    $('.bg').html(bg_html)
}

$(function () {
    document.body.addEventListener('mousedown', function () {
        var video = document.getElementsByTagName('video')
        video[0].muted = false
    }, true)

    let position = [{ id: 1, name: '0717_1', active: true },]
    for (let i = 2; i < 35; i++) {
        position.push({ name: '0717_' + i, active: false },)
    }
    setTimeout(function () {
        TEST(position)
    }, 3000)

    var v1 = document.getElementById('video1')
    var v2 = document.getElementById('video2')
    var v3 = document.getElementById('video3')
    var v4 = document.getElementById('video4')
    var v5 = document.getElementById('video5')
    var v6 = document.getElementById('video6')
    var v7 = document.getElementById('video7')
    $('.main .toPage1').on('click', function () {
        v1.pause()
        $('.home').hide()
        $('.page1').show()
        v2.play()
    })
    // 地狱线
    $('.page1 .to_d1').on('click', function () {
        v2.pause()
        $('.page1').hide()
        $('.page_d1').show()
        v3.play()
        setTimeout(() => {
            $('.page_d1 .next').show()
        }, 6000)
    })
    $('.to_d2').on('click', function () {
        v3.pause()
        $('.page_d1').hide()
        $('.page_d2').show()
        v4.play()
    })
    $('.to_d3').on('click', function () {
        v4.pause()
        $('.page_d2').hide()
        $('.page_d3').show()
        v5.play()
    })

    $('.to_d4').on('click', function () {
        let time =9000;
        v5.pause()
        $('.page_d3').hide()
        $('.page_d4').show()
        let date = new Date().getTime()
        if (date % 2 == 0) {
            v7.src = 'imgs/d5.mp4'
            time = 5500
        } else {
            v7.src = 'imgs/d6.mp4'
            time = 8500
        }
        v7.play()
        setTimeout(() => {
            v7.pause()
            $('.page_d4').hide(500)
            $('.home').show(500)
            v1.play()
        }, time)
    })
    $('.page_d4 .to_home').on('click', function () {
        v7.pause()
        $('.page_d5').hide()
        $('.home').show()
        v1.play()
    })
    // 天堂线

    var vt1 = document.getElementById('video-t1')
    var vt2 = document.getElementById('video-t2')
    var vt3 = document.getElementById('video-t3')
    var vt4 = document.getElementById('video-t4')
    var vt5 = document.getElementById('video-t5')

    var chooseCuser;
    $('.to_t1').on('click', function () {
        v2.pause()
        $('.page1').hide()
        $('.page_t1').show()
        vt1.play()
    })
    $('.to_t2').on('click', function () {
        vt1.pause()
        $('.page_t1').hide()
        $('.page_t2').show()
        vt2.play()
    })

    $('.to_t3').on('click', function () {
        vt2.pause()
        $('.page_t2').hide()
        $('.page_t3').show()
        vt3.play()
    })

    $('.to_t4').on('click', function () {
        vt3.pause()
        $('.page_t3').hide()
        $('.page_t4').show()
        vt4.play()
    })
    $('.to_t5').on('click', function () {
        vt4.pause()
        $('.page_t4').hide()
        $('.page_t5').show()
        vt5.play()
    })
    $('.to_t6').on('click', function () {
        vt5.pause()
        $('.page_t5').hide()
        if (!chooseCuser) {
            $('.page_t2').show()
            vt2.play()
        }else{
            $('.page_t6').css('display', 'flex')
        }
    })


    $('.choose').on('click', function () {
        chooseCuser = $(this).attr('data-img')
        console.log(chooseCuser)
        $('.main').hide()
        $('.page_t6').css('display', 'flex')
        $('.page_t6').css('cursor', `url(${chooseCuser}),auto`)
    })

    $('.completed').on('click', function () {
        $('.page_t6 .bar').css('display', 'none')
        $(this).hide()
        $('.page_t6 .reset').show()
        $('.page_t6 .end').show()
    })

    $('.reset').on('click', function () {
        $('.page_t6 .bar').css('display', 'block')
        $(this).hide()
        $('.page_t6 .end').hide()
        $('.page_t6 .completed').show()
    })

    $('.end').on('click', function () {
        $(this).hide()
        $('.page_t6 .reset').hide()
    })


    $(document).on('click', '.bar li', function (e) {
        let index = $(this).attr('data-index')
        position[index]['active'] = !position[index].active
        let data = JSON.parse(JSON.stringify(position))
        $('.page_t6 .text').hide()
        TEST(data)
    })
})