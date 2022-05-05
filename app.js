//jshint esversion:6

/*const express = require("express");

const app = express();

app.listen(3000, function(){
    console.log("Server is running on port 3000 tadaaaaaaa")
});*/

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

$("p").text(loveScore)

console.log(loveScore);



//score and responses

if (loveScore > 95){
    $("p").text("Your love score is "+ loveScore + "%" + " Wow, this is true love. Chances are it will last forever.");
} 

if (loveScore > 80 && loveScore <= 95) {
    $("p").text("Your love score is "+ loveScore + "%" + " Wow, this is a real love connection.");
}

if (loveScore > 70 && loveScore <= 80) {
    $("p").text("Your love score is "+ loveScore + "%" + " This is a very good score. Maybe even true love?");
}

if (loveScore > 60 && loveScore <= 70) {
    $("p").text("Your love score is "+ loveScore + "%" + " This is the time to get to know eachother better. True love is not far away.");
}

if (loveScore > 50 && loveScore <= 60) {
    $("p").text("Your love score is "+ loveScore + "%" + " This really depends on you. If both of you work hard you can make it.");
}

if (loveScore > 40 && loveScore <= 50) {
    $("p").text("Your love score is "+ loveScore + "%" + " Theres something missing here. Don't be discuraged, all hope is not lost.");
}

if (loveScore > 30 && loveScore <= 40) {
    $("p").text("Your love score is "+ loveScore + "%" + " Well, you'll need to make a choice. Either all in or all out." );
}

if (loveScore > 20 && loveScore <= 30) {
    $("p").text("Your love score is "+ loveScore + "%" + " Ehhh... theres plenty of fish in the sea?");
}

if (loveScore > 10 && loveScore <= 20) {
    $("p").text("Your love score is "+ loveScore + "%" + " You know, you can never have to many friends.");
}

if (loveScore > 5 && loveScore <= 10){
    $("p").text("Your love score is "+ loveScore + "%" + " NO, just no. Move on now please.");
}

if (loveScore < 5) {
    $("p").text("Your love score is "+ loveScore + "%" + " ...i- i have no words.");
}


