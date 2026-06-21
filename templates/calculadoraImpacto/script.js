function donar() {
    // 1. Creamos un nuevo elemento <div> desde JavaScript.
    // Este div va a funcionar como contenedor de toda la calculadora.
    let nuevoDiv = document.createElement("div");

    // 2. Cargamos dentro del div toda la estructura HTML que necesita la calculadora:
    nuevoDiv.innerHTML = `<h1>Calculadora de Impacto</h1>
                            <p>Calculá cuántos kits escolares podés donar.</p>
                            
                            <button class="montoFijo" value="5000">$5000</button>
                            <button class="montoFijo" value="10000">$10000</button>
                            <button class="montoFijo" value="20000">$20000</button>
                            <input type="number" id="montoDonacion" placeholder="Ingresá un monto">
                            <button id="calcularImpacto">Calcular</button>
                            
                            <p id="resultadoImpacto"></p>
                            
                            <button id="hacerDonacion">Hacer la donación</button>
                            <button id="cerrar">Cerrar</button>`;

    // 3. Insertamos el nuevo div al DOM para que aparezca en pantalla.
    document.body.appendChild(nuevoDiv);

    // 4. Agregamos una clase CSS al div para aplicarle estilos desde la hoja de estilos.
    nuevoDiv.classList.add("nuevoEstilo")

    // 5. Buscamos dentro del nuevo div los elementos que vamos a necesitar manipular.
    // Usamos nuevoDiv.querySelector para limitar la búsqueda al contenido recién creado.
    let inputMonto = nuevoDiv.querySelector("#montoDonacion");
    let botonCalcular = nuevoDiv.querySelector("#calcularImpacto");
    let botonesMontoFijo = nuevoDiv.querySelectorAll(".montoFijo");
    let resultadoImpacto = nuevoDiv.querySelector("#resultadoImpacto");
    let botonHacerDonacion = nuevoDiv.querySelector("#hacerDonacion");
    let botonCerrar = nuevoDiv.querySelector("#cerrar");

    // 6. Definimos una función reutilizable para calcular el impacto de la donación.
    // Recibe un monto, calcula cuántos kits escolares se pueden comprar y los muestra en pantalla
    function calcularImpacto(monto) {
        // Definimos el costo fijo de cada elemento.
        let precioKitEscolar = 5000;

        // Aquí podríamos usar Math.floor() para redondear hacia abajo y contar solo kits completos.
        // Math.floor(monto / precioKitEscolar)
        let cantidadKits = monto / precioKitEscolar;


        // Versión sin validación:
        resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits escolares.`;

        // Validamos el monto y actualizamos el texto del resultado según cada caso.
        // if (monto <= 0) {
        //     resultadoImpacto.textContent = "Ingresá un monto mayor a 0.";
        // } else if (cantidadKits === 0) {
        //     resultadoImpacto.textContent = "Tu donación ayuda a acercarnos a un nuevo kit escolar.";
        // } else if (cantidadKits === 1) {
        //     resultadoImpacto.textContent = "Con tu donación se puede entregar 1 kit escolar.";
        // } else {
        //     resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits escolares.`;
        // }

    }

    // 7. Cuando el usuario hace click en "Calcular",
    // tomamos el valor escrito en el input, lo convertimos a número
    // y llamamos a la función calcularImpacto.
    botonCalcular.addEventListener("click", function () {
        let monto = inputMonto.value;
        calcularImpacto(monto);
    });

    // 8. Recorremos todos los botones de monto fijo para asignarles el mismo comportamiento.
    botonesMontoFijo.forEach(function (boton) {
        // Al hacer click en un botón fijo, leemos su atributo data-monto,
        // lo convertimos a número y calculamos el impacto de esa donación.
        boton.addEventListener("click", function () {
            let monto = boton.value;
            calcularImpacto(monto);
        });
    });

    // 9. El botón "Cerrar" elimina el div completo de la página.
    botonCerrar.addEventListener("click", function () {
        nuevoDiv.remove();
    });

    // 10. El botón "Hacer la donación" reemplaza el contenido de la calculadora
    // por una pantalla simple de agradecimiento.
    botonHacerDonacion.addEventListener("click", function () {
        nuevoDiv.innerHTML = `<h1>Gracias por tu donación</h1>
                                <button id="volverHome">Volver al home</button>`;

        // 11. Como el contenido anterior fue reemplazado, buscamos el nuevo botón
        // después de haber cambiado el innerHTML.
        let botonVolverHome = nuevoDiv.querySelector("#volverHome");

        // 12. Al hacer click en "Volver al home", redirigimos al archivo index.html.
        botonVolverHome.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    });
}
