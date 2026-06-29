//LÓGICA DEL MENÚ RESPONSIVE
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// LÓGICA DEL CARRUSEL
let imagenes = document.querySelectorAll('.slides img');
let posicion = 0;

function activarImagen(posicion) {
    imagenes.forEach((img) => img.classList.remove('active'));
    imagenes[posicion].classList.add('active');
}

function siguiente() {
    posicion = posicion + 1;
    if (posicion >= imagenes.length) {
        posicion = 0;
    }
    activarImagen(posicion);
}

function anterior() {
    posicion = posicion - 1;
    if (posicion < 0) {
        posicion = imagenes.length - 1;
    }
    activarImagen(posicion);
}

// 3. Logica de CALCULADORA 
function donar() {
    // 1. Contenedor div de la calculadora
    let nuevoDiv = document.createElement("div");

    // 2. Cargamos la estructura HTML interna de la calculadora
    nuevoDiv.innerHTML = `<h1>Calculadora de Impacto</h1>
                            <p>Calculá cuántos kits de rehabilitación animal podés donar.</p>
                            
                            <button class="montoFijo" value="5000">$5.000</button>
                            <button class="montoFijo" value="10000">$10.000</button>
                            <button class="montoFijo" value="20000">$20.000</button>
                            <input type="number" id="montoDonacion" placeholder="Ingresá un monto">
                            <button id="calcularImpacto">Calcular</button>
                            
                            <p id=\"resultadoImpacto\"></p>
                            
                            <button id="hacerDonacion">Hacer la donación</button>
                            <button id="cerrar">Cerrar</button>`;

    // 3. Insertamos el nuevo div al final del body
    document.body.appendChild(nuevoDiv);

    // 4. Le aplicamos la clase CSS para que se centre en pantalla
    nuevoDiv.classList.add("Calculadora");

    // 5. Buscamos los elementos internos necesarios para interactuar
    let inputMonto = nuevoDiv.querySelector("#montoDonacion");
    let botonCalcular = nuevoDiv.querySelector("#calcularImpacto");
    let textoResultado = nuevoDiv.querySelector("#resultadoImpacto");
    let botonesMontoFijo = nuevoDiv.querySelectorAll(".montoFijo");
    let botonHacerDonacion = nuevoDiv.querySelector("#hacerDonacion");
    let botonCerrar = nuevoDiv.querySelector("#cerrar");

    // 6. Función interna que calcula el impacto real
    function calcularImpacto(monto) {
        if (monto === "" || monto <= 0) {
            textoResultado.innerText = "Por favor, ingresá un monto válido.";
            return;
        }
        // Ejemplo matemático: Supongamos que cada Kit cuesta $2500
        let costoKit = 2500;
        let cantidadKits = Math.floor(monto / costoKit);
        
        if (cantidadKits > 0) {
            textoResultado.innerText = `¡Con tu donación de $${monto} estarías financiando ${cantidadKits} kits de rehabilitación animal!`;
        } else {
            textoResultado.innerText = `¡Gracias! Toda ayuda suma para los tratamientos médicos.`;
        }
    }

    // 7. Evento para el botón manual "Calcular"
    botonCalcular.addEventListener("click", function () {
        let monto = inputMonto.value;
        calcularImpacto(monto);
    });

    // 8. Eventos para los botones de monto fijo ($5000, $10000, $20000)
    botonesMontoFijo.forEach(function (boton) {
        boton.addEventListener("click", function () {
            let monto = boton.value;
            calcularImpacto(monto);
        });
    });

    // 9. Evento del botón Cerrar (Elimina el div de la pantalla)
    botonCerrar.addEventListener("click", function () {
        nuevoDiv.remove();
    });

    // 10. Evento de simulación "Hacer la donación" con pantalla de agradecimiento
    botonHacerDonacion.addEventListener("click", function () {
        nuevoDiv.innerHTML = `<h1>¡Gracias por tu donación!</h1>
                                <p>Tu generosidad ayuda a salvar vidas.</p>
                                <br>
                                <button id="volverHome">Volver al Home</button>`;

        let botonVolverHome = nuevoDiv.querySelector("#volverHome");

        botonVolverHome.addEventListener("click", function () {
            window.location.href = "Home.html"; // Redirige de vuelta al Home
        });
    });
}

// 4. Inicio automatico
document.addEventListener("DOMContentLoaded", function() {
    // Si entramos a la Landing Page (cuyo título es "Donaciones"), abre la calculadora automáticamente
    if (document.title === "Donaciones") {
        donar();
    }
});

// Logica ACORDION
function conmutarProyecto(botonElemento) {
    // Obtenemos el elemento li padre del botón presionado
    let itemPadre = botonElemento.parentElement;
    // Buscamos la caja de contenido interna de ese proyecto específico
    let cajaContenido = itemPadre.querySelector(".contenido-desplegable");

    // Si ya está abierto, lo cerramos
    if (itemPadre.classList.contains("activo")) {
        itemPadre.classList.remove("activo");
        cajaContenido.style.display = "none";
    } else {
        // OPCIONAL: Descomentá las siguientes 4 líneas si querés que al abrir uno se cierren los demás automáticamente:
        // document.querySelectorAll('.item-proyecto').forEach(item => item.classList.remove('activo'));
        // document.querySelectorAll('.contenido-desplegable').forEach(caja => caja.style.display = 'none');

        // Abrimos el proyecto seleccionado
        itemPadre.classList.add("activo");
        cajaContenido.style.display = "block";
    }
}