const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.passo.ativo'); 
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    if (atual && document.getElementById(proximoPasso)) { 
      atual.classList.remove('ativo');
      document.getElementById(proximoPasso).classList.add('ativo');
    } else {
      console.error('Erro: Elemento atual ou próximo passo não encontrado.'); 
    }
  });
});
