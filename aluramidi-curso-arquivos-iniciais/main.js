function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
//template string
    const idÁudio = `#som_${instrumento}`;
    console.log(idÁudio);

    tecla.onclick = function(){
        tocaSom (idÁudio);
    }
    
    contador = contador + 1;
    
    console.log(contador);


}







