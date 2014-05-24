'use strict';
(function(window) {
    var ua = window.navigator.userAgent.toLowerCase(),
        _DEBUG = false,
        _iOS = ua.match(/^mozilla/i) == "mozilla" && ua.indexOf('mobile') != -1 && (ua.indexOf('ipod') != -1 || ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1),
        _Android = ua.match(/^mozilla/i) == "mozilla" && ua.indexOf("linux") != -1 && ua.indexOf('android'),
        _WX = ua.indexOf('micromessenger') != -1,
        _Critical_Version = "5.3.0",
        _Current_Version = _WX ? ua.match(/micromessenger\/(\d{1}\.\d{1}\.\d{1})/i)[1] : '',
        // UA的格式只能是X.X.X不能是两个数字的版本，有待修复
        compareVersion = function(version) {
            if (typeof version == "string") {
                if (parseInt(version.charAt(0)) > parseInt(_Critical_Version.charAt(0)))
                    return true;
                else if (parseInt(version.charAt(0)) < parseInt(_Critical_Version.charAt(0)))
                    return false;
                else {
                    if (parseInt(version.charAt(2)) > parseInt(_Critical_Version.charAt(2)))
                        return true;
                    else if (parseInt(version.charAt(2)) < parseInt(_Critical_Version.charAt(2)))
                        return false;
                    else {
                        if (parseInt(version.charAt(4)) > parseInt(_Critical_Version.charAt(4)))
                            return true;
                        else if (parseInt(version.charAt(4)) < parseInt(_Critical_Version.charAt(4)))
                            return false;
                        else
                            return true;
                    }
                }
            }
        },
        _Version_Latter = _WX ? compareVersion(_Current_Version) : true;
    //document.writeln(_WX ? "WEIXIN" : "NOT_WEIXIN");
    //document.writeln(_Android ? "Android" : "NOT_Android");
    //document.writeln(_iOS ? "iOS" : "NOT_iOS");
    //document.writeln(_Current_Version);
    $(document).on('click.dl', 'a#download', function() {
        // 如果版本高低判断有错的话直接_WX判断是否是微信
        if (_WX && _Version_Latter || _DEBUG) {
            $('div.wx-warning-wrapper').show();
        }
    });
})(window);