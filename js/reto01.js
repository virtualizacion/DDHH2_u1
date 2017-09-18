$(function(){

    $("#prueba").dragAndDropV2({
        drags: {
            1: {
                contenido: "../images/cont01/reto01/reto_opc_uno.png",
                accepted: true
            },
            2: {
                contenido: "../images/cont01/reto01/reto_opc_dos.png",
                accepted: false
            },
            3: {
                contenido: "../images/cont01/reto01/reto_opc_tres.png",
                accepted: true
            },
            4: {
                contenido: "../images/cont01/reto01/reto_opc_cuatro.png",
                accepted: true
            },
            5: {
                contenido: "../images/cont01/reto01/reto_opc_cinco.png",
                accepted: false
            },
            6: {
                contenido: "../images/cont01/reto01/reto_opc_seis.png",
                accepted: true
            }
        },
        drops: {
            1: {
                //accepted: [1, 3, 4, 6]
            }
        },
        //pregunta:"Que mas?",
        intentos:2       
    })
})