$('ul').on("click","li", function(){
   $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
	e.stopPropagation();
//	$(this).parent().remove();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});


$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle();
})