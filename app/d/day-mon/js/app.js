// JavaScript file
// Description
// Author: Chad Cleveland | Lightbulb Web Services | Lightbulb.Services
// Copyright: © Lightbulb Web Services 2021. All Rights Reserved.

// Last modified: 03/03/2021 17:10:20

// debugging and console
var debugTimer = 0;

setInterval(function () {
    debugTimer = 1 + debugTimer;
}, 1);

appVersion = top.location.href;

if (appVersion.indexOf('.app/') > -1) {
    appVersion = appVersion.split('.app/')[1];
    if (appVersion.indexOf('/') > -1) {
        appVersion = appVersion.split('/')[0];
    }
}

if (appVersion.indexOf('.com/') > -1) {
    appVersion = appVersion.split('.com/')[1];
    if (appVersion.indexOf('/') > -1) {
        appVersion = appVersion.split('/')[0];
    }
}

function getCountry() {
    console.log('get country approach 2');
    let fPath = 'https://lib.lightbulb.services/img/lws-ico-1.png';
    let cXhr = new XMLHttpRequest();
    cXhr.open('get', fPath);
    cXhr.send();
    cXhr.onload = function () {
        console.log('img response');
        // let r = cXhr.response;
        let h = cXhr.getAllResponseHeaders();
        // console.log('r', r);
        console.log('h', h);
    }

}

getCountry();