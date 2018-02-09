// ==UserScript==
// @name        Clearnet links warning
// @namespace   zcyzcy88
// @include     http://127.0.0.1:43110/*
// @grant       none
// ==/UserScript==
(function () {


	var x = document.createElement('style')
	x.innerHTML = `.is-clearnet {
		outline: 2px solid red !important;
		outline-offset: 1px !important;
	}`
	document.head.appendChild(x)

	function main() {
		var els = document.querySelectorAll('a[href]:not([href="#"]):not(.clearnet-tested)') // ```:not([href="#"])``` is workaround for ZeroTalk
		Array.from(els).forEach(function (el, i) {
			el.classList.add('clearnet-tested')
			if (el.href.indexOf('http://127.0.0.1:43110') != 0) {
				el.classList.add('is-clearnet')
			}
		})
	}

	var observer = new MutationObserver(main)
	observer.observe(document.body, {
		childList: true,
		subtree: true,
	})


})()
