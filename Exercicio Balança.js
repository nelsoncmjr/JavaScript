function solucao(pesoLadoA1, pesoLadoA2, pesoLadoB1, pesoLadoB2) {

	const somaLadoA = pesoLadoA1 + pesoLadoA2
	const somaLadoB = pesoLadoB1 + pesoLadoB2

	if (somaLadoA === somaLadoB) {
		return "Equilibrio"
	} else if (somaLadoA > somaLadoB) {
		return "Lado A"
	} else {
		return "Lado B"
	}
}