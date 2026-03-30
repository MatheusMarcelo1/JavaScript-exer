function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=00 && hora< 12){
        img.src = "fotomanha.png"
        document.body.style.background = "#89604a"       

    }else if (hora >= 12 && hora <18){
        img.src = "fototarde.png"
        document.body.style.background = "#fea989"
    }else {
        img.src = "fotonoite.png"
        document.body.style.background = "#403253"

        
    }

}
