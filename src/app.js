 export { bannerLoop } 

 var bannerStatus = 1;
   var bannerLoop = function () {
    if (bannerStatus === 1) {
        document.getElementById("imgban-2").style.opacity = "0"
        setTimeout(function () {
            document.getElementById("imgban-1").style.right = "0px";
            document.getElementById("imgban-1").style.zIndex = "1000"
            document.getElementById("imgban-2").style.right = "-700px";
            document.getElementById("imgban-2").style.zIndex = "1500"
            document.getElementById("imgban-3").style.right = "700px";
            document.getElementById("imgban-3").style.zIndex = "500"

        }, 500)
        setTimeout(function () {
            document.getElementById("imgban-2").style.opacity = "1"
        }, 1000)
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        document.getElementById("imgban-3").style.opacity = "0"
        setTimeout(function () {
            document.getElementById("imgban-2").style.right = "0px";
            document.getElementById("imgban-2").style.zIndex = "1000"
            document.getElementById("imgban-3").style.right = "-700px";
            document.getElementById("imgban-3").style.zIndex = "1500"
            document.getElementById("imgban-1").style.right = "700px";
            document.getElementById("imgban-1").style.zIndex = "500"

        }, 500)
        setTimeout(function () {
            document.getElementById("imgban-3").style.opacity = "1"
        }, 1000)
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        document.getElementById("imgban-1").style.opacity = "0"
        setTimeout(function () {
            document.getElementById("imgban-3").style.right = "0px";
            document.getElementById("imgban-3").style.zIndex = "1000"
            document.getElementById("imgban-1").style.right = "-700px";
            document.getElementById("imgban-1").style.zIndex = "1500"
            document.getElementById("imgban-2").style.right = "700px";
            document.getElementById("imgban-2").style.zIndex = "500"

        }, 500)
        setTimeout(function () {
            document.getElementById("imgban-1").style.opacity = "1"
        }, 1000)
        bannerStatus = 1;
    }
};