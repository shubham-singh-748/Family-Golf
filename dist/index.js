let menu = document.getElementById('menu')
let showList = document.querySelector('.list')

menu.addEventListener('click', function () {

    const iconElem = menu.querySelector('i')

    // it checks for current class present bx-menu or not
    if (iconElem.classList.contains('bx-menu')) {

        iconElem.classList.remove('bx-menu')
        iconElem.classList.add('bxl-xing')
        // it remove hidden property which hides list
        showList.classList.remove('hidden')

    }
    else {

        iconElem.classList.remove('bxl-xing')
        iconElem.classList.add('bx-menu')
        showList.classList.add('hidden')

    }
})

let crsr = document.querySelector("#cursor")
let crsrBlur = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + 'px'
    crsr.style.top = dets.y + 'px'

    crsrBlur.style.left = dets.x - 40 + 'px'
    crsrBlur.style.top = dets.y - 40 + 'px'
})

// let h4all = document.querySelectorAll('#nav p')
// h4all.forEach(function (elem) {
//     elem.addEventListener('mouseenter', function () {
//         crsr.style.scale = 3
//         crsr.style.border = '1px solid #fff'
//         crsr.style.backgroundColor = 'transparent'

//     })

//     elem.addEventListener('mouseleave', function () {
//         crsr.style.scale = 3
//         crsr.style.border = '0px solid #95c11e'
//         crsr.style.backgroundColor = '#95c11e'

//     })
// })

gsap.to('#nav', {
    backgroundColor: 'black',
    height: '80px',
    duration: 0.7,

    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
    }
})

gsap.to('#main', {
    backgroundColor: '#000',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        // markers: true,
        scrub: 2,
        start: 'top -25%',
        end: 'top -70%',
    }
})

gsap.from('#about-us img, #about-us-in', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 58%',
        scrub: 3,
    }
})

gsap.from('#cards-container', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#cards-container',
        scroller: 'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 65%',
        scrub: 2,
    }
})

gsap.from('#col1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '#col1',
        scroller: 'body',
        // markers: true,
        start:'top 50%',
        end:'top 40%',
        scrub:4
    }
})

gsap.from('#col2', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '#col1',
        scroller: 'body',
        // markers: true,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 4
    }
})