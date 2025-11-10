//3 Uso de instrucción labedel

    etiquetaExterna:
    for (let i = 0; i <5; i++) {
       for(let j = 0; j < 15; j++){
        if (j > 10) {
            console.log(`Iteración: ${j}`);
            break etiquetaExterna;
        }
       } 
    }
