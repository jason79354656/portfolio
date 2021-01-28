const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validatorform = (e) =>{
   switch (e.target.name){
       case "gmail":
        
       break;
       case "name":
            if(expresiones.name.test(e.target.value)){
                document.getElementById('form-name').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('form-name').classList.add('formulario__grupo-correcto');
                document.querySelector('#form-name i').classList.remove('fa-times-circle');
                document.querySelector('#form-name i').classList.add('fa-check-circle');
                
            }else{
               document.getElementById('form-name').classList.add('formulario__grupo-incorrecto');
               document.getElementById('form-name').classList.remove('formulario__grupo-correcto');
               document.querySelector('#form-name i').classList.add('fa-times-circle');
               document.querySelector('#form-name i').classList.remove('fa-check-circle');
            }
       break;
       case "telephone":
         
       break;
   }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup' , validatorform );
    input.addEventListener('blur' , validatorform);
})

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    console.log("accion");
})