function run() {
  let tab = document.getElementById('tab')
  let num = document.getElementById('num')

  if (num.value.lenght == 0){
    window.alert('Por favor, digite um número')
  }else{
    let n = Number(num.value)
    let c= 1
    tab.innerHTML= '' //antes começar tudo limpa a tabuada, para quando clicar de novo
    while (c<=10){
      let item = document.createElement('option') //criando um elemento do HTML dentro do JS
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}