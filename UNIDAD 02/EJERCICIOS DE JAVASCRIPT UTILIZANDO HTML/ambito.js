let globalVar = "Soy global";

function miFuncion() {
    let localVar = "Soy local";
    console.log(globalVar); 
    console.log(localVar); // Error: localVar no está definida
}

miFuncion();

function miBloque() {
    if (true) {
        let bloqueVar = "Soy del bloque";
        console.log(bloqueVar);
    }

    // Fuera del bloque ya no se puede acceder a bloqueVar
    // console.log(bloqueVar);  // Error: bloqueVar no está definida
}

miBloque();
