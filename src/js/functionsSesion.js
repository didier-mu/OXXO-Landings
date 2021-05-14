
/// HOME

function validacionSesion2(nameCheck){
    
    if($(nameCheck).prop("checked") == false){
        nameCheck.parent(".check").siblings(".msjError").css("display","block");
    }
   
    else {
        nameCheck.parent(".check").siblings(".msjError").hide().removeClass("show");
    }
    
}

$(document).ready(function () {
    
    $(".checkmark, .check label").on("click", function () {
        
        if($(this).siblings('input').prop("checked") == false){
            $(this).parent(".check").siblings('.msjError').hide().removeClass("show");
            $(this).parent(".check").siblings('input').prop("checked");
        }
        
        else {
             $(this).parent(".check").siblings('input').removeAttr("checked");
             $(this).parent(".check").siblings('.msjError').addClass("show");
        }
    });
    
    $('.botonera a').on("click", function (e) {
        var checkEdad = $("#checkEdad"),
            checkLegales = $("#checkLegale");
            
        validacionSesion2(checkEdad);
        validacionSesion2(checkLegales);
              
         // VALIDATE ALL

        if ($('.msjError.show').length == 0) {
            //console.log("hecho");
            return true;
        }
        
        else{
            //console.log("no hecho");
            return false;
        }
       
        
    });
     
    //validacionSesion();
});

    

