
const secTen = document.getElementById("secondTens");
const secOne = document.getElementById("secondOnes");
const msHun = document.getElementById("msHundreds");
const msTen = document.getElementById("msTens");

secTen.textContent = "0";
secOne.textContent = "0";
msHun.textContent = "0";
msTen.textContent = "0";


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

countUp();
