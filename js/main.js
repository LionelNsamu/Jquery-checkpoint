$("#bold").click(function(){$("#p").css("font-weight","bold")});
$("#italic").click(function(){$("#p").css("font-style","italic")});
$("#under").click(function(){$("#p").css("text-decoration","underline")});

$("#fonts").change(function(){$("#p").css("font-family",$(this).val())});
$("#size").change(function(){$("#p").css("font-size",$(this).val())});
