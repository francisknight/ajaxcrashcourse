//Create event listener
 document.getElementById('button').addEventListener('click', loadtext);
 function loadtext () {
 	console.log("clicked"); 
 

 //Create XHR object 
 var xhr = new XMLHttpRequest();
 //OPEN - type, url/file, asyn
xhr.open('GET', 'smiple.txt', true);

xhr.onload = function() {
	if (this.status == 200) {
		console.log(this.responseText);
	}


	//send request
	xhr.send();
}
}