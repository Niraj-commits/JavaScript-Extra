
function tred(){
    var redCard = document.getElementsByClassName("red");
    redCard[0].style.backgroundColor = "Red";
}

function tgreen(){
    var greenCard = document.getElementsByClassName("green");
    greenCard[0].style.backgroundColor = "green";
}

function tblue(){
    var blueCard = document.getElementsByClassName("blue");
    blueCard[0].style.backgroundColor = "blue";
}

function treset(){
    var resetAll = document.getElementsByClassName("btn");
    for (i=0;i<resetAll.length;i++){
    resetAll[i].style.backgroundColor = "white"; 
}
}