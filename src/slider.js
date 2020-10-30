export { styleText };
export { bannerLoop2 };

// import {bannerLoop} from "./banner1.js"
// var bannerStatus =  1;
// var bannerTimer = 1000;
// var activeBanner = setInterval(function(){
//     bannerLoop()
// }, bannerTimer);

// document.getElementById("main-banner").onmouseenter = function(){
//     clearInterval(activeBanner);
// };
// document.getElementById("main-banner").onmouseleave = function(){
//     activeBanner = setInterval(function(){
//         bannerLoop()
//     }, bannerTimer);
// };
// document.getElementById("imgbtn-next").addEventListener("click",function(){
//     bannerLoop();
// })

// document.getElementById("imgbtn-prev").addEventListener("click",function(){
//     if (bannerStatus ===1){
//         bannerStatus=2
//     }
//     else if (bannerStatus ===2){
//         bannerStatus=3
//     }
//     else if (bannerStatus ===3){
//         bannerStatus=1
//     }
//     bannerLoop2();
// })

//  var bannerLoop = function() {
//     if (bannerStatus === 1){
//         document.getElementById("imgban-2").style.opacity= "0"
//         setTimeout(function(){
//             document.getElementById("imgban-1").style.right = "0px";
//             document.getElementById("imgban-1").style.zIndex = "1000"
//             document.getElementById("imgban-2").style.right = "-700px";
//             document.getElementById("imgban-2").style.zIndex = "1500"
//             document.getElementById("imgban-3").style.right = "700px";
//             document.getElementById("imgban-3").style.zIndex = "500"

//         },500)
//         setTimeout(function(){
//             document.getElementById("imgban-2").style.opacity = "1"
//         },1000 )
//         bannerStatus = 2;
//     }
//     else if (bannerStatus === 2){
//         document.getElementById("imgban-3").style.opacity= "0"
//         setTimeout(function(){
//             document.getElementById("imgban-2").style.right = "0px";
//             document.getElementById("imgban-2").style.zIndex = "1000"
//             document.getElementById("imgban-3").style.right = "-700px";
//             document.getElementById("imgban-3").style.zIndex = "1500"
//             document.getElementById("imgban-1").style.right = "700px";
//             document.getElementById("imgban-1").style.zIndex = "500"

//         },500)
//         setTimeout(function(){
//             document.getElementById("imgban-3").style.opacity = "1"
//         },1000 )
//         bannerStatus = 3;
//     }
//     else if (bannerStatus === 3){
//         document.getElementById("imgban-1").style.opacity= "0"
//         setTimeout(function(){
//             document.getElementById("imgban-3").style.right = "0px";
//             document.getElementById("imgban-3").style.zIndex = "1000"
//             document.getElementById("imgban-1").style.right = "-700px";
//             document.getElementById("imgban-1").style.zIndex = "1500"
//             document.getElementById("imgban-2").style.right = "700px";
//             document.getElementById("imgban-2").style.zIndex = "500"

//         },500)
//         setTimeout(function(){
//             document.getElementById("imgban-1").style.opacity = "1"
//         },1000 )
//         bannerStatus = 1;
//     }
// };


  var bannerLoop2 = function() {
    if (bannerStatus === 1){
        document.getElementById("imgban-3").style.opacity= "0"
        setTimeout(function(){
            document.getElementById("imgban-1").style.right = "0px";
            document.getElementById("imgban-1").style.zIndex = "1000"
            document.getElementById("imgban-2").style.right = "-700px";
            document.getElementById("imgban-2").style.zIndex = "1500"
            document.getElementById("imgban-3").style.right = "700px";
            document.getElementById("imgban-3").style.zIndex = "500"

        },500)
        setTimeout(function(){
            document.getElementById("imgban-3").style.opacity = "1"
        },1000 )
        bannerStatus = 2;
    }
    else if (bannerStatus === 2){
        document.getElementById("imgban-1").style.opacity= "0"
        setTimeout(function(){
            document.getElementById("imgban-2").style.right = "0px";
            document.getElementById("imgban-2").style.zIndex = "1000"
            document.getElementById("imgban-3").style.right = "-700px";
            document.getElementById("imgban-3").style.zIndex = "1500"
            document.getElementById("imgban-1").style.right = "700px";
            document.getElementById("imgban-1").style.zIndex = "500"

        },500)
        setTimeout(function(){
            document.getElementById("imgban-1").style.opacity = "1"
        },1000 )
        bannerStatus = 3;
    }
    else if (bannerStatus === 3){
        document.getElementById("imgban-2").style.opacity= "0"
        setTimeout(function(){
            document.getElementById("imgban-3").style.right = "0px";
            document.getElementById("imgban-3").style.zIndex = "1000"
            document.getElementById("imgban-1").style.right = "-700px";
            document.getElementById("imgban-1").style.zIndex = "1500"
            document.getElementById("imgban-2").style.right = "700px";
            document.getElementById("imgban-1").style.zIndex = "500"

        },500)
        setTimeout(function(){
            document.getElementById("imgban-2").style.opacity = "1"
        },1000 )
        bannerStatus = 1;
    }
};


var styleText = function(){
    let getH2Tag = document.getElementsByTagName("h2");
    let getPaTag = document.getElementsByTagName("p");
    let getbox3 = document.getElementById("imgban-box-3");
    let getbox2 = document.getElementById("imgban-box-2");
    let getbox1 = document.getElementById("imgban-box-1");

for(let i = 0; i < getH2Tag.length; i++){
    getH2Tag[i].style.fontFamily = "arial";
    getH2Tag[i].style.fontSize = "40px";
    getH2Tag[i].style.opacity = "0.8";
    getH2Tag[i].style.color = "#fff";
}
for(let i = 0; i < getPaTag.length; i++){
    getPaTag[i].style.fontFamily ="arial";
    getPaTag[i].style.fontSize ="16px";
    getPaTag[i].style.color ="#fff";
    getPaTag[i].style.paddingTop ="6px";

}

getbox3.style.paddingTop ="100px";
getbox3.style.paddingLeft ="50px";

getbox2.style.paddingTop ="220px";
getbox2.style.paddingLeft ="100px";
getbox2.style.float ="right";
getbox2.style.textAlign ="right";

getbox1.style.paddingTop ="70px";
getbox1.style.paddingLeft ="100px";
};

