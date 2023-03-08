function funcioncapturar(){
var nombrecontacto=document.getElementById("nombre").value;
var telefonocelular=document.getElementById("celular").value;
    console.log(nombrecontacto +""+telefonocelular);
    if(telefonocelular==""){
        alert("El número de telefono celular es obligatorio para poder enviarte mayor informacion via Whatsapp")
}
}

function mifuncion() {
        document.getElementById("demo").innerHTML = "Soy una persona predispuesta y con buena voluntad para aprender. Adoro los desafios y soy muy sociable. Me fascina la Física Cuántica y todo lo relacionado con Teoría de Cuerdas.";
        }