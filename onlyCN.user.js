// ==UserScript==
// @name        只显示中文帖子
// @namespace   zcyzcy88
// @include     */Talk.ZeroNetwork.bit*
// @grant       none
// ==/UserScript==
(function () {


    function main() {
        var els = document.querySelectorAll('.topics .topic:not(.tested):not(.template)')
        Array.from(els).forEach(function (el, i) {
            el.classList.add('tested')
            var text = el.querySelector('.title').innerText
            if (!text.match(/[\u4E00-\u9FCB\u3400-\u4DB5\uF900-\uFAD9]/)) {
                el.style.display = 'none'
                console.log('已隱藏非中文:\n' + text + '\n' + el.querySelector('.title-link').href)
            }
        })
    }

    var observer = new MutationObserver(main)
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    })


})()
