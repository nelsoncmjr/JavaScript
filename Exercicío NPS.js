function solucao(resposta) {

    let quantidadeDetratores = 0
    let quantidadePromotores = 0

    for (let itens of respostas) {
        if (itens >= 0 && itens <= 6) {
            quantidadeDetratores++
        } else if (itens === 9 || itens === 10) {
            quantidadePromotores++
        }
    }

    let totalDeClientes = respostas.length

    let nps = (quantidadePromotores - quantidadeDetratores) / totalDeClientes * 100

    return nps

}