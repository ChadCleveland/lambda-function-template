// JavaScript file
// Description
// Author: Chad Cleveland | Lightbulb Web Services | Lightbulb.Services
// Copyright: © Lightbulb Web Services 2021. All Rights Reserved.

// Last modified: 02/25/2021 18:10:04

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
