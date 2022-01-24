var damage = 0;

function elemaker (name, val){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    document.body.querySelector(".main").appendChild(ele);
    increase(val);
}

function increase (val){
    damage = damage + val;
    var num = document.createElement("div");
    num.innerHTML="Total Damage: " + damage;
    document.body.querySelector(".damage").appendChild(num);
}

document.body.querySelector(".cap").addEventListener("click",function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    elemaker("I can do this all day!", 3);
});

document.body.querySelector(".ironman").addEventListener("click",function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    elemaker("I don't love you 3000!", 4);
});

document.body.querySelector(".widow").addEventListener("click",function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    elemaker("Steve, You Know What’s About To Happen. Do You Really Want To Punch Your Way Out Of This?", 2);
});

document.body.querySelector(".nexis").addEventListener("click",function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    elemaker("You took every thing from me!", 5);
});

document.body.querySelector(".newgame").addEventListener("click",function(){
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="";
    damage = 0;
});