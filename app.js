//jshint esversion:6

/*const express = require("express");

const app = express();

app.listen(3000, function(){
    console.log("Server is running on port 3000 tadaaaaaaa")
});*/

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

//console.log(loveScore);

if (loveScore > 95){
    console.log("Your love score is "+ loveScore + "%" + " Wow, this is true love. Chances are it will last forever.");
} 

if (loveScore > 80 && loveScore <= 95) {
    console.log("Your love score is "+ loveScore + "%" + " Wow, this is a real love connection.");
}

if (loveScore > 60 && loveScore <= 80) {
    console.log("Your love score is "+ loveScore + "%" + " This is the time to get to know eachother better. True love is not far away.");
}

if (loveScore > 30 && loveScore <= 60) {
    console.log("Your love score is "+ loveScore + "%" + " This really depends on you. If both of you work hard you can make it.");
}

if (loveScore > 10 && loveScore <= 30) {
    console.log("Your love score is "+ loveScore + "%" + " Ehhh... theres plenty of fish in the sea?");
}


if (loveScore > 5 && loveScore <= 10){
    console.log("Your love score is "+ loveScore + "%" + " NO, just no. Move on now please");
}

else {
    console.log("Your love score is "+ loveScore + "%" + " ...i have no words");
}
