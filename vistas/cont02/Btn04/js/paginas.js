$("document").ready(function(){
    
    $("#BLACK, #C11, #C22, #C33, #MULTA, #CONT").hide();
    
    $("#BT1").click(function(){
        $(this).css("opacity", ".5");
        $("#C11").fadeIn();
        $("#C22, #C33, #MULTA, #CONT").hide();
    });
    $("#BT2").click(function(){
        $(this).css("opacity", ".5");
        $("#C22").fadeIn();
        $("#MULTA").show();
        $("#C11, #C33, #CONT").hide();
    });
    $("#BT3").click(function(){
        $(this).css("opacity", ".5");
        $("#C33").fadeIn();
        $("#CONT").show();
        $("#C11, #C22, #MULTA").hide();
    });

});    