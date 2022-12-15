// inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let timerInicial = timer;
let tiempoRegresivoId = null;
let winAudio = new Audio('/static/app/recursos/sonidos-memorice/win.wav')
let loseAudio = new Audio('/static/app/recursos/sonidos-memorice/lose.wav')
let clickAudio = new Audio('/static/app/recursos/sonidos-memorice/click.wav')
let rightAudio = new Audio('/static/app/recursos/sonidos-memorice/right.wav')
let wrongAudio = new Audio('/static/app/recursos/sonidos-memorice/wrong.wav')

//apuntandor html
let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('Aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//generaricion de numeros aleatoreos
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];
numeros = numeros.sort(() => { return Math.random() - 0.5 });
console.log(numeros);

//funciones
function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo ${timer} segundos`;
        if (timer == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    }, 1000);
}

function bloquearTarjetas() {
    for (let i = 0; i <= 35; i++) {
        let tarjetaBloada = document.getElementById(i);
        tarjetaBloada.innerHTML = `<img src="/static/app/recursos/images/${numeros[i]}.png" alt="">`;;
        tarjetaBloada.disabled = true;
    }
}

//funcion principal
function destapar(id) {
    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }


    tarjetasDestapadas++;

    if (tarjetasDestapadas == 1) {
        //mostrar primer elemento
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="/static/app/recursos/images/${primerResultado}.png" alt="">`;
        clickAudio.play();
        //deshabilitar primer boton
        tarjeta1.disabled = true;
    } else if (tarjetasDestapadas == 2) {
        //mostrar segundo elemento
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="/static/app/recursos/images/${segundoResultado}.png" alt="">`;;

        ////deshabilitar segundo boton
        tarjeta2.disabled = true;


        // incrementar movimiento
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimietos: ${movimientos}`;

        if (primerResultado == segundoResultado) {
            // contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentador aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}​​`;

            if (aciertos == 18) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🙈​🙊​`
                mostrarTiempo.innerHTML = `Fantastico! 🙌​ solo demoraste ${timerInicial - timer} segundos`
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 💪​😄`

                document.getElementById('total_acierto').value = aciertos
                document.getElementById('total_tiempo').value = timerInicial - timer
                document.getElementById('total_movimientos').value = movimientos
                document.getElementById('btn-guardar').style.opacity = "1"



                winAudio.play();
            }
            rightAudio.play();
        } else {
            wrongAudio.play();
            // mostrar momentaneamente valores
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}
function restart() {
    location.reload();
}