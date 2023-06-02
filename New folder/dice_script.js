// document.querySelector('h1').textContent = "🚩Player one is the Winner"
function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.querySelector('h1').textContent = "🚩Player one is the Winner"
    document.location.reload();
    document.querySelector('h1').textContent = "🚩Player one is the Winner"
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        reloadP();
    }
}

function random_dice(){
    var player1 = Math.floor(Math.random()*6) + 1;
    var player2 = Math.floor(Math.random()*6) + 1;
    console.log(player1 + " " + player2 + " ");
    var img1_path = "./images/dice" + player1 + ".png";
    var img2_path = "./images/dice" + player2 + ".png";
    console.log(img1_path + " " + img2_path + " ");
    document.querySelector('.img1').setAttribute("src", img1_path);
    document.querySelector('.img2').setAttribute("src", img2_path);
    
    if (player1 === player2){
        document.querySelector('h1').textContent = "Draw!";
        
    }else if (player1 > player2){
        document.querySelector('h1').textContent = "🚩 Player 1 Wins!";

    }else {
        document.querySelector('h1').textContent = "Player 2 Wins! 🚩";
    }

}

var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;
console.log(player1 + " " + player2 + " ");
var img1_path = "./images/dice" + player1 + ".png";
var img2_path = "./images/dice" + player2 + ".png";
console.log(img1_path + " " + img2_path + " ");
document.querySelector('.img1').setAttribute("src", img1_path);
document.querySelector('.img2').setAttribute("src", img2_path);

if (player1 === player2){
    document.querySelector('h1').textContent = "Draw!";
    
}else if (player1 > player2){
    document.querySelector('h1').textContent = "🚩 Player 1 Wins!";

}else {
    document.querySelector('h1').textContent = "Player 2 Wins! 🚩";
}