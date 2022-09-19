buscarAnimes();
readSingleFile('./keys.txt')

function readSingleFile(e) {
    var file = e.target.files[0];
    console.log(file);
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsText(file);
  }
  
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
  }


function buscarImagem() {

}

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


    const lerMais = document.createElement('span');
    lerMais.classList.add('container__content__card__mais');

    descricao.appendChild(lerMais);

    const linkPagina = document.createElement('a');
    linkPagina.innerText = 'Link do Anime';
    linkPagina.href = anime.link;

    card.appendChild(image);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(linkPagina);

    content.appendChild(card);


    //window.open('http://google.com/search?q=', univerdidade.name);


}

function buscarAnimes(event) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };
    
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=50&sortOrder=asc';
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            response.data.forEach(element => {
            gerarCard(element);
            });
        })
        .catch(err => console.error(err));

    // const url = 'http://universities.hipolabs.com/search?country=';
    // fetch(`${url}${pais}`).then(resp => resp.json())
    // .then(data => {
    //     data.forEach(element => {
    //         gerarCard(element);
    //     });
    // }).catch(error => console.error(error));
}