const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

// Inicializacion
const app = express();

// Configuración
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({ 
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'),'Layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
  //helpers: require('./libs/handelbars')
}));

app.set('view engine','.hbs');

// Rutas
app.use('/', require('./links.js'));
app.use(express.static(__dirname));


// Público
app.use(express.static(path.join(__dirname, 'public')));

// Arrancando Servidor

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto : ',app.get('port'));
});