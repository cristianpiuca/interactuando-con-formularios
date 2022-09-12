console.log('moviesAddValidations.js success');

const $ = (element) => document.getElementById(element)


window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    


let inputRating = document.getElementById('rating');
let inputAwards = document.getElementById('awards');
let inputReleaseDate = document.getElementById('release_date');
let inputLength = document.getElementById('length');
let inputGenre = document.getElementById('genre_id');
let form = document.querySelector('form');
let inputTitle = document.getElementById('title');
let errores = document.querySelector('.errores');

inputTitle.focus();
let elements = form.elements;
let erroresArray = [];


inputTitle.addEventListener('blur', function() {
    if(!this.value){
        $('errorTitle').innerHTML = 'Debes poner un titulo';
        this.classList.add('is-invalid')
    } else {
        $('errorTitle').innerHTML = null;
        this.classList.remove('is-invalid')
    }
})
  
inputRating.addEventListener('blur', function() {

    switch (true) {
        case !this.value:
            $('errorRating').innerHTML = 'Debes poner un rating';
            this.classList.add('is-invalid')
            break;
        
        case this.value < 0 || this.value > 10 :
             $('errorRating').innerHTML = 'El rating debe ser entre 0 y 10 puntos';
             this.classList.add('is-invalid')
            break;

        default:
            $('errorRating').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }

})

inputAwards.addEventListener('blur', function() {
    
    switch (true) {
        case !this.value:
            $('errorAward').innerHTML = 'Debes poner un awards';
            this.classList.add('is-invalid')
            break;
        
        case this.value < 0 || this.value > 10 :
             $('errorAward').innerHTML = 'Los awards deben ser entre 0 y 10 puntos';
             this.classList.add('is-invalid')
            break;

        default:
            $('errorAward').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }

})

inputReleaseDate.addEventListener('blur', function() {

    if(!this.value){
        $('errorDate').innerHTML = 'Debes seleccionar una fecha';
        this.classList.add('is-invalid')
        } else {
            $('errorDate').innerHTML = null;
            this.classList.remove('is-invalid')
        }
})

inputLength.addEventListener('blur', function() {

    switch (true) {
        case !this.value:
            $('errorLength').innerHTML = 'Debes poner la duración de la pelicula';
            this.classList.add('is-invalid')
            break;
        
        case this.value < 60 || this.value > 360 :
             $('errorLength').innerHTML = 'La duración debe ser entre 60 y 360 minutos';
             this.classList.add('is-invalid')
            break;

        default:
            $('errorLength').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }
   
})

inputGenre.addEventListener('blur', function() {

    if(!this.value){
        $('errorGenre').innerHTML = 'Debes seleccionar un genero';
        this.classList.add('is-invalid')
        } else {
            $('errorGenre').innerHTML = null;
            this.classList.remove('is-invalid')
        }
})


form.addEventListener('submit', (e) => {
    
    e.preventDefault()

    let elements = form.elements
    let error = false;

    for (let i = 0; i < elements.length -1; i++) {

        if(elements[i].classList.contains('is-invalid') || !elements[i].value){
            error = true
           
        }
     
    }

    if(!error){
        e.target.submit();
    }else{
        errores.innerHTML += `<li class="alert-warning">Ver errores</li>`
        
    }
})



} 