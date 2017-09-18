
$("document").ready(function () {
    $("#prueba").dragAndDrop({
        tipologia: "categoria", //categoria o sencillo
        pregunta: "", //enunciado para visualizarse previo a la actividad
        tipo_drags: "imagen", //imagen, audio o texto
        tipo_drops: "imagen", //imagen, audio o texto
        intentos: 2,
        drags: {
            1: {
                contenido: "img/opcion01.png"
            },
            2: {
                contenido: "img/opcion02.png"
            },
            3: {
                contenido: "img/opcion03.png"
            },
            4: {
                contenido: "img/opcion04.png"
            },
            5: {
                contenido: "img/opcion05.png"
            },
            6: {
                contenido: "img/opcion06.png"
            }
        },
        drops: {
            1: {
                accepted: [1, 3, 4, 6]
            }
        }
    });
});

$(document).on("Inicio_DragAndDrop", function (evt) {

    //evento que se dispara al terminar de cargar la actividad.

    //mostrar instrucciones
    $(".blackout>div").hide();
    $(".blackout .instruccion").fadeIn(500);
    $(".blackout").css('display', 'flex').hide().fadeIn(500);

    $(".blackout .instruccion .iconContainer").click(function () {
        $(".blackout").fadeOut(500);
    });

});

$(document).on("Retroalimentacion_DragAndDrop", function (evt) {

    //evento que se dispara cuando el usuario da clic al botón de validar respuesta

    if (evt.correct) {

        //cuando la respuesta es correcta

        //mostrar realimentación correcto
        $(".blackout>div").hide();
        $(".blackout .retroalimentacion.correcto").fadeIn(500);
        $(".blackout").fadeIn(500);

        $(".blackout .retroalimentacion.correcto button").click(function () {
            evt.container.reiniciar_dragDrop();
            $(".blackout").fadeOut(500);
        });
    } else {
        if (evt.intentos_restantes > 0) {

            //cuando la respuesta es incorrecta pero aun quedan intentos

            //mostrar retroalimentación volver a intentarlo
            $(".blackout>div").hide();
            $(".blackout .retroalimentacion.otro_intento").show();
            $(".blackout").fadeIn(500);
            $(".blackout .retroalimentacion.otro_intento button").click(function () {
                $(".blackout").fadeOut(500);
            });
        }
        else {
            //cuando la respuesta es incorrecta y ya no hay mas intentos

            //mostrar retroalimentación incorrecto
            $(".blackout>div").hide();
            $(".blackout .retroalimentacion.incorrecto").fadeIn(500);
            $(".blackout").fadeIn(500);
            $(".blackout .retroalimentacion.incorrecto button").click(function () {
                evt.container.reiniciar_dragDrop();
                $(".blackout").fadeOut(500);
            });
        }
    }
});




