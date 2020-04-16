document.getElementsByTagName('body')[0].style.backgroundColor = "#0c0c0d"
document.getElementsByTagName('nav')[0].style.backgroundColor = "#0c0c0d"
document.getElementById('jump_to_toggle').style.backgroundColor = "#0c0c0d"
document.getElementsByTagName('menu')[1].style.backgroundColor = "#0c0c0d"

for (x = 0; x < 1000; x++) {

	if (document.getElementsByClassName("highlight")[x] == undefined) 
	{
    	break;
	} 
	else {
		document.getElementsByClassName("highlight")[x].style.backgroundColor = "#2a2a30"
	}
}

for (i = 0; i < 100; i++) {
	if (document.getElementsByClassName("admonition")[i] == undefined) 
	{
    	break;
	} else {
    	document.getElementsByClassName("admonition")[i].style.backgroundColor = "#2a2a30"
	}
}