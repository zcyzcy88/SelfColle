// ==UserScript==
// @name        Remove lang tag
// @namespace   zcyzcy88
// @include     *
// @run-at      document-start
// @grant       none
// ==/UserScript==
(function () {


	document.documentElement.setAttribute('lang', 'en')

	function main() {
		var els = document.body.querySelectorAll('[lang]')
		Array.from(els).forEach(function (el, i) {
			el.removeAttribute('lang')
		})
	}

	var observer = new MutationObserver(main)
	observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
	})


})()
