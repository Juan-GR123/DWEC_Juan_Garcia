import $ from 'jquery'; //referencia a todos los elementos de jquery

/*
document.addEventListener("DOMContentLoaded", function ()
    //codigo


);

//antigua

$(document).ready(function()

);
*/

$(() => {
    //Selección
    console.log($(".parrafo"));

    console.log($("p"),
        $("section"),
        $("p:last-of-type"),
        $("tr:even")
    );


    //eventos
    $("#boton1").on("click", () => {
        alert("has pinchado en el boton");
    });

    $("#boton2").on("mouseover", () => {
        console.log("mouseover");
    });


    /*    $("section:last-of-type").on("click", ()=>{

    })*/

    /*
    click, mouseover,mouseout, focusin,focusout, dbclick,keyup

     */

    //modificar atrib y prop
    $("p.parrafo").on("mouseover", () => {
        $("p.parrafo").text("nuevo texto");
    })

    $("#boton2").on("click", () => {
        $("a").attr("href", "www.google.es");
    });

    $("#boton3").on("click", () => {
        $("img").attr("all", "que bonito todo");
    });

    $("#boton4").on("click", () => {
        $("p").toggleClass("texto-rojo");
        $("p").css({
            'background-color': 'blue',
            'font-size': '2rem'
        });

        $("#boton3").off("click");

    });

    //modifica el DOM
    /*  $("section").append("<p>ULTIMO parrafo</p>");
      $("section").prepend("<p>PRIMER parrafo</p>");
      //.before
      //.after
  
      $("section").wrap("<section class='nueva-sec'></section>");  
      //$(".parrafo").unwrap()
  
      //$("section").remove();
      //.replaceWith
      //.replaceAll
  */
    //Navegacion por el DOM
   // console.log($("p:first-of-type").parent().css("background-color", "red"));
   // console.log($("p:first-of-type").parents());
   // console.log($("p:first-of-type").parentsUntil("body"))

    // console.log($("section").children());

    //console.log($("section").children("article").css('background-color','red'));

    //.find()
    $("article>p:first-of-type").siblings().css('background-color','red');
    /*.next():
    .nextAll():
    .nextUntil(): //devuelve los hermanos siguiente que le indico hasta el elemento que se le indica
    .prev():    
    .prevAll():
    .prevUntil():
    .first()
    .last(/)
    .closeest("") El elemento mas cercano
    */


    $("#mielemento").parent().children().eq(2);

    //filtrado
        //.hasClass()
        //.filter()

        $("#mielemento").parent().children().filter("rojo");
        $("input").is(":visible").addClass("verde");
        //.not()

    //Efectos

    //asincronia (promesas)

});
