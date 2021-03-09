// JavaScript file
// Description
// Author: Chad Cleveland | Lightbulb Web Services | Lightbulb.Services
// Copyright: © Lightbulb Web Services 2021.

// Last modified: 03/08/2021 23:16:11

const BrowserInfo = require('src/app.js');

exports.getCountryHandler = function (event) {
    return new Promise(async function (resolve, reject) {
        let c = await BrowserInfo.getCountry(event);
        let response = await BrowserInfo.prepareResponse(event, c);

        resolve(response);

    });
};
exports.getDeviceInfoHandler = function (event) {
    return new Promise(async function (resolve, reject) {
        let d = await BrowserInfo.getDeviceInfo(event);        
        let response = await BrowserInfo.prepareResponse(event, d);

        resolve(response);
    });
};

exports.getIPHandler = function (event) {
    return new Promise(async function (resolve, reject) {
        let ip = await BrowserInfo.getIP(event);
        let response = await BrowserInfo.prepareResponse(event, ip);

        resolve(response);
    });
};

exports.helloWorldHandler = function (event) {
    return new Promise(async function (resolve, reject) {
        let h = event['headers']['Host'];
        let helloStr = 'Hello from Lightbulb Web Services AWS Lambda function template\n\n  ' + h + '/ip = ' + BrowserInfo.getIP(event) + ' \n\n  ' + h + '/country = ' + BrowserInfo.getCountry(event) + ' \n\n  ' + h + '/device = ' + BrowserInfo.getDeviceInfo(event);
        let response = await BrowserInfo.prepareResponse(event, helloStr);

        resolve(response);
    })
}



