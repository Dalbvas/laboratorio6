document.getElementById("generar").addEventListener("click", generar);
document.getElementById("limpiar").addEventListener("click", limpiar);

function generar() {
  var mayor=0;
  var menor=100;
  var cantidadNumeros = 15;
  var myArray = []

  while (myArray.length < cantidadNumeros) {
    var numeroAleatorio = Math.round(Math.random() * 100);
    myArray[myArray.length] = numeroAleatorio;
  }
  console.log("números aleatorios : " + myArray);

  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;

  for (i = 0; i < myArray.length; i++) {
    ctx.fillStyle = '#008080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#4da6ff';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }
  const bubbleSort = myArray => {
    const l = myArray.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (myArray[j] > myArray[j + 1]) {
          [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
        }
        if (mayor<myArray[j]){
          mayor=myArray[j];
        }
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

function limpiar() {
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var canvas = document.getElementById('canvas2');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}