function escapeHtml(htmls)
{
	return htmls
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function responsive()
{
	var winWidth = parseInt($(window).width());

	if(winWidth < 1024)
		$("html,body").addClass("responsive");
	else 
		$("html,body").removeClass("responsive");
}

$(window).bind("resize load orientationchange",function()
{
	responsive()
});

responsive();