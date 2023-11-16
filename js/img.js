var click = false;
var flag = true;

    let isMobile = false;
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        var c = document.getElementById("slide1");
            c.style.display = "none";
            var s = document.getElementById("snow");
            s.style.display = "none";
            var d = document.getElementById("slide2");
            d.style.display = "block";
            d.style.top = "0";
            flag = false;
    }



function rightSlide() {
    if (click && flag == true) {
        setTimeout(() => {
            var c = document.getElementById("slide1");
            c.style.top = "-100%";
            var s = document.getElementById("snow");
            s.style.opacity = "0";
            var d = document.getElementById("slide2");
            d.style.display = "block";
            setTimeout(() => {
            d.style.top = "0";}, 50);
            flag = false;
        }, 200);
    }else{
        click=false
    }
}

var right = document.getElementById('slide1');

right.onclick=()=>{
    click = true;
    rightSlide();
}
