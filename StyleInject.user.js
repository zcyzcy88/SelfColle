// ==UserScript==
// @name        User Style Inject
// @namespace   zcyzcy88
// @include     *
// @grant       none
// @run-at      document-start
// ==/UserScript==
(function () {


// Thanks http://qiita.com/cyokodog@github/items/2e66410c3a61ebd8670e
Element.prototype.prependChild = function (el) {
	this.insertBefore(el, this.firstChild)
}

var x = document.createElement('style')
x.innerHTML = `
sub, sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}
sub {
	bottom: -0.25em;
}
sup {
	top: -0.5em;
}
fieldset {
	border: 1.5px solid silver;
	margin: 0 2px;
	padding: .35em .625em .75em;
}
abbr[title] {
	border-bottom: 0;
	text-decoration: underline;
	text-decoration: underline dotted;
}
::selection {
	color: black !important;
	background: rgba(128, 191, 255, 0.8) !important;
}
a::selection {
	color: #00c !important;
}
body, button, input, optgroup, select, textarea {
	font-size: 1em;
	font-family: Roboto, Yunlin Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important;
}
pre, code, kbd, samp, var {
	font-size: 0.9em;
	font-family: SFMono-Regular, Consolas, monospace, sans-serif !important;
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: italic;
	font-weight: 300;
	src: local('Roboto Light Italic'), local('Roboto-LightItalic');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: italic;
	font-weight: 400;
	src: local('Roboto Italic'), local('Roboto-Italic');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: italic;
	font-weight: 500;
	src: local('Roboto Medium Italic'), local('Roboto-MediumItalic');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: italic;
	font-weight: 700;
	src: local('Roboto Bold Italic'), local('Roboto-BoldItalic');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: italic;
	font-weight: 900;
	src: local('Roboto Black Italic'), local('Roboto-BlackItalic');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: normal;
	font-weight: 300;
	src: local('Roboto Light'), local('Roboto-Light');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: normal;
	font-weight: 400;
	src: local('Roboto'), local('Roboto-Regular');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: normal;
	font-weight: 500;
	src: local('Roboto Medium'), local('Roboto-Medium');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: normal;
	font-weight: 700;
	src: local('Roboto Bold'), local('Roboto-Bold');
}
@font-face {
	font-family: 'Helvetica Neue';
	font-style: normal;
	font-weight: 900;
	src: local('Roboto Black'), local('Roboto-Black');
}
@font-face {
	font-family: 'Helvetica';
	font-style: italic;
	font-weight: 300;
	src: local('Roboto Light Italic'), local('Roboto-LightItalic');
}
@font-face {
	font-family: 'Helvetica';
	font-style: italic;
	font-weight: 400;
	src: local('Roboto Italic'), local('Roboto-Italic');
}
@font-face {
	font-family: 'Helvetica';
	font-style: italic;
	font-weight: 500;
	src: local('Roboto Medium Italic'), local('Roboto-MediumItalic');
}
@font-face {
	font-family: 'Helvetica';
	font-style: italic;
	font-weight: 700;
	src: local('Roboto Bold Italic'), local('Roboto-BoldItalic');
}
@font-face {
	font-family: 'Helvetica';
	font-style: italic;
	font-weight: 900;
	src: local('Roboto Black Italic'), local('Roboto-BlackItalic');
}
@font-face {
	font-family: 'Helvetica';
	font-style: normal;
	font-weight: 300;
	src: local('Roboto Light'), local('Roboto-Light');
}
@font-face {
	font-family: 'Helvetica';
	font-style: normal;
	font-weight: 400;
	src: local('Roboto'), local('Roboto-Regular');
}
@font-face {
	font-family: 'Helvetica';
	font-style: normal;
	font-weight: 500;
	src: local('Roboto Medium'), local('Roboto-Medium');
}
@font-face {
	font-family: 'Helvetica';
	font-style: normal;
	font-weight: 700;
	src: local('Roboto Bold'), local('Roboto-Bold');
}
@font-face {
	font-family: 'Helvetica';
	font-style: normal;
	font-weight: 900;
	src: local('Roboto Black'), local('Roboto-Black');
}
@font-face {
	font-family: 'Arial';
	font-style: italic;
	font-weight: 300;
	src: local('Roboto Light Italic'), local('Roboto-LightItalic');
}
@font-face {
	font-family: 'Arial';
	font-style: italic;
	font-weight: 400;
	src: local('Roboto Italic'), local('Roboto-Italic');
}
@font-face {
	font-family: 'Arial';
	font-style: italic;
	font-weight: 500;
	src: local('Roboto Medium Italic'), local('Roboto-MediumItalic');
}
@font-face {
	font-family: 'Arial';
	font-style: italic;
	font-weight: 700;
	src: local('Roboto Bold Italic'), local('Roboto-BoldItalic');
}
@font-face {
	font-family: 'Arial';
	font-style: italic;
	font-weight: 900;
	src: local('Roboto Black Italic'), local('Roboto-BlackItalic');
}
@font-face {
	font-family: 'Arial';
	font-style: normal;
	font-weight: 300;
	src: local('Roboto Light'), local('Roboto-Light');
}
@font-face {
	font-family: 'Arial';
	font-style: normal;
	font-weight: 400;
	src: local('Roboto'), local('Roboto-Regular');
}
@font-face {
	font-family: 'Arial';
	font-style: normal;
	font-weight: 500;
	src: local('Roboto Medium'), local('Roboto-Medium');
}
@font-face {
	font-family: 'Arial';
	font-style: normal;
	font-weight: 700;
	src: local('Roboto Bold'), local('Roboto-Bold');
}
@font-face {
	font-family: 'Arial';
	font-style: normal;
	font-weight: 900;
	src: local('Roboto Black'), local('Roboto-Black');
}
@font-face {
	font-family: "Times New Roman";
	src: local("Georgia");
}
@font-face {
	font-family: "Courier New";
	src: local("Consolas");
}
@font-face {
	font-family: "宋体";
	src: local("Microsoft YaHei");
}
@font-face {
	font-family: "新宋体";
	src: local("Microsoft YaHei");
}
@font-face {
	font-family: "SimSun";
	src: local("Microsoft YaHei");
}
@font-face {
	font-family: "NSimSun";
	src: local("Microsoft YaHei");
}
`
document.head.prependChild(x)


})()
