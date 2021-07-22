/*
        ======== CARRITO DE COMPRAS ==========
 */

    //Variables
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');
    let articuloCarrito = [];



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


    //Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
    function leerDatosCurso(curso) {
        //console.log(curso);

        //Crea un objeto con el contenido actual
        const infoCurso = {
            imagen: curso.querySelector("img").src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        //Agergar elementos al arreglo del carrito
        articuloCarrito = [ ...articuloCarrito, infoCurso ];

        console.log(articuloCarrito);
        carritoHTML();
    }


    function carritoHTML() {
        
        //limpiar HTML previo
        LimpiarHTML()

        //Recorrer el carrito y generar el HTML
        articuloCarrito.forEach( curso => {
            
            //podemos utilizar Destructuring
            const { imagen, titulo, precio, cantidad } = curso;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src='${imagen}' width="100" >
                </td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="{id}"> X </a>
                </td>
            `;
            contenedorCarrito.appendChild(row);
        })
    }


    function LimpiarHTML() {
        //Forma lenta
        //contenedorCarrito.innerHTML = '';

        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }

    }
