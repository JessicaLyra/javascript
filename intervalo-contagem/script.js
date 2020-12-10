function contar () {
    var inicio = document.getElementById('ini')
    var final = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var visual = document.getElementById('visual')
	//converter valor das variáveis para número
    var ini = Number (inicio.value)
    var fim = Number(final.value)
    var pulo = Number(passo.value)
 
    if (ini == '' || fim== '') {
        alert ('ERRO! É preciso os dois valores estarem preenchidos para funcionar!')
    } else {
		if (ini < fim) {
			for (var c = ini; c <= fim; c+=pulo) {
				visual.innerHTML += `${c} \u{1F449}  `
			}
			visual.innerHTML += `\u{1F3C1}`
        } else {
			for (var c =ini; c>= fim; c-=pulo) {
			visual.innerHTML += `${c} \u{1F449}`
			}
		}
    }

}