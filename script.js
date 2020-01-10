(function () { 

    const demmarer = function(){
        console.log("le jeu demmare");
        start.style.backgroundColor = "#d314d3";
        window.setTimeout(() => {
            start.style.backgroundColor = "purple";
        }, 1000)
        var color = getColor();

        switch (color){
            case "bleu" :
                window.setTimeout(() => {
                    bleu.style.backgroundColor = "#6AB5F7";
                }, 1000) 
                
                window.setTimeout(() => {
                    bleu.style.backgroundColor = "rgb(13, 13, 139)";
                }, 2000)
                break;
            case "rouge" :
                window.setTimeout(() => {
                    rouge.style.backgroundColor = "#F72814";
                }, 1000)
                
                window.setTimeout(() => {
                    rouge.style.backgroundColor = "rgb(119, 5, 5)";
                }, 2000)
                break;  
            case "vert" :
                window.setTimeout(() => {
                    vert.style.backgroundColor = "#5CF714";
                }, 1000) 
                
                window.setTimeout(() => {
                    vert.style.backgroundColor = "rgb(9, 92, 9)";
                }, 2000)
                break;
            case "jaune" :
                window.setTimeout(() => {
                    jaune.style.backgroundColor = "#F7EF05";
                }, 1000) 
                
                window.setTimeout(() => {
                    jaune.style.backgroundColor = "rgb(190, 190, 16)";
                }, 2000)
                break;
        }
        bleu.addEventListener("click", ()=>{
            comparer(color, "bleu" );

            bleu.style.backgroundColor = "#6AB5F7";

            window.setTimeout(() => {
                bleu.style.backgroundColor = "rgb(13, 13, 139)";
            }, 500)
        });
        
        rouge.addEventListener("click", ()=>{
            comparer(color, "rouge" );

                rouge.style.backgroundColor = "#F72814";
            
            window.setTimeout(() => {
                rouge.style.backgroundColor = "rgb(119, 5, 5)";
            }, 500)
        });
  
        vert.addEventListener("click", ()=>{
            comparer(color, "vert" );

            
                vert.style.backgroundColor = "#5CF714";
            
            
            window.setTimeout(() => {
                vert.style.backgroundColor = "rgb(9, 92, 9)";
            }, 500)
        });

        jaune.addEventListener("click", ()=>{
            comparer(color, "jaune" );

            
                jaune.style.backgroundColor = "#F7EF05";
           
            window.setTimeout(() => {
                jaune.style.backgroundColor = "rgb(190, 190, 16)";
            }, 500)
        });

    }

    const getColor = function(){
        var myColor = ["bleu", "rouge","vert", "jaune"]
        var ramdom = Math.floor(Math.random() * 3)
        console.log(ramdom);
        return myColor[ramdom];
    }
    const comparer = function(r , c){
        if(r == c){
            console.log("brovo")
        }
        else{
            console.log("t'es nul")
        }
        
    }
    

    window.addEventListener("DOMContentLoaded", (event) => {


        console.log("DOM entièrement chargé et analysé");
        var start = document.getElementById("start");
        var bleu = document.getElementById("bleu");
        var rouge = document.getElementById("rouge");
        var vert = document.getElementById("vert");
        var jaune = document.getElementById("jaune");

        start.addEventListener("click", demmarer );
      });



    
})();
