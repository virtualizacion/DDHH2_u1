$("document").ready(function(){
    
    $("#BLACK, #C11, #C22, #C33, #T01, #C1, #C2, #C3, #C4").hide();
    
    $("#BT1").click(function(){
        $(this).css("opacity", ".5");
        $("#C11").fadeIn();
        $("#C22, #C33").hide();
    });
    $("#BT2").click(function(){
        $(this).css("opacity", ".5");
        $("#C22").fadeIn();
        $("#C11, #C33").hide();
    });
    $("#BT3").click(function(){
        $(this).css("opacity", ".5");
        $("#C33").fadeIn();
        $("#C11, #C22").hide();
    });
    

  

    
    $("#IMP1").click(function(){
        $("#BLACK").fadeIn();
        $("#C1").fadeIn();
    });
    $("#CL1").click(function(){
        $("#BLACK, #C1").hide();
    });
    
    $("#IMP2").click(function(){
        $("#BLACK").fadeIn();
        $("#C2").fadeIn();
    });
    $("#CL2").click(function(){
        $("#BLACK, #C2").hide();
    });
    
    $("#IMP3").click(function(){
        $("#BLACK").fadeIn();
        $("#C3").fadeIn();
    });
    $("#CL3").click(function(){
        $("#BLACK, #C3").hide();
    });
    
    $("#IMP4").click(function(){
        $("#BLACK").fadeIn();
        $("#C4").fadeIn();
    });
    $("#CL4").click(function(){
        $("#BLACK, #C4").hide();
    });
    
    
    $("#IMP1, #IMP2, #IMP3, #IMP4").click(function(){
        $(this).css("opacity", ".4");
    });
});    