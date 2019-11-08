
function get()
{
	var text = document.getElementById("sb").value;
	fetch("https://omdbapi.com/?apikey=6b8e57a5&t="+text);
	.then(res => res.json());
	.then(res => {
		if(res){	
		window.location.replace('resultpage.html');}					
	});
}