$("document").ready(function(){
    
    $("#C1, #C2, #C3, #C4, #BLACK").hide();

    $("#BT1").click(function(){
        $(this).css("opacity", ".5");
        $("#C2").fadeIn();
        $("#C3, #C4").hide();
    });
    $("#BT2").click(function(){
        $(this).css("opacity", ".5");
        $("#C3").fadeIn();
        $("#C2, #C4").hide();
    });
    $("#BT3").click(function(){
        $(this).css("opacity", ".5");
        $("#C4").fadeIn();
        $("#C2, #C3").hide();
    });

    $("#IMP1").click(function(){
        $("#BLACK").fadeIn();
        $("#C1").fadeIn();
        $("#C2, #C3, #C4").hide();
    });

    $("#CL1").click(function(){
        $("#BLACK, #C1").hide();
    });
    $("#CL2").click(function(){
        $("#BLACK, #C2").hide();
    });
    $("#CL3").click(function(){
        $("#BLACK, #C3").hide();
    });
    $("#CL4").click(function(){
        $("#BLACK, #C4").hide();
    });
    
    $("#IMP1").click(function(){
        $(this).css("opacity", ".4");
    });
});