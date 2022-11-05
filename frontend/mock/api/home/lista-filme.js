const responseModel = require('../../helpers/responseModel');

module.exports = (app, endpoint) => {
    app.get(endpoint + '/', (req, res) => {
        const response = `{

        }`;
        setTimeout(() => {
            // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
            responseModel.sucess(res, response);
        }, responseModel.delay());
    });
}
