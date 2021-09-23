let lista = document.getElementsByClassName('titulo7');
let campo;
for (let i = 0; i < lista.length; i++) {
  campo = lista[i].children[0];
  if (campo.innerHTML == 'Nome que sera alterado\n       cargo da pessoa') {
    campo.innerHTML = 'Nome que ira alterar o anterior<br>\n        cargo da pessoa';
  }
}