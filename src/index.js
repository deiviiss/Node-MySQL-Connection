/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

const app = require('./config/server');

require('./app/routes/rutas')(app);


//starting the server

app.listen(app.get('port'), () => {
  console.log('servidor en puerto', app.get('port'));
})