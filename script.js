(function () { 

    const demmarer = function(){
        console.log("le jeu demmare");
        start.style.backgroundColor = "#d314d3";
        window.setTimeout(() => {
            start.style.backgroundColor = "purple";
        }, 1000)
        console.log(getColor());
    }
    getColor = function(){
        var myColor = ["bleu", "rouge","vert", "jaune"]
        var ramdom = Math.floor(Math.random() * 3)
        console.log(ramdom);
        return myColor[ramdom];
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
