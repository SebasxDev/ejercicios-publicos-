function calcularFigura() {
  let figura = prompt(
    "Seleccione una figura:\n1. Triángulo\n2. Rectángulo\n3. Cuadrado\n4. Círculo"
  );
  let operacion = prompt("¿Qué desea calcular?\n1. Área\n2. Perímetro");

  figura = parseInt(figura);
  operacion = parseInt(operacion);

  switch (figura) {
    case 1: // Triángulo
      if (operacion === 1) {
        let b = parseFloat(prompt("Ingrese la base (b):"));
        let h = parseFloat(prompt("Ingrese la altura (h):"));
        let area = (b * h) / 2;
        alert("El área del triángulo es: " + area.toFixed(2));
      } else {
        let a = parseFloat(prompt("Ingrese el lado a:"));
        let b = parseFloat(prompt("Ingrese el lado b:"));
        let c = parseFloat(prompt("Ingrese el lado c:"));
        let perimetro = a + b + c;
        alert("El perímetro del triángulo es: " + perimetro.toFixed(2));
      }
      break;

    case 2: // Rectángulo
      let base = parseFloat(prompt("Ingrese la base (b):"));
      let altura = parseFloat(prompt("Ingrese la altura (a):"));
      if (operacion === 1) {
        let area = base * altura;
        alert("El área del rectángulo es: " + area.toFixed(2));
      } else {
        let perimetro = 2 * (base + altura);
        alert("El perímetro del rectángulo es: " + perimetro.toFixed(2));
      }
      break;

    case 3: // Cuadrado
      let lado = parseFloat(prompt("Ingrese el lado (a):"));
      if (operacion === 1) {
        let area = lado * lado;
        alert("El área del cuadrado es: " + area.toFixed(2));
      } else {
        let perimetro = 4 * lado;
        alert("El perímetro del cuadrado es: " + perimetro.toFixed(2));
      }
      break;

    case 4: // Círculo
      let r = parseFloat(prompt("Ingrese el radio (r):"));
      if (operacion === 1) {
        let area = Math.PI * r * r;
        alert("El área del círculo es: " + area.toFixed(2));
      } else {
        let perimetro = 2 * Math.PI * r;
        alert("El perímetro del círculo es: " + perimetro.toFixed(2));
      }
      break;

    default:
      alert("Opción de figura no válida.");
  }
}
