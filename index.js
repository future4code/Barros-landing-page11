function mobileDropDown(){
    if(document.getElementById("menuMob").style.display == "flex"){
        document.querySelector(".open").style.display = "flex"
        document.querySelector(".close").style.display = "none"
        document.getElementById("menuMob").style.display = "none"
    } else{
        document.getElementById("menuMob").style.display = "flex"
        document.querySelector(".open").style.display = "none"
        document.querySelector(".close").style.display = "flex"
    }
}