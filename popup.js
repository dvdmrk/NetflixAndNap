$(function () {
    $("#NapMode").click(function () {
        $("#NapMode").toggleClass("nap-mode-on");
        if ($("#NapMode").hasClass("nap-mode-on"))
            startNapMode(1000);
    });

    function startNapMode(op) {
        if (op > 0)
            setTimeout(progressNapMode, 1000, op);
    }
    function progressNapMode(op) {
        chrome.tabs.executeScript({code: 'document.body.style.opacity=' + op/1000 });
        op -= 1;
        console.log(op);
        startNapMode(op)
    }
});

