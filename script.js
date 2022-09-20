console.log("page loaded...");

function login(element) {
    if(element.innerText == "Login")  {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function sub(element) {
    if(element.innerText == "Subscribe")  {
        element.innerText = "Subscribed";
    }
    else {
        element.innerText = "Subscribe";
    }
}

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}