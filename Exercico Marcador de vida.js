function solucao(vida, classe) {
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
        return "Game Over";
    } else {
        return "Vida restante " + vidaTotal;
    }
}