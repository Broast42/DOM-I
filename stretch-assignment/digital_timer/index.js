
const secTen = document.getElementById("secondTens");
const secOne = document.getElementById("secondOnes");
const msHun = document.getElementById("msHundreds");
const msTen = document.getElementById("msTens");

secTen.textContent = "0";
secOne.textContent = "0";
msHun.textContent = "0";
msTen.textContent = "0";

const bdy = document.querySelector("body");
const newButton = document.createElement("button");
newButton.addEventListener("click", countUp);
newButton.textContent = "Start Timer";
newButton.style.marginLeft = "50px";

bdy.append(newButton);




function countUp(){
    let counter = setInterval(countFn, 10);
    
   
    function countFn(){
        
        

        if(secTen.textContent === "1"){
            clearInterval(counter);    
        }else if(secOne.textContent ==="10"){
            secTen.textContent++;
            secOne.textContent = "0";     
        }else if(msHun.textContent ==="10"){
            secOne.textContent++;
            msHun.textContent = "0";
        }else if(msTen.textContent === "10"){
            msHun.textContent++;
            msTen.textContent = "0";
        }else{
            
            msTen.textContent++;
        }
    }
}




