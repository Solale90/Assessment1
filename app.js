var preview = document.querySelector("#preview"),
    sticker = document.querySelector("#sticker"),
    stickerDisplay = document.querySelector("#stickerDisplay"),
    currentStickerImg;

var currentSticker = 1,
    currentThumb = 1,
    moveChange = 5,
    currentCursorX = 0,
    currentCursorY = 0;

document.onkeydown = function checkKey(event) {
    event = event || window.event;

    // A
    if (event.keyCode == '65') {
        currentCursorX = currentCursorX - moveChange;
        currentStickerImg.style.left = currentCursorX + "px";
    } // W
    else if (event.keyCode == '87') {
        currentCursorY = currentCursorY - moveChange;
        currentStickerImg.style.top = currentCursorY + "px";
    } // S
    else if (event.keyCode == '83') {
        currentCursorY = currentCursorY + moveChange;
        currentStickerImg.style.top = currentCursorY + "px";
    } // D
    else if (event.keyCode == '68') {
        currentCursorX = currentCursorX + moveChange;
        currentStickerImg.style.left = currentCursorX + "px";
    }
}

function bg1() {
    preview.style.flex = "3";
}

function preview1(event) {
    preview.style.flex = "50";

    if (stickerDisplay.style.right === "-100px") {
        currentCursorX = event.clientX,
        currentCursorY = event.clientY;

        currentStickerImg = document.createElement('img');
        currentStickerImg.className = "newStickers";
        currentStickerImg.src = sticker.src;
        currentStickerImg.style.left = currentCursorX + "px",
        currentStickerImg.style.top = currentCursorY + "px";
        preview.appendChild(currentStickerImg);
    }
}

function onThumbImgClick(index) {
    var thumb = document.querySelector("#thumb" + index),
        style = thumb.currentStyle || window.getComputedStyle(thumb, false);
    preview.style.backgroundImage = style.backgroundImage;
}

function onOpen(event) {
    var stickerDisplayRight = stickerDisplay.style.right;
    if (stickerDisplayRight === "0px") {
        stickerDisplay.style.right = "-100px";
    } else {
        stickerDisplay.style.right = "0px";
    }
    event.stopPropagation();
}

function change(event) {
    currentSticker = currentSticker + 1;
    if (currentSticker === 6) {
        currentSticker = 1;
    }
    sticker.src = "imgs/st" + currentSticker + ".png";
    event.stopPropagation();
}

function onNextThumb() {
    if (currentThumb === 9) {
        alert('Already at the last image');
        return;
    }

    currentThumb = currentThumb + 1;

    for (let i = 1; i <= 4; i++) {
        var thumb = document.querySelector("#thumb" + i);
        var imgIndex = currentThumb + i - 1;
        thumb.style.backgroundImage = "url(imgs/bg" + imgIndex + ".jpg)";
    }
}

function onPrevThumb() {
    if (currentThumb == 1) {
        alert('Already at the first image');
        return;
    }

    currentThumb = currentThumb - 1;

    for (let i = 1; i <= 4; i++) {
        var thumb = document.querySelector("#thumb" + i);
        var imgIndex = currentThumb + i - 1;
        thumb.style.backgroundImage = "url(imgs/bg" + imgIndex + ".jpg)";
    }
}