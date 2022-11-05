const responseModel = require('../../helpers/responseModel.js');

module.exports = (app, endpoint) => {
  app.get(endpoint + '/', (req, res) => {
    const response = `{
      "lista":  [
          {
            "titulo": "House of the Dragon",
            "genero": ["Drama", "Fantasia"],
            "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/22/05/30/15/56/1469166.jpg",
            "descricao": "A série se passa 200 antes do eventos de Game of Thrones e apresenta como o império Targeryan chegou ao fim. Em meio a uma luta por poder, os irmãos Aegon II e Rhaenyra almejam chegar ao trono de ferro custe o que custar. ",
            "faixaetaria": "18",
            "avaliacao": 9.0
          },
                    {
            "titulo": "Game of Thrones",
            "genero": ["Drama", "Fantasia"],
            "imagem": "https://br.web.img2.acsta.net/c_310_420/pictures/19/03/21/16/15/4239577.jpg",
            "descricao": "Nove famílias da nobreza lutam pelo controle dos territórios de Westeros, um lugar onde os verões podem durar vários anos e o inverno, a vida inteira. Enquanto isso, uma antigo inimigo retorna para ameaçá-los. ",
            "faixaetaria": "18",
            "avaliacao": 9.8
          },
          {
            "titulo": "Stranger Things",
            "genero": ["Fantasia", "Drama", "Suspense"],
            "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/19/07/10/20/01/2331295.jpg",
            "descricao": "Após o misterioso desaparecimento de Will (Noah Schnapp), o xerife Jim Hopper (David Harbour) e os melhores amigos do garoto começam a procurá-lo, descobrindo que o caso pode estar relacionado com o sinistro laboratório da cidade.",
            "faixaetaria": "16",
            "avaliacao": 9.5
          },
          {
            "titulo": "Prison Break",
            "genero": ["Drama", "Suspense"],
            "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/17/03/16/16/04/274512.jpg",
            "descricao": "Após a prisão de Lincoln Burrows (Dominic Purcell), condenado por um crime que não cometeu, o engenheiro Michael Scofield (Wentworth Miller) bola um plano para tirar o irmão da cadeia. Enviado ...",
            "faixaetaria": "16",
            "avaliacao": 9.0
          },
          {
            "titulo": "The Big Bang Theory",
            "genero": ["Comedia"],
            "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/14/01/23/13/30/209537.jpg",
            "descricao": "Leonard e Sheldon são dois físicos brilhantes que dividem um apartamento em Pasadena. A dupla tem pouco traquejo social, em especial por serem tão inteligentes e extremamente geeks. Eles passam a maior parte do tempo com os amigos Howard e Raj. A dinâmica do grupo muda quando a jovem aspirante a atriz Penny se muda para o apartamento da frente.",
            "faixaetaria": "12",
            "avaliacao": 9.0
          }
        ]
}`;
    setTimeout(() => {
      // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');

      responseModel.sucess(res, response);
    }, responseModel.delay());
  });
}
