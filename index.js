var i = 0;
let greeting = ["Hello!", "Hola!", "Ola!", "Bonjour!", "Kon'nichiwa!", "Ni hao" ];

var seconds = new Date().getTime()+(1000*2);

var x = setInterval(function() {

var now = new Date().getTime();

var dif = seconds-now;
console.log(dif);

if(dif <= 0){
console.log(greeting);
seconds = new Date().getTime()+(1000*2);
if(i<greeting.length-1)
i++;
else
i=0;
}

// MAIN FUNCTION
document.getElementById("star").onclick = function(event){
    console.log("pressed")
    clearInterval(x);
    document.getElementById("greet").style.display = "none";
    document.getElementById("star").style.visibility = "hidden";
    document.getElementById("a").style.visibility = "hidden";
    document.getElementById("d").style.visibility = "hidden";
    document.getElementById("pa").style.display = "contents";
    document.getElementById("buttons").style.display = "contents";
    document.getElementById("inst").style.display = "block";

    document.getElementById("red").onclick = function(event){
        hideelems();

        console.log("red");

        document.getElementById("bloc").style.display = "block";
        document.getElementById("player").src = "redanim.gif";

        findpos();
    }

    document.getElementById("green").onclick = function(event){
        hideelems();

        console.log("green");

        document.getElementById("bloc").style.display = "block";
        document.getElementById("player").src = "greenanim.gif";

        findpos();
    }
    document.getElementById("blue").onclick = function(event){
        hideelems();

        console.log("blue");
        document.getElementById("bloc").style.display = "block";
        document.getElementById("player").src = "blueanim.gif";

        findpos();
    }


}
document.getElementById("greet").innerHTML = greeting[i];
}, 1000);

//FINDING POSITION
function findpos(){
    var x = setInterval(function() {
        var playerposition = document.getElementById("bloc").getBoundingClientRect();
        var navposition = document.getElementById("navbar").getBoundingClientRect();
        var kingmobpos = document.getElementById("kingmoby").getBoundingClientRect();
        var bb = document.getElementById("bb").getBoundingClientRect();
        var por = document.getElementById("poro").getBoundingClientRect();
        var mvchar = document.getElementById("char").getBoundingClientRect();

        var Mobydistance = Math.sqrt(Math.pow(playerposition.x-(kingmobpos.x+100),2)+ Math.pow(playerposition.y-(kingmobpos.y), 2));
        var bbdist =  Math.sqrt(Math.pow(playerposition.x-(bb.x+100),2)+ Math.pow(playerposition.y-(bb.y), 2));
        var porodist =  Math.sqrt(Math.pow(playerposition.x-(por.x+100),2)+ Math.pow(playerposition.y-(por.y), 2));
        var mvdist =  Math.sqrt(Math.pow(playerposition.x-(mvchar.x+100),2)+ Math.pow(playerposition.y-(mvchar.y), 2));

        console.log(mvdist);

        if(Mobydistance <= 40){
            document.getElementById("text1").style.visibility = "visible";
        }
        else{
            document.getElementById("text1").style.visibility = "hidden";
        }
        if(bbdist <= 40){
            document.getElementById("text2").style.visibility = "visible";
        }
        else{
            document.getElementById("text2").style.visibility = "hidden";
        }
        if(porodist <= 40){
            document.getElementById("text3").style.visibility = "visible";
        }
        else{
            document.getElementById("text3").style.visibility = "hidden";
        }
        if(mvdist <= 40){
            document.getElementById("text4").style.visibility = "visible";
        }
        else{
            document.getElementById("text4").style.visibility = "hidden";
        }

        document.getElementById("text1").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner").style.display= "block";
            document.getElementById("abme").style.display= "block";
        }

        document.getElementById("text2").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner2").style.display= "block";
            document.getElementById("coding").style.display= "block";
        }

        document.getElementById("text3").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner3").style.display = "block";
            document.getElementById("leagueoflegends").style.display = "block";
        }
        
        document.getElementById("text4").onclick = function(event){
            document.getElementById("block1").style.visibility = "visible";
            
        }

        document.getElementById("navbutton").onclick = function(event){
            document.getElementById("nav").style.display = "block";
            document.getElementById("navbutton").onclick = function(event){
                document.getElementById("nav").style.display = "none";
            }
        }
        document.getElementById("a1").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner").style.display= "block";
            document.getElementById("abme").style.display= "block";
            document.getElementById("coding").style.display= "none";
            document.getElementById("inner2").style.display= "none";
            document.getElementById("inner3").style.display = "none";
            document.getElementById("leagueoflegends").style.display = "none";
            document.getElementById("block1").style.visibility = "hidden";
        }

        document.getElementById("a2").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner2").style.display= "block";
            document.getElementById("coding").style.display= "block";
            document.getElementById("abme").style.display= "none";
            document.getElementById("inner").style.display= "none";
            document.getElementById("inner3").style.display = "none";
            document.getElementById("leagueoflegends").style.display = "none";
            document.getElementById("block1").style.visibility = "hidden";
        }

        document.getElementById("a3").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "visible";
            document.getElementById("contentdiv2").style.visibility = "visible";
            document.getElementById("inner3").style.display= "block";
            document.getElementById("leagueoflegends").style.display= "block";
            document.getElementById("abme").style.display= "none";
            document.getElementById("inner").style.display= "none";
            document.getElementById("coding").style.display= "none";
            document.getElementById("inner2").style.display= "none";
            document.getElementById("block1").style.visibility = "hidden";
        }
        document.getElementById("a4").onclick = function(event){
            document.getElementById("contentdiv").style.visibility = "hidden";
            document.getElementById("contentdiv2").style.visibility = "hidden";
            document.getElementById("block1").style.visibility = "visible";
            document.getElementById("abme").style.display= "none";
            document.getElementById("inner").style.display= "none";
            document.getElementById("coding").style.display= "none";
            document.getElementById("inner2").style.display= "none";
            document.getElementById("inner3").style.display = "none";
            document.getElementById("leagueoflegends").style.display = "none";
        }


        //console.log(navposition);
        //console.log(playerposition.x);
        //console.log(kingmobpos.x);
        //console.log(playerposition.y-(navposition.y+100));

        let diffinpos = playerposition.y-(navposition.y+110);

        
        if(diffinpos <= 0){
            document.getElementById("bloc").style.top = (parseInt(getComputedStyle(document.getElementById("bloc")).top)+20)+"px";
        }

        },1000);
}

//hide and show elements
function hideelems(){
    document.getElementById("buttons").style.display = "none";
    document.getElementById("pa").style.display = "none";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navbutton").style.display = "inline";
    //document.getElementById("holder").style.display = "contents";
    document.getElementById("outer").style.display = "contents";
    document.getElementById("bottommarg").style.display = "block";
    document.getElementById("inst").style.display = "none";
}


//
function move(event) {
    var k = event.keyCode,
        chrId = document.getElementById("bloc"),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 87) {
                    y-=13;
                    document.getElementById("contentdiv").style.visibility = "hidden";
                    document.getElementById("contentdiv2").style.visibility = "hidden";
                    document.getElementById("abme").style.display= "none";
                    document.getElementById("inner").style.display= "none";
                    document.getElementById("coding").style.display= "none";
                    document.getElementById("inner2").style.display= "none";
                    document.getElementById("inner3").style.display = "none";
                    document.getElementById("leagueoflegends").style.display = "none";
                    document.getElementById("block1").style.visibility = "hidden";
            
                
                } else if (k == 83) {
                    y+=13;
                    document.getElementById("contentdiv").style.visibility = "hidden";
                    document.getElementById("contentdiv2").style.visibility = "hidden";
                    document.getElementById("abme").style.display= "none";
                    document.getElementById("inner").style.display= "none";
                    document.getElementById("coding").style.display= "none";
                    document.getElementById("inner2").style.display= "none";
                    document.getElementById("inner3").style.display = "none";
                    document.getElementById("leagueoflegends").style.display = "none";
                    document.getElementById("block1").style.visibility = "hidden";
       
                }
    
                return y;
            },
    
            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37|| k==65) {
                    x-=13;
                    document.getElementById("bloc").style.transform = "scaleX(1)";
                    document.getElementById("contentdiv").style.visibility = "hidden";
                    document.getElementById("contentdiv2").style.visibility = "hidden"; 
                    document.getElementById("abme").style.display= "none";
                    document.getElementById("inner").style.display= "none";
                    document.getElementById("coding").style.display= "none";
                    document.getElementById("inner2").style.display= "none";
                    document.getElementById("inner3").style.display = "none";
                    document.getElementById("leagueoflegends").style.display = "none";
                    document.getElementById("block1").style.visibility = "hidden";

                } else if (k == 39|| k==68) {
                    x+=13;
                    document.getElementById("bloc").style.transform = "scaleX(-1)";
                    document.getElementById("contentdiv").style.visibility = "hidden";
                    document.getElementById("contentdiv2").style.visibility = "hidden";
                    document.getElementById("abme").style.display= "none";
                    document.getElementById("inner").style.display= "none";
                    document.getElementById("coding").style.display= "none";
                    document.getElementById("inner2").style.display= "none";
                    document.getElementById("inner3").style.display = "none";
                    document.getElementById("leagueoflegends").style.display = "none";
                    document.getElementById("block1").style.visibility = "hidden";
                    
                }
    
                return x;
            }
        };
    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
    }

    document.addEventListener('keydown', move);