// ==UserScript==
// @name         VRT Auto Minimal Cookie
// @namespace    https://github.com/papa-nerd
// @version      0.1
// @description  Auto accept minimal cookies for VRT sites
// @author       papa-nerd
// @run-at       document-start
// @grant        none
// @icon         https://www.vrt.be/etc.clientlibs/corporate/clientlibs/clientlib-site/resources/images/favicon/favicon.ico
// @match        https://vrt.be/*
// @match        https://www.vrt.be/*
// @match        https://sporza.be/*
// @match        https://www.sporza.be/*
// @match        https://een.be/*
// @match        https://www.een.be/*
// @match        https://canvas.be/*
// @match        https://www.canvas.be/*
// @match        https://radio1.be/*
// @match        https://www.radio1.be/*
// @match        https://radio2.be/*
// @match        https://www.radio2.be/*
// @match        https://klara.be/*
// @match        https://www.klara.be/*
// @match        https://mnm.be/*
// @match        https://www.mnm.be/*
// @match        https://stubru.be/*
// @match        https://www.stubru.be/*
// @match        https://radioplus.be/*
// @match        https://www.radioplus.be/*
// ==/UserScript==

(function() {
    'use strict';
    if (document.readyState !== 'loading') {
        consent();
    }
    else {
        document.addEventListener('DOMContentLoaded', consent);
    }

    function consent() {
        setTimeout(function(){
            if(!!document.getElementById('widget-vrt-cookiebalk-screen-icookies')) {
                const waitUntilLoaded = setInterval(function(){
                    const acceptMinimalCookies = document.getElementById('widget-vrt-cookiebalk3__linkbutton');
                    if(!!acceptMinimalCookies){
                        clearInterval(waitUntilLoaded);
                        acceptMinimalCookies.click();
                        console.info('Accepted minmal VRT Cookies');
                    }
                }, 250);
            }
        }, 750);
    }

})();