// let vida = 100;
// let classe, vidaTotal;

// window.Number(prompt("Digite classe de inimigo de 1 a 4"))

// if (classe === 1) {
//     vidaTotal = vida - 20;
//     if (vidaTotal <= 0) {
//         console.log("Game Over");
//     } else {
//         console.log("Vida restante " + vidaTotal)
//     }
// }

// if (classe === 2) {
//     vidaTotal = vida - 30;
//     if (vidaTotal <= 0) {
//         console.log("Game Over");
//     } else {
//         console.log("Vida restante " + vidaTotal)
//     }
// }

// if (classe === 3) {
//     vidaTotal = vida - 40;
//     if (vidaTotal <= 0) {
//         console.log("Game Over");
//     } else {
//         console.log("Vida restante " + vidaTotal)
//     }
// }

// if (classe === 4) {
//     vidaTotal = vida - 50;
//     if (vidaTotal <= 0) {
//         console.log("Game Over");
//     } else {
//         console.log("Vida restante " + vidaTotal)
//     }
// }

let vida = 100;
let classe = 1;
let vidaTotal = 0;

if (classe === 1) {
    vidaTotal = vida - 20;
} else if (classe === 2) {
    vidaTotal = vida - 30;
} else if (classe === 3) {
    vidaTotal = vida - 40;
} else {
    vidaTotal = vida - 50;
}

if (vidaTotal <= 0) {
    console.log("Game Over");
} else {
    console.log("Vida restante " + vidaTotal);
}