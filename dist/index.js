(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setCookie = function (name, value, days) {
        if (days === void 0) { days = 1; }
        var day = new Date();
        day.setDate(day.getDate() + days);
        var expires = day.toUTCString();
        document.cookie = name + "=" + value + ";expires=" + expires + ";";
        return true;
    };
    exports.getCookie = function (name) {
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        var match = document.cookie.match(reg);
        if (match)
            return decodeURIComponent(match[2]);
        return null;
    };
    exports.removeCookie = function (name) {
        return exports.setCookie(name, null, -1);
    };
});
