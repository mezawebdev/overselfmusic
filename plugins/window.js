import $ from "jquery";

window.scrollLock = function() {
    $("body, html").css("overflow-y", "hidden");
}

window.scrollUnlock = function() {
    $("body, html").css("overflow-y", "visible");
}

window.utils = {
    isSmall() {
        if (window.innerWidth > 767) {
            return false;
        } else {
            return true;
        }
    }
}