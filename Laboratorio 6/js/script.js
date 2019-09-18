/*Obtenemos la accion generada por los botones*/
document.getElementById("generar").addEventListener("click", generar);
document.getElementById("limpiar").addEventListener("click", limpiar);

/*Creamos la primer funcion que sera generar los numeros*/
function generar() 
{
  /*Declaramos las variables a utilizar*/
  var mayor=0;
  var menor=100;
  var cantidadNumeros = 15;
  var myArray = []
  /*Generamos numeros aleatarios */
  while (myArray.length < cantidadNumeros) 
  {
    /*Guardamos los numeros aleatorios en una variable */
    var numeroAleatorio = Math.round(Math.random() * 100);
    /*Guardamos la variable dentro del arreglo de numeros */
    myArray[myArray.length] = numeroAleatorio;
  }
  /*Imprimimos en cosola para verificar que se esten generando numeors aleatoriamente */
  console.log("números aleatorios : " + myArray);
  /*Creamos el canvas 1 para poder imprimir los numeros aleatorios*/
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;
  /*Recorremos todo el arreglo de numeros para poder ir imprimiendo cada uno de los numeros*/
  for (i = 0; i < myArray.length; i++) 
  {
    ctx.fillStyle = '#008080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#4da6ff';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }

  /*Utilizamos el metodo burbuja para ordenar nuestro arreglo de numeros */
  const bubbleSort = myArray => {
    const l = myArray.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (myArray[j] > myArray[j + 1]) {
          [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
        }
        /*Verificamos que el numero sea el mayor */
        if (mayor<myArray[j]){
          mayor=myArray[j];
        }
        /*Verificamos que el numero sea el menor */
        if (menor>myArray[j]){
          menor=myArray[j];
        }
      }
    }

    return myArray;
  };

  const result = bubbleSort(myArray);
  console.log("números ordenados : " + result);
  console.log("el numero mayor es:" + mayor);
  console.log("el numero menor es:"+ menor);

  
  //Creamos el segundo canvas quien desplegara los numero ya ordenados
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;

  //Recorre el arreglo para poder graficarlo
  for (i = 0; i < myArray.length; i++) {
    ctx.fillStyle = '#008080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#4da6ff';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }


}

//Creamos la funcion que nos permite limpiar la pantalla
function limpiar() {
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var canvas = document.getElementById('canvas2');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}