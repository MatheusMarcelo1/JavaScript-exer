function test(){
  var data= new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('ano')
  var res= document.getElementById('res')
  //ou var res=docuento.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')

  }else{
    var fhous = document.getElementsByName('hous')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Você tem : ${idade} anos`
    var house=''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(idade > 11 && idade < 17){

      if(fhous[0].checked){ //[0] primeira escolha
        house="Grifinória"
        img.setAttribute('src', 'grif.png')
        document.body.style.background="#8c060e"
      }else if(fhous[1].checked){
        house="Lufa-Lufa"
        img.setAttribute('src', 'lufa.png')
        document.body.style.background="#e7b26c"
      }else if(fhous[2].checked){
        house="Corvinal"
        img.setAttribute('src', 'corv.png')
        document.body.style.background="#387aaa"
      }else if(fhous[3].checked){
        house="Sonserina"
        img.setAttribute('src', 'sons.png')  //add a foot
        document.body.style.background = "#336a64"        //muda a cor de fundo 

      }
      res.style.textAlign="center"
      res.innerHTML=`Parabéns você foi escolhida para a casa ${house}!`
      res.appendChild(img) //adicionar mais elementos, aqui no caso adicionei o elemento img

    }else{
      res.innerHTML="Você tem mais idade para entrar em Hogwarts! talvez sua carta tenha sido extraviada."
      img.setAttribute('src', 'carta.png')
      res.appendChild(img)
      document.body.style.background = "#121116"
    }

   
  }




}