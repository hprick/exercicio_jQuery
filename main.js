$("form").on("submit", function(e){
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    console.log(novaTarefa);
    const novoItem = $('<li></li>');
    $(`<li> ${novaTarefa} </li>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $("li").click(function() {
        $(this).css("text-decoration" , "line-through")
    });
    $("#nova-tarefa").val("")
})