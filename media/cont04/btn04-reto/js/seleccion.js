var rta1 = false;
var rta2 = false;
var rta3 = false;

$("document").ready(function () {
    $("#FINALOK, #FINAL-AVISO").hide();
    
    $("#R1, #R2, #R3, #R4, #R5, #R6").css("opacity","0");
    
    $(".sel").click(function(){
        $(this).css("background","url(img/opcion_sel.png)");
    });
        
    $("#O1").click(function(){
        rta1 = true;
        $("#R1").css("opacity","1");
        validarFin(rta1,rta2,rta3);
    });
    
    $("#O2").click(function(){
        $("#R2").css("opacity","1");
        $(this).css("opacity",".1");
    });
    
    $("#O3").click(function(){
        rta2 = true;
        $("#R3").css("opacity","1");
        validarFin(rta1,rta2,rta3);
    });
    
    $("#O4").click(function(){
        $("#R4").css("opacity","1");
        $(this).css("opacity",".1");
    });
    
    $("#O5").click(function(){
        rta3 = true;
        $("#R5").css("opacity","1");
        validarFin(rta1,rta2,rta3);
    });
    
    $("#O6").click(function(){
        $("#R6").css("opacity","1");
        $(this).css("opacity",".1");
    }); 
    
});

function validarFin(rta1,rta2,rta3){
    if(rta1 && rta2 && rta3){
        console.log("yasta");
        $("#FINALOK").fadeIn();
        $("#FINAL-AVISO").fadeIn();
        $("#R2, #R4, #R6, #O2, #O4, #O6").css("opacity","0");
    }      
}










