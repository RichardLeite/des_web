const responseModel = require('../../helpers/responseModel.js');

module.exports = (app, endpoint) => {
  app.get(endpoint + '/', (req, res) => {
    const response = `{
   "lista":[
      {
         "titulo":"O Poderoso Chefão",
         "genero":[
            "Policial",
            "Drama"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
         "descricao":"Don Vito Corleone (Marlon Brando) é o chefe de uma 'família' de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo 'justiça', vingança na verdade contra membros de uma quadrilha, que espancaram",
         "faixaetaria":"16",
         "avaliacao":9.9
      },
      {
         "titulo":"Vingadores: Ultimato",
         "genero":[
            "Aventura",
            "Ação",
            "Fantasia"
         ],
         "imagem":"https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg",
         "descricao":"Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia.",
         "faixaetaria":"16",
         "avaliacao":9.6
      },
      {
         "titulo":"O Auto da Compadecida",
         "genero":[
            "Aventura",
            "Comedia"
         ],
         "imagem":"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/75/19962458.jpg",
         "descricao":"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa ...",
         "faixaetaria":"12",
         "avaliacao":9.8
      },
      {
         "titulo":"Django Livre",
         "genero":[
            "Faroeste"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/07/53/20391069.jpg",
         "descricao":"Django é um escravo liberto que se torna um mercenário. Com a ajuda do caçador de recompensas alemão King Schultz, ele tenta livrar sua esposa das mãos do fazendeiro escravocrata Calvin Candie.",
         "faixaetaria":"14",
         "avaliacao":9.8
      },
      {
         "titulo":"Sempre ao Seu Lado",
         "genero":[
            "Drama",
            "Familia"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/97/20028681.jpg",
         "descricao":"Parker Wilson (Richard Gere) é um professor universitário que, ao retornar do trabalho, encontra na estação de trem um filhote de cachorro da raça akita, conhecido por sua lealdade. Sem ter como deixá-lo na estação, Parker o leva para casa mesmo sabendo que Cate (Joan Allen), sua esposa, é contra a presença de um cachorro. Aos poucos ...",
         "faixaetaria":"14",
         "avaliacao":9.8
      },
      {
         "titulo":"Interestelar",
         "genero":[
            "Drama",
            "Ficção cientifica"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg",
         "descricao":"Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao ...",
         "faixaetaria":"16",
         "avaliacao":9.8
      }
   ]
}`;
    setTimeout(() => {
      // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
      responseModel.sucess(res, response);
    }, responseModel.delay());
  });
}
