import $ from 'jquery'; //referencia a todos los elementos de jquery

/*
document.addEventListener("DOMContentLoaded", function ()
    //codigo


);

//antigua

$(document).ready(function()

);
*/

$(()=>{
    //Selección
   console.log($(".parrafo"));

    console.log($("p"),
    $("section"),
    $("p:last-of-type"),
    $("tr:even")
);


    //eventos
    $("#boton1").on("click", ()=>{
        alert("has pinchado en el boton");
    });

    $("#boton2").on("mouseover", ()=>{
        console.log("mouseover");
    });


    /*    $("section:last-of-type").on("click", ()=>{

    })*/

    /*
    click, mouseover,mouseout, focusin,focusout, dbclick,keyup

     */

    //modificar atrib y prop
    $("p.parrafo").on("mouseover", ()=>{
        $("p.parrafo").text("nuevo texto");
    })

    $("#boton2").on("click", ()=> {
        $("a").attr("href","www.google.es"); 
    });

    $("#boton3").on("click", ()=> {
        $("img").attr("all","que bonito todo"); 
    }); 

    $("#boton4").on("click", ()=>{
       $("p").toggleClass("texto-rojo");
       $("p").css({
            'background-color': 'blue',
            'font-sizw': '2rem'
       });

       $("#boton3").off("click");

    }); 
    
    /*
    
    */
   


});
