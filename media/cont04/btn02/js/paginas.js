$("document").ready(function(){
    
    $("#BLACK").hide();

    $("#IMP1").click(function(){
        $("#BLACK").fadeIn();
    });
    
    $("#IMP1").click(function(){
        $(this).css("opacity", ".4");
    });

    $("#CL1").click(function(){
        $("#BLACK, #C1").hide();
    });
});