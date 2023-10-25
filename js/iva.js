// Obtenemos el formulario de la calculadora de IVA y le añadimos un evento de envío.
document.getElementById("iva-calculator").addEventListener("submit", function (event) {
    // Prevenimos la acción por defecto del formulario para manejarla nosotros mismos.
    event.preventDefault();

    // Obtenemos el monto y el porcentaje de IVA introducidos por el usuario.
    const amount = parseFloat(document.getElementById("amount").value);
    const ivaPercentage = parseFloat(document.getElementById("iva").value);

    // Verificamos que el monto y el porcentaje de IVA sean números válidos y estén dentro del rango permitido.
    if (amount < 0 || ivaPercentage < 0 || ivaPercentage > 22) {
        document.getElementById("result").innerHTML = `Valores no válidos`;
        return;
    }

    // Calculamos el monto del IVA y el monto total.
    const ivaAmount = amount * (ivaPercentage / 100);
    const totalAmount = amount + ivaAmount;

    // Mostramos el monto del IVA y el monto total en el elemento de resultado.
    document.getElementById("result").innerHTML = `IVA: ${ivaAmount.toFixed(2)}<br>Total: ${totalAmount.toFixed(2)}`;
});

