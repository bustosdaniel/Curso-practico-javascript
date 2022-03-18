//Codigo del cuadrado
console.group("Caudrados");
const LadoCuadrado = 5;
console.log("Los lados del Cuadrado miden: " + LadoCuadrado + "cm");

const perimetroCuadrado = LadoCuadrado * 4;
console.log("El perimetro del Cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = LadoCuadrado * LadoCuadrado;
console.log("El área del Cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd();

//Codigo del triángulo
console.group("Triangulos");
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  "Los lados del triangulo miden: " 
  + LadoTriangulo1 + "cm, " 
  + LadoTriangulo2 + "cm, " 
  + baseTriangulo + "cm"
  );
const alturaTriangulo = 5.5;
console.log("La altura del Triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos")

//Radio
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();