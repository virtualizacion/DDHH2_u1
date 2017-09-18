$("document").ready(function(){
    
    $("#BT1-C1, #BT2-C1, #BT3-C1, #BT4-C1").click(function(){
        $(this).css("opacity",".5");
    });
    
    $("#CONINT01, #CONINT02, #CONINT03, #CONINT04").hide();
    
     $(".volver").click(function(){        
        $("#INT01").animate({
            top: '600px'
        }, 400, 'linear', function(){
            $("#CONINT01, #CONINT02, #CONINT03, #CONINT04").hide();
        });  
    });
    
    $("#BT1-C1").click(function(){
        $("#CONINT01").show();
        $("#INT01").animate({
            top: '10px'
        }, 1000, 'easeOutExpo');  
    });
    
    $("#BT2-C1").click(function(){
        $("#CONINT02").show();
        $("#INT01").animate({
            top: '10px'
        }, 1000, 'easeOutExpo');  
    });
    
    $("#BT3-C1").click(function(){
        $("#CONINT03").show();
        $("#INT01").animate({
            top: '10px'
        }, 1000, 'easeOutExpo');  
    });
    
    $("#BT4-C1").click(function(){
        $("#CONINT04").show();
        $("#INT01").animate({
            top: '10px'
        }, 1000, 'easeOutExpo');  
    });
    
    
});