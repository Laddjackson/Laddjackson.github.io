/*Button Code in OU <a id="de" href="^0">&copy;</a>*/
function directedit() {
	if(document.getElementById("de") != null && document.getElementById("directedit")) {
		var link = document.getElementById("de").outerHTML;
		document.getElementById("de").outerHTML = "";
		document.getElementById("directedit").innerHTML = link;
	}
}
window.onload = function() {
	directedit();
}
//jQuery option, if available..
/*$(document).ready(function () {
    $("#directedit").html(jQuery("#de"));
});*/