// Arreglo Carrito //

console.log("ok")

//Creamos un Array con los productos (Ya escritos en el HTML)

const productos = [
    {
        nombre: "Accesorios",
        descripcion: "Los accesorios de trekking incluyen gorros, guantes, mochilas, bastones, gafas de sol, linternas frontales y protectores solares.",
        imagen: "Imagenes/accesorios_trekking.png",
        precio: 3000
    },
    {
        nombre: "Calzado",
        descripcion: "El calzado de trekking incluye botas robustas, resistentes al agua, con suelas antideslizantes, soporte en el tobillo y amortiguación.",
        imagen: "Imagenes/calzado_trekking.png",
        precio: 84200
    },
    {
        nombre: "Indumentaria",
        descripcion: "La indumentaria de trekking incluye chaquetas, pantalones resistentes, camisetas transpirables, botas y guantes adecuados.",
        imagen: "Imagenes/indumentaria_trekking.png",
        precio: 52000
    }
]

console.log(productos[0])

//Creamos una variable vacia - creamos un for y dentro de el metemos el codigo html que contiene la informacion (OJO: CREAR UN DIV PARA EL CONTENIDO Y QUE NO SE ROMPA EL CSS).

let productosHTML = ""
for (let indice = 0; indice < productos.length; indice++)
    productosHTML += `
                    <div class="tarjeta">
                        <img src=${productos[indice].imagen} alt="imagen de accesorios deportivos">
                        <h2>${productos[indice].nombre}</h2>
                        <p>${productos[indice].descripcion}</p>
                        <p class="precio">Precio: $${productos[indice].precio}</p>
                        <a href="0">Ver más</a>
                        <input type="button" value="Agregar al carrito" class="btn-carrito">
                    </div>
`;

console.log(productosHTML);

//traemos el contenedor de los productos a una variable
const contenedorProductos = document.getElementById("contenedorProductos");
//reemplazamos el contenido los productos del array
contenedorProductos.innerHTML = productosHTML;
//preparacion:

//Del html seleccionamos con querySelectorAll a todos los botones Agregar Carrito y lo metemos en una variable
const botonesAgregar = document.querySelectorAll(".btn-carrito");

//recuerda que no debe haber mas de un ID para los botones, por eso cambiamos el selector a Class.
console.log(botonesAgregar);

//Luego con querySelector (Que solo selecciona un elemento) nos traemos la lista y la metemos en una variable
const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito)

//Lo mismo hacemos con el elemento P (lo traenos del html y lo metemos en una variable)
const totalCarrito = document.querySelector("#carrito p");
console.log(totalCarrito);

const mensajePagarCarrito = document.getElementById("mensaje")

let totalAPagar = 0;

// se agrega el listener a cada boton //
for (let indice = 0; indice < botonesAgregar.length; indice++){
    function aggElCarrito(){
        console.log("click" + indice)
        //creamos el elemento Li con (createElement)
        const elementoLi = document.createElement("li");
        
        //Lo desplegamos en el html con innerText
        elementoLi.innerText = `${productos[indice].nombre} $${productos[indice].precio}`;

        console.log(elementoLi)
        
        //Agregamos un elemento hijo con (appendChild)
        listaCarrito.appendChild(elementoLi);

        //sumamos el total de los productos en $
        totalAPagar += productos[indice].precio;

        //Desplegamos el total en el html
        totalCarrito.innerText = `Total a pagar: $${totalAPagar}`;

        mensajePagarCarrito.innerText = "";
    }

    botonesAgregar[indice].addEventListener("click", aggElCarrito);
    
}

//BOTON BORRAR

const btnBorrar = document.querySelector("#btnBorrar");



function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = ""
}

btnBorrar.addEventListener("click", borrarCarrito)

//BOTON IR A PAGAR

const btnIrAPagar = document.querySelector("#btnPagar")

function irAPagar(){
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No has seleccionado ningun producto"
    }else{
        window.location.href = "./pagos.html"
    }
    
}

btnIrAPagar.addEventListener("click", irAPagar )