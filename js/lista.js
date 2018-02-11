$(document).ready(function(){
    $(".activarModalInfo").click(function(){
        $("#todaLaInfoHC").remove();
        var tdHClinica = $(this).parent().parent().children()[0];
        var valHClinica = $(tdHClinica).text();
        console.log(valHClinica);
        $.ajax({
            url : 'modalInfoCompleta.php',
            data : {
                valHClinica: valHClinica
            },
            type : 'POST',
            dataType : 'text',      
            success : function(data){                
                $("#pegarModal").prepend(data);                
                $("#todaLaInfoHC").modal('show');                
            }
        });

    });
});