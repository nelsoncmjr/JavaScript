function solucao(numero1, numero2, operacao) {

    if (operacao === "soma") {
        return ("resultado é", numero1 + numero2);
    } else if (operacao === "subtracao") {
        return ("resultado é", numero1 - numero2);
    } else if (operacao === "multiplicao") {
        return ("resultado é", numero1 * numero2);
    } else if (operacao === "divisao") {
        return ("resultado é", numero1 / numero2);
    }
}
