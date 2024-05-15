let calculadora = (prompt("¡Bienvenido a la calculadora geométrica! , Por favor, selecciona la figura geométrica para la cual deseas realizar el cálculo : circulo , rectangulo, cuadrado"));

let opcion = parseInt(prompt("ingrese el numero correspondiente a la figura geometrica deseada: 1: Círculo, 2: Rectángulo, 3: Triángulo"))

let radio = 0;
let circulo = parseFloat(prompt("por favor ingresa el radio del circulo:"))
let areaCirculo = Math.PI * radio * radio;
    let circunferencia = 2 * Math.PI * radio;
    alert("Área del círculo: " + areaCirculo.toFixed(2));
    alert("Circunferencia del círculo: " + circunferencia.toFixed(2));

    let baseRectangulo = parseFloat(prompt("Por favor, ingresa la base del rectángulo: "));
        let alturaRectangulo = parseFloat(prompt("Por favor, ingresa la altura del rectángulo: "));
        let areaRectangulo = baseRectangulo * alturaRectangulo;
        let perimetroRectangulo = 2 * (baseRectangulo + alturaRectangulo);
        alert("El área del rectángulo es: " + areaRectangulo.toFixed(2) + "\nEl perímetro del rectángulo es: " + perimetroRectangulo.toFixed(2));
    
        let baseTriangulo = parseFloat(prompt("Por favor, ingresa la base del triángulo: "));
        let alturaTriangulo = parseFloat(prompt("Por favor, ingresa la altura del triángulo: "));
        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
        alert("El área del triángulo es: " + areaTriangulo.toFixed(2));

        alert("¡Gracias por utilizar la calculadora geométrica!");

    
    
    
        










