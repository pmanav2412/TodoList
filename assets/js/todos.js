// $("li").click(function(){
//     $(this).toggleClass("completed");
// });
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})


$("input[type='text']").keypress(function(event){
    var x = $(this).val();
    if (event.which === 13){
        console.log(x);
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>"+ x +"</li>");
        
        }
    
})
var a = true;
$(".fa-check-circle").on("click",function(){
    if(a){$("input[type='text']").fadeOut();}
    else{
        $("input[type='text']").fadeIn();  
    }
    a = !a;
    
})