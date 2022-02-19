function myFunction()
{
	alert("Hello, world!");
	document.getElementById("words").style.fontSize = "24pt";
}

function functionTwo()
{
	document.getElementById("words").style.fontWeight = "bold";
	document.getElementById("words").style.color = "#0000FF";
	document.getElementById("words").style.textDecoration = "underline";

}
function functionThree()
{
	document.getElementById("words").style.fontWeight = "normal";
	document.getElementById("words").style.color = "#000000";
	document.getElementById("words").style.textDecoration = "none";
	document.getElementById("words").style.fontSize = "initial";
	document.getElementById("words").style.textTransform = "initial";
}
function functionFour()
{
	var x = document.getElementById("words");
	x.style.textTransform = "uppercase";
	var parts = x.value.split(".");
	x.value = parts.join("-Moo");
}
