/*
        ======== CARRITO DE COMPRAS ==========
 */

    //Variables
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');



    //Funciones 
    cargarEventListeners();

    function cargarEventListeners() {
        listaCursos.addEventListener('click', agregarCurso);
    }

    function agregarCurso(e) {
        e.preventDefault();
        //console.log(e.target.classList)
        if(e.target.classList.contains('agregar-carrito')){
            console.log('Agregando al carrito');
        }
    }