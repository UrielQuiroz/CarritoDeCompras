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
        //Cuando agregas un curso presionando "Agregar al carrito"
        listaCursos.addEventListener('click', agregarCurso);
    }

    function agregarCurso(e) {
        e.preventDefault();
        //console.log(e.target.classList)

        if(e.target.classList.contains('agregar-carrito')){
            //console.log('Agregando al carrito');
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
        }

    }

    function leerDatosCurso(curso) {
        console.log(curso);
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        console.log(infoCurso);
    }