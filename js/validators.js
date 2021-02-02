const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const modal  =  document.getElementById('modal-container');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	const mensaje  = document.querySelector('#mensaje').value;
	const gmail  = document.querySelector('#correo').value;
	const telefono  = document.querySelector('#telefono').value;
	const nombre   = document.querySelector('#nombre').value;
	
	
	if(campos.nombre && campos.correo && campos.telefono ){
		
		sendEmail(mensaje,gmail,telefono,nombre)
		modal.classList.add('show');

		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

		setTimeout(opacityModal,5000);
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


function opacityModal(){
	modal.classList.remove('show');
}

function sendEmail(mensaje,gmail,telefono,nombre) { 
	
	  Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "jasonchoquecanaviri@gmail.com", 
        Password: "vssilhqpqdlpvmyn", 
        To: 'jasonchoquecanaviri@gmail.com', 
        From: "jasonchoquecanaviri@gmail.com", 
        Subject: `${nombre} sent you mensage telephone ${telefono}`,
        Body: `Name: ${nombre} <br/> Email:${gmail} <br/> Mensage:
		${mensaje}`,
      }) 
        .then(function (message) { 
          console.log("Mail has been sent successfully") 
      });
} 