// JavaScript file
// Description
// Author: Chad Cleveland | Lightbulb Web Services | Lightbulb.Services
// Copyright: © Lightbulb Web Services 2021.

// Last modified: 03/09/2021 10:13:50

exports.getCountry = function(event) {
    let c = '';
    try {
        c = event['headers']['CloudFront-Viewer-Country'];
    } catch (err) {
        console.log(err);
        return err;
    }
    // console.log('GET COUNTRY:', c, event['headers']);
    return c;
}

exports.getIP = function (event) {
    let bodyStr = '';
    try {
        bodyStr = event["requestContext"]["identity"]["sourceIp"];
    } catch (err) {
        console.log(err);
        return err;
    }
        // console.log('GET IP: ', bodyStr, event['headers']);
        return bodyStr
}

exports.getDeviceInfo = function (event) {
    let bodyStr = '';
    try {
        let bodyObj = {}

        bodyObj.deviceAndroid = event['headers']['CloudFront-Is-Android-Viewer'];
        bodyObj.deviceIOS = event['headers']['CloudFront-Is-IOS-Viewer'];
        bodyObj.deviceMobile = event['headers']['CloudFront-Is-Mobile-Viewer'];
        bodyObj.deviceDesktop = event['headers']['CloudFront-Is-Desktop-Viewer'];
        bodyObj.deviceTablet = event['headers']['CloudFront-Is-Tablet-Viewer'];
        bodyObj.deviceSmartTV = event['headers']['CloudFront-Is-SmartTV-Viewer'];
        bodyObj.userAgent = event['headers']['User-Agent'];

        bodyStr = JSON.stringify(bodyObj);
        // console.log('DEVICE INFO : ', bodyStr, event['headers']);
    } catch (err) {
        console.log(err);
        return err;
    }
    return bodyStr
}

exports.prepareResponse = function(event, bStr) {
    // console.log('B STR:', bStr);
    return new Promise(function (resolve, reject) {
        let r = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                //'input': event,
                //'context': context,
            },
            body: bStr,
        };
        console.log('RESOLVE:', r, 'EVENT:', event);
        resolve(r);
    });
}