//Codigo del cuadrado
console.group("Caudrados");
//const LadoCuadrado = 5;
//console.log("Los lados del Cuadrado miden: " + LadoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4; 
}
//console.log("El perimetro del Cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
  return lado * lado;  
}
//console.log("El área del Cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd();

//Codigo del triángulo
console.group("Triangulos");
//const LadoTriangulo1 = 6;
//const LadoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
  //"Los lados del triangulo miden: " 
  //+ LadoTriangulo1 + "cm, " 
  //+ LadoTriangulo2 + "cm, " 
  //+ baseTriangulo + "cm"
  //);
//const alturaTriangulo = 5.5;
//console.log("La altura del Triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
} 

//console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(base, altura){
  return (base * altura) / 2;
} 
console.log("El area del Triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos")

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
function diametroCirculo (radio){
  return radio * 2;
} 

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio)
  return diametro * PI;
} 

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo (radio){
  return (radio * radio) * PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();