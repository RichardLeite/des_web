const responseModel = require('../../helpers/responseModel');

module.exports = (app, endpoint) => {
  app.get(endpoint + '/', (req, res) => {
    const response = `{
   "profile":{
      "nome":"Lucas Jesus",
      "username":"lucassj",
      "imagem":"https://media-exp1.licdn.com/dms/image/D4D03AQFDv3Ba1gcuVg/profile-displayphoto-shrink_200_200/0/1666381401047?e=1672272000&v=beta&t=6ugfdM4va4AoaPOHiQCUs6rV_crcUspNYfK8eSnnexo"
   }
}`;
    setTimeout(() => {
      // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
      responseModel.sucess(res, response);
    }, responseModel.delay());
  });
}
