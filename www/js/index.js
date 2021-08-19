document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    function success(result) {
        alert(result);
        }
        setTimeout(() => {
        console.log('Me ejecute chingadamadre!!');
           Cordova.exec(success, null, "CordovaCustomPlugin", "coolMethod", [222, 333])
        }, 10000);
}