//inizializziamo le variabili
const lamp = document.getElementById("lamp");
const btn  = document.getElementById("btn-on-off");

//aggiungiamo la funzione click al bottone
btn.addEventListener("click", function(){
    if(lamp.src.includes("yellow")){
        lamp.src = "./img/white_lamp.png";
        btn.textContent = "accendi";
    }
    else{
        lamp.src = "./img/yellow_lamp.png";
        btn.textContent = "spegni";
    }
});