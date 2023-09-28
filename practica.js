var nombre = prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre?");
alert("Hola, " + nombre);

var c = 0;
var i = 0;

var p1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA.Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1:
};

var p2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado");
if (p2 == "A"){
    c = c + 1;
}else{
    i = i + 1;
};

var p3 = prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");
if (p3 == "C"){
    c = c + 1;
}else{
    i = i + 1;
};

if(C > i){
    document.write(nombre + ", has superado con éxito la trivia:<br>");
    document.write("Respuestas Correctas: " +c+"<br>");
    document.write("Respuestas Incorrectas: "+i);
}else{
    document.write(nombre + ", puedes hacerlo mejor:<br>");
    document.write("Respuestas Correctas; " +c+"<br>");
    document.write("Respuestas Incorrectas; "+i);
};