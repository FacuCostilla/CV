/* JS Del Resumen Profesional */
const d = document;
const $img1 = d.querySelector(".img1");
const $resumen1 = d.querySelector(".resumen1");
const $resumen2 = d.querySelector(".resumen2");
const $b1 = d.querySelector(".button1");

$b1.addEventListener("click", function () {
    $resumen1.classList.toggle("hidden");
    $resumen2.classList.toggle("hidden");
    $img1.classList.toggle("hidden");
    if ($b1.innerHTML === "Click para ver mi Resumen Profesional") {
        $b1.innerHTML = "Click para Ocultar";
    }
    else{
        $b1.innerHTML =  "Click para ver mi Resumen Profesional";
    }
    
});

/* JS del Historial Laboral */

const $img2 = d.querySelector(".img2");
const $historial1 = d.querySelector(".historial1");
const $historial2 = d.querySelector(".historial2");
const $historial3 = d.querySelector(".historial3");
const $historial4 = d.querySelector(".historial4");
const $historial5 = d.querySelector(".historial5");
const $ul1 = d.querySelector(".ul1");
const $ul2 = d.querySelector(".ul2");
const $ul3 = d.querySelector(".ul3");
const $ul4 = d.querySelector(".ul4");
const $b2 = d.querySelector(".button2");

$b2.addEventListener("click", function () {
    $historial1.classList.toggle("hidden");
    $historial2.classList.toggle("hidden");
    $historial3.classList.toggle("hidden");
    $historial4.classList.toggle("hidden");
    $historial5.classList.toggle("hidden");
    $ul1.classList.toggle("hidden");
    $ul2.classList.toggle("hidden");
    $ul3.classList.toggle("hidden");
    $ul4.classList.toggle("hidden");

    $img2.classList.toggle("hidden");
    if ($b2.innerHTML === "Click para ver mi Historial Laboral") {
        $b2.innerHTML = "Click para Ocultar";
    }
    else{
        $b2.innerHTML =  "Click para ver mi Historial Laboral";
    }
    
});

/* JS de la Formación */
const $img3 = d.querySelector(".img3");
const $formacion1 = d.querySelector(".formacion1");
const $formacion2 = d.querySelector(".formacion2");
const $formacion3 = d.querySelector(".formacion3");
const $formacion4 = d.querySelector(".formacion4");
const $formacion5 = d.querySelector(".formacion5");
const $formacion6 = d.querySelector(".formacion6");
const $formacion7 = d.querySelector(".formacion7");
const $b3 = d.querySelector(".button3");

$b3.addEventListener("click", function () {

    $formacion1.classList.toggle("hidden");
    $formacion2.classList.toggle("hidden");
    $formacion3.classList.toggle("hidden");
    $formacion4.classList.toggle("hidden");
    $formacion5.classList.toggle("hidden");
    $formacion6.classList.toggle("hidden");
    $formacion7.classList.toggle("hidden");
    $img3.classList.toggle("hidden");
    if ($b3.innerHTML === "Click para ver mi Formación") {
        $b3.innerHTML = "Click para Ocultar";
    }
    else{
        $b3.innerHTML =  "Click para ver mi Formación";
    }
});



/*document.getElementById("sumar").addEventListener("click", function () {
    let numeroA = document.getElementById("numero1").value;
    console.log(`El valor del numero A es ${numeroA}`);
    let numeroB = document.getElementById("numero2").value;
    console.log(`El valor del numero B es ${numeroB}`);

    let resultado = sumar(parseInt(numeroA),parseInt(numeroB));
    console.log(`El resultado de la suma es ${resultado}`);
    
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("result").style.display = "block";

});*/
/*const $card = document.querySelector(".card");
setTimeout(() => {
    console.log($card);
},1000);

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45"); //Toggle funciona tanto como un remove y un add, si no tiene la clase, se la agrega, si la tiene, la elimina
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); 
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); 
$card.classList.replace("rotate-45","rotate-135"); //Reemplaza una clase por otra, en este ejemplo rotate 45 pasa a ser rotate 135
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/