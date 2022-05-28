var startbtn = document.getElementById("start");
var player = document.getElementById("player");
var title = document.getElementById("title");
var parklot = document.getElementById("parkinglot");
var eholder = document.getElementById("eholder");
var eq = document.getElementById("eq");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var onep = document.getElementById("onep");
var twop = document.getElementById("twop");
var threep = document.getElementById("threep");
var nextlevel = document.getElementById("nextlevel");
var Gameover = document.getElementById("Gameover");
var gameover = document.getElementById("gameover");




function startgame(){
    var rannumone = Math.floor((Math.random() * 10) + 1);  
    var rannumtwo = Math.floor((Math.random() * 10) + 1); 

    twop.innerText = rannumone * rannumtwo;
    onep.innerText = rannumone * 5
    threep.innerText = rannumtwo * 5

    eq.innerText = rannumone + "*" + rannumtwo;

    gameover.innerText = "Game Over" + " The Answer Was " + rannumone * rannumtwo
    


    one.addEventListener("click", () => {
        console.log(rannumone * rannumtwo)

        Gameover.style.visibility = "visible";
        Gameover.style.animation = "disapear 5s";
        setTimeout(() => {
            location.reload();
        }, 1500);
        
    });
    two.addEventListener("click", () => {
        console.log("b");

        
        nextlevel.style.visibility = "visible";
        nextlevel.style.animation = "disapear 5s";
        setTimeout(() => {
            location.reload();
        }, 1500);
        
        
        
        
    });
    three.addEventListener("click", () => {
        console.log("c");

        Gameover.style.visibility = "visible";
        Gameover.style.animation = "disapear 5s";
        setTimeout(() => {
            location.reload();
        }, 1500);
    });
}




startbtn.addEventListener("click", () => {
    title.style.visibility = "hidden";
    startbtn.style.visibility = "hidden";

    eholder.style.visibility = "visible";
    parklot.style.visibility = "visible";

    startgame()
    
});

