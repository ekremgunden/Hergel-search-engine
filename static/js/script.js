var set1 = document.getElementById("settings1");
var set2 = document.getElementById("settings2");
var popop = document.getElementById("popup");

function sett() {
    popop.style.display="block";
    set1.style.display="none"; 
    set2.style.display="block";
}

function sett1() {
    popop.style.display="none";
    set1.style.display="block";
    set2.style.display="none";  
}

function weat() {
    document.getElementById("wea-set").style.display="block";
}

function weaSetOff() {
    document.getElementById("wea-set").style.display="none";
}
