function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //metodo para pegar o ano inteiro com os 4 digitos ex: 2020
    var formulario_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //verificar se o campo de preencher o ano está vazio ou o ano passou do atual em que vivemos
    if (formulario_ano.value.length==0 || Number(formulario_ano.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //o campo do radio tem que pegar pelo nome pois ele é o mesmo pros dois inputs, se são diferentes, acaba marcando os dois sem desmarcar  um
        var fsex= document.getElementsByName('radsex')
        //para saber a idade subtraímos o ano atual - o ano digitado
        var idade = ano - Number(formulario_ano.value)
        //definindo o genero clicado
        var genero = ''
        //enviando imagem dinamicamente criando a tag pelo javascript
        var img = document.createElement('img')
        //criando id para o img
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            //separando resultado por idade
            if (idade >=0 && idade< 10) {
                //Criança
                img.setAttribute('src','foto-bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','foto-jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >0 && idade<10) {
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //idosa
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //adicionando um elemento embaixo
        res.appendChild(img)
    }
}