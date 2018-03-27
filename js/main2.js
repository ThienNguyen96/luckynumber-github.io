window.onload = function(){
    var numberTurn = document.getElementById("number");
    var main = document.getElementById("main");

    var numberOfturns = 3;
    myHistory.style.display="none";

    container__btnQuay.onclick = ()=>{
        if(numberOfturns!=0){
            numberOfturns--;
            myHistory.style.display="block";
        }
        if(numberOfturns==0){
            container__btnReset.style.display ="block";
            container__btnQuay.style.display="none";
        }
        numberTurn.innerHTML = numberOfturns;
        randomNumber();
    };

    container__btnReset.onclick = ()=>{
        window.location.reload(true);
    }

    //process box modal
    var modal = this.document.getElementById("myModal");
    var span = this.document.getElementsByClassName("close")[0];

    span.onclick = ()=>{
        modal.style.display="none";
    }
    //when the user clicks anywhere outside of the modal. close it
    window.onclick = (event)=>{
        if(event.target==modal){
            modal.style.display="none";
        }
    }

    btnPlay.onclick = ()=>{
        main.style.display = 'none';
    }

    randomMarquee();
}

/*end window.onload*/

function music(){
    var audio = document.getElementById("myAudio");
    audio.muted=false;
    audio.autoplay = true;
    audio.load();
}

function radColor(){
    r = Math.floor(Math.random()*180);
    g = Math.floor(Math.random()*180);
    b = Math.floor(Math.random()*180);
}

function randomNumber(){
   //declare variable random number
    var num1 = Math.floor(Math.random()*3);
    var num2 = Math.floor(Math.random()*3);
    var num3 = Math.floor(Math.random()*3);

    var modal = this.document.getElementById("myModal");
    var modalResult = document.getElementsByClassName("modal-body-result")[0];
    var li1 = document.getElementsByClassName("container__li")[0];
    var li2 = document.getElementsByClassName("container__li")[1];
    var li3 = document.getElementsByClassName("container__li")[2];
    var btnReset = document.getElementById("container__btnReset");
    var btnQuay = document.getElementById("container__btnQuay");

    //declare variables 
    var i = x =0;
    var j =2;
    var rs =[];

    var numA = setInterval(function(){
        li1.nnerHTML = i;
       
        if(i==3){
            clearInterval(numA);
        }

        if(i==num1){
            clearInterval(numA);
            li1.innerHTML = i;
            rs.push(i);
        }
        i++;
        radColor();
        li1.style.color = "rgb("+r+","+g+","+b+")";
    },100);

    var numB = setInterval(function(){
        li2.innerHTML = j;
        if(j==-1){
            clearInterval(numB);
        }
        if(j==num2){
            clearInterval(numB);
            li2.innerHTML = j;
            rs.push(j);
        }
        j--;
        radColor();
        li2.style.color = "rgb("+r+","+g+","+b+")";
    },200);

    var numC = setInterval(function(){
        li3.innerHTML = x;
       
        if(x==3){
            clearInterval(numC);
        }

        if(x==num3){
            clearInterval(numC);
            li3.innerHTML = x;
            rs.push(x);
        }
        x++;
        radColor();
        li3.style.color = "rgb("+r+","+g+","+b+")";
    },250);

    //create  history
    
    var li = document.createElement("li");

    var countList =  setInterval(()=>{
        for(let count =0;count<3;count++ ){
            let addLi = document.createElement("span");
            addLi.innerHTML = rs[count];
            li.appendChild(addLi);
            document.querySelector("ol").appendChild(li);
            addLi.className ="history-list-result";
            if(count==2){
                clearInterval(countList);
            }
        }
    },1000);

    //check result
    var checkEqual = setInterval(function(){
        let arr=0;
        while(arr<rs.length){
            if(rs[0]==rs[1]){
                if(rs[1]==rs[2]){
                    modalResult.innerHTML = rs[0];
                    btnQuay.style.display ="none";
                    modal.style.display="block";
                    container__btnReset.style.display ="block";
                    music();
                    clearInterval(checkEqual);
                    break;
                }
            }
            arr++;
        }
    },600);
}

//function random number on screens
function randomMarquee(){
    var num1 = document.getElementsByClassName("rdNum1")[0];
    var num2 = document.getElementsByClassName("rdNum1")[1];
    var num3 = document.getElementsByClassName("rdNum1")[2];
    var num4 = document.getElementsByClassName("rdNum1")[3];

    //function random color
    function radColor(){
        r = Math.floor(Math.random()*180);
        g = Math.floor(Math.random()*180);
        b = Math.floor(Math.random()*180);
        s = Math.floor(Math.random()*100);
    }
    

    setInterval(function(){

        setInterval(function(){
            radColor();
            num1.style.color="rgb("+r+","+g+","+b+")";
            num1.style.fontSize = s+"px";
        },500);
        setInterval(function(){
            radColor();
            num2.style.color="rgb("+r+","+g+","+b+")";
            num2.style.fontSize = s+"px";
        },200);
        setInterval(function(){
            radColor();
            num3.style.color="rgb("+r+","+g+","+b+")";
            num3.style.fontSize = s+"px";
        },400);
        setInterval(function(){
            radColor();
            num4.style.color="rgb("+r+","+g+","+b+")";
            num4.style.fontSize = s+"px";
        },700);

        //set random number
        num1.textContent = Math.floor(Math.random()*10);
        num2.textContent = Math.floor(Math.random()*10);
        num3.textContent = Math.floor(Math.random()*10);
        num4.textContent = Math.floor(Math.random()*10);
    },1000);
}