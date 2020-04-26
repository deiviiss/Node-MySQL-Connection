/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

const dbConection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConection();

  // Realiza la consulta.

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, result) => {

      console.log(result);
      res.render('news/news', {
        result: result
      });
    });
  });


  app.post('/rutas', (req, res) => {
    const { asesor, cliente } = req.body;
    connection.query('INSERT INTO clientes SET?', {
      asesor,
      cliente
    }, (err, result) => {
      res.redirect('/');
    });
  });


}