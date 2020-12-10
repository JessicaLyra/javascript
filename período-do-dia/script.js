function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date() //pegando data atual
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        //BOM DIA!
        document.body.style.background ='#7788a2'
        img.src='manha.png'
    } else if (hora >=12 && hora < 18) {
            //BOA TARDE
        document.body.style.background='#a7521a'    
        img.src='tarde.png'   
    } else {
            //BOA NOITE
        document.body.style.background ='#1a1916'    
        img.src='noite.png'    
    }
}