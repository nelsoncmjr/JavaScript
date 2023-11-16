function solucao(placar) {

    let quantidadeDeGolTimeA = placar[0];
    let quantidadeDeGolTimeB = placar[1];

    if (quantidadeDeGolTimeA === quantidadeDeGolTimeB) {
        return "EMPATE";
    } else if (quantidadeDeGolTimeA > quantidadeDeGolTimeB) {
        return "TIME A";
    } else {
        return "TIME B";
    }
}