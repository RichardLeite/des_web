listaAnime = [];
isPrimeiraRender = true;
let indicePagina = 1;
buscarAnimes(indicePagina, 60);

async function gerarCard(anime) {
    let content = document.querySelector('.container__content');
    let card = document.createElement('div');
    card.classList.add('container__content__card');

    const image = document.createElement('img');
    image.src = anime.image;

    const titulo = document.createElement('h3');
    titulo.innerText = anime.title;

    const descricao = document.createElement('p');
    // descricao.innerText = anime.synopsis.substring(0, 150);
    descricao.innerText = anime.synopsis.split('.')[0].length < 150 ? anime.synopsis.split('.')[0] + anime.synopsis.split('.')[1] : anime.synopsis.split('.')[0];
    descricao.innerText = descricao.innerText + '.';

    // descricao.onmouseover = carregarDescricaoCompleta(descricao, anime.synopsis);
    
    descricao.addEventListener("mouseover", () => carregarDescricaoCompleta(descricao, anime.synopsis))
    descricao.addEventListener("mouseleave", () => {
      descricao.innerText = anime.synopsis.split('.')[0].length < 150 ? anime.synopsis.split('.')[0] + anime.synopsis.split('.')[1] : anime.synopsis.split('.')[0];
      descricao.innerText = descricao.innerText + '.';
    });

    const lerMais = document.createElement('span');
    lerMais.classList.add('container__content__card__mais');

    descricao.appendChild(lerMais);

    const linkPagina = document.createElement('a');
    linkPagina.innerText = 'Link do Anime';
    linkPagina.href = anime.link;
    linkPagina.target = 'blank';

    card.appendChild(image);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(linkPagina);

    content.appendChild(card);
}

function buscarAnimes(indexPaginaBusca, numeroItensPagina) {
    const options = {
        method: 'GET',
        headers: {
          // TODO: Remover as secrets
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };
    
    const url = `https://anime-db.p.rapidapi.com/anime?page=${indexPaginaBusca}&size=${numeroItensPagina}&sortOrder=asc`;
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            response.data.forEach(element => {
              listaAnime.push(element);
            });
        })
        .catch(err => console.error(err));
    
        setTimeout(() => {
          exibirCards();
        }, 2000);

    
}

function exibirCards() {
  if (isPrimeiraRender) {
    for(let index = 0; index < 20; index++) {
      gerarCard(listaAnime[index]);
    }
    isPrimeiraRender = false;
  }
}

function carregarMaisItens() {
  if (!isPrimeiraRender) {
    let qntsItensExibidos = document.querySelectorAll('.container__content__card').length;
    if (qntsItensExibidos > listaAnime.length) {
      buscarAnimes(indicePagina++, 60)
    }
    let index = qntsItensExibidos;
    const itemParada = index + 20;
    for(index; index < itemParada; index++) {
      gerarCard(listaAnime[index]);
    }
  }
}

function carregarDescricaoCompleta(elemento, descricao) {
  elemento.innerText = descricao;
}

function buscarAnime(event) {
  const nome = event.target.value;


  setTimeout(() => {

    const listaExibir = document.querySelectorAll('.container__content__card')

    listaExibir.forEach(item => {
      return item.childNodes[1].textContent.toLocaleLowerCase().includes(nome.toLocaleLowerCase());
    });

    // listaExibir.filter(item => {
      
    // })

  console.log(listaExibir)
  }, 3000);

}