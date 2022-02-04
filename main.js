function mostrarSeccion(nombreSeccion,idButton, eng){
    //document.getElementById("elementos-"+nombreSeccion).style.display="block";
    document.getElementById("elementos-"+nombreSeccion).classList.remove('elementos-no');
    //document.getElementById("elementos-"+nombreSeccion).style.maxHeight=10000;
    document.getElementById(idButton).onclick=function(){ocultarSeccion(nombreSeccion,idButton, eng);};
    document.getElementById(idButton).innerHTML= eng ? "Hide" : "Ocultar";
}

function ocultarSeccion(nombreSeccion,idButton, eng){
    //document.getElementById("elementos-"+nombreSeccion).style.display="none";
    document.getElementById("elementos-"+nombreSeccion).classList.add('elementos-no')
    document.getElementById(idButton).onclick=function(){mostrarSeccion(nombreSeccion,idButton, eng);};
    document.getElementById(idButton).innerHTML=eng ? "Show" : "Mostrar";
    //document.getElementById("elementos-"+nombreSeccion).style.maxHeight=15;
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
