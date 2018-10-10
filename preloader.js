/*
Preloader script with no dependencies
Homepage: regesh.ru
Version: 0.2;
Author: Georgy Khudiakov
Mail: me@regesh.ru
*/
document.addEventListener("DOMContentLoaded", function(event) {
    preloader()
});
window.onload = function(e) {
    preloaderFade()
};

function preloaderFade() {
    var element = document.getElementById('preloader')
    var op = 1; 
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function preloader() {
    if (!document.getElementById('prscript')) {
        var config = {
            bg: '#fff',
            width: '40px',
            height: '40px',
            colorMain: 'red',
            colorBg: 'green'
        }
    } else {
        var conf = document.getElementById('prscript');
        var config = {};
        config.bg = (conf.getAttribute('data-bg')) ? conf.getAttribute('data-bg') : '#fff'
        config.width = (conf.getAttribute('data-width')) ? conf.getAttribute('data-width') : '40px'
        config.height = (conf.getAttribute('data-height')) ? conf.getAttribute('data-height') : '40px'
        config.colorMain = (conf.getAttribute('data-colorMain')) ? conf.getAttribute('data-colorMain') : '#000'
        config.colorBg = (conf.getAttribute('data-colorBg')) ? conf.getAttribute('data-colorBg') : '#ccc'
    }
    var style = '#html-spinner{width:' + config.width + ';height:' + config.height + ';border:4px solid  ' + config.colorBg + ';border-top:4px solid ' + config.colorMain + ';border-radius:50%;transition-property:transform;animation-name:rotate;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;}@keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}';
    var block = document.createElement("div");
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = style;
    document.body.appendChild(styleBlock);
    var styles = "z-index:9999999;display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;height:100vh;width:100vw;background-color:" + config.bg + ";overflow:hidden;"
    block.setAttribute('id', 'preloader');
    block.setAttribute('style', styles);
    var spiner = document.createElement("div");
    spiner.setAttribute('id', 'html-spinner');
    document.body.appendChild(block);
    document.getElementById('preloader').appendChild(spiner)
}