function scrollFunction() {

    var banner = document.getElementById("banner");
    var cutoff = banner.height;

    var ele = document.getElementById("titleName");
    var top = window.pageYOffset;
    /*for testing*/
    // console.log(top);
    // console.log(cutoff);

    if (top > cutoff || top > cutoff) {
        ele.style.fontSize = "20px";
        ele.style.height = "60%";
        ele.style.textShadow = "text-shadow: 5px 5px  rgba(50,95,50,0.2);";
    } else {
        ele.style.fontSize = "200%";
        ele.style.height = "100%";
    }
}