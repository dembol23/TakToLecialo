const playButton = document.getElementById("play-button")
playButton.addEventListener("click", function () {
    var url = window.location.origin;
    url = url + "/game.html";
    window.location.replace = url;
})