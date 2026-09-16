window.getWindowTitle = function () {
    return document.title;
};

window.setWindowTitle = function (title) {
    document.title = title;
};

window.scrollToBottom = function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};