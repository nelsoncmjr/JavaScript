function solucao(jogadorA) {

    let somaDojogadorA = 0

    for (let item of jogadorA) {
        somaDojogadorA += item
    }

    let somaDojogadorB = 120 - somaDojogadorA

    if (somaDojogadorA > somaDojogadorB) {
        return "JOGADOR A GANHOU"
    } else if (somaDojogadorB > somaDojogadorA) {
        return "JOGADOR B GANHOU"
    } else {
        return "EMPATE"
    }

}