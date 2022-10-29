const responseModel = require('../../helpers/responseModel.js');
const dummyJson = require('dummy-json');
const dummyJsonHelpers = require('../../helpers/dummy-json-helpers');

module.exports = (app, endpoint) => {
    app.get(endpoint + '/', (req, res) => {
        const response = `{
      "lista":  [
          {
            "titulo": "Interstellar",
            "genero": ["Aventura", "Drama", "Ficção científica"],
            "imagem": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
            "descricao": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life. —ahmetkozan",
            "faixaetaria": "10",
            "avaliacao": 8.6
          },
                    {
            "titulo": "Interstellar",
            "genero": ["Aventura", "Drama", "Ficção científica"],
            "imagem": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
            "descricao": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life. —ahmetkozan",
            "faixaetaria": "10",
            "avaliacao": 8.6
          },
                    {
            "titulo": "Interstellar",
            "genero": ["Aventura", "Drama", "Ficção científica"],
            "imagem": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
            "descricao": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life. —ahmetkozan",
            "faixaetaria": "10",
            "avaliacao": 8.6
          }
        ]
}`;
        setTimeout(() => {
            // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
            responseModel.sucess(res, response);
        }, responseModel.delay());
    });
}
