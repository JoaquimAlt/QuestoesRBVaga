function contarLetraA(texto) {
    let count = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            count++; 
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }
}

let texto1 = "Amazônia";
contarLetraA(texto1);

let texto2 = "Omelete";
contarLetraA(texto2);