function botones() {	
	document.getElementById('inscribeteBtn').onclick = function() {
		document.getElementById('cambio').innerHTML = "¡Sé parte del cambio!";
	}
	document.getElementById('hackathonBtn').onclick = function() {
		document.getElementById('flotar').classList.toggle("aright");
		return false;
	}
	document.getElementById('enviar').onclick = function() {
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var subject = document.getElementById('subject').value;
		var message = document.getElementById('message').value;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (name === "" || subject === "" || email === "" || message === "") {
			alert("Por favor, rellene todos los campos.");
			return false;
		} else if (name.charAt(0) != name.charAt(0).toUpperCase()) {
			alert("Su nombre debe iniciar con mayúscula.");
			console.log("Nombre: " + name + ". No tiene mayúscula inicial.");
			return false;
		} else if (!validEmail.test(email)) {
			alert("El correo ingresado no es válido.");
			console.log("Email: " + email + ". No es un correo válido.");
			return false;
		} else {
			console.log("Nombre: " + name);
			console.log("Email: " + email);
			console.log("Asunto: " + subject);
			console.log("Mensaje: " + message);
			return false;
		}
	}
}