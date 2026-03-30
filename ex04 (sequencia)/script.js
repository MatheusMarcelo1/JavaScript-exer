function run(){ //o 'let' só funciona dentro deste escopo, ela é usado somente para dentro d
  let res=  document.getElementById('res')
  let inic = Number(document.getElementById('inic').value)
  let fim = Number(document.getElementById('fim').value)
  let pass= Number(document.getElementById('pass').value)
  //ou var res=docuento.querySelector('div#res')

  if (fim < inic) {
    window.alert('[ERRO] O número final não pode ser menor que o inicial!');
    res.innerHTML= 'Impossivel contar!!!'
    return; // sai da função se houver um erro
  }


  var seq = '';
  for (var c = inic; c <= fim; c += pass) {
    seq = seq + c + '\u{1F449}';
  }
  res.innerHTML = seq + '\u{1F3C1}'


}