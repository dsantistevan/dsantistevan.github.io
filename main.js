function mostrarSeccion(nombreSeccion,idButton, eng){
    document.getElementById("elementos-"+nombreSeccion).style.visibility="visible";
    document.getElementById("elementos-"+nombreSeccion).style.maxHeight=10000;
    document.getElementById(idButton).onclick=function(){ocultarSeccion(nombreSeccion,idButton, eng);};
    document.getElementById(idButton).innerHTML= eng ? "Hide" : "Ocultar";
}

function ocultarSeccion(nombreSeccion,idButton, eng){
    document.getElementById("elementos-"+nombreSeccion).style.visibility="hidden";
    
    document.getElementById(idButton).onclick=function(){mostrarSeccion(nombreSeccion,idButton, eng);};
    document.getElementById(idButton).innerHTML=eng ? "Show" : "Mostrar";
    document.getElementById("elementos-"+nombreSeccion).style.maxHeight=15;
}
function fecha(){
    var date= new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(month < 10){
          document.getElementById("fecha").innerHTML =`${day}/0${month}/${year}`;
    }else{
        document.getElementById("fecha").innerHTML =`${day}/${month}/${year}`;
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
	fecha();
});