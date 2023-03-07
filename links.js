const express = require("express");
const rutas = express.Router();

rutas.get('/zodiaco/:yyyymmdd', (req, res) => {
    const fecha = new Date(req.params.yyyymmdd.substr(0, 4), req.params.yyyymmdd.substr(4, 2), req.params.yyyymmdd.substr(6, 2));
    let signo = '';
    let describ = '';
    if ((fecha.getMonth() == 3 && fecha.getDate() >= 21) || (fecha.getMonth() == 4 && fecha.getDate() <= 19)) {
      signo = "Es Aries";
      describ = 'Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego'
    }
    if ((fecha.getMonth() == 4 && fecha.getDate() >= 20) || (fecha.getMonth() == 5 && fecha.getDate() <= 20)) {
      signo = "Es Tauro";
      describ = 'Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra'
    }
    if ((fecha.getMonth() == 5 && fecha.getDate() >= 21) || (fecha.getMonth() == 6 && fecha.getDate() <= 20)) {
      signo = "Es Geminis";
      describ = 'Géminis es un signo mutable que forma parte del elemento aire'
    }
    if ((fecha.getMonth() == 6 && fecha.getDate() >= 21) || (fecha.getMonth() == 7 && fecha.getDate() <= 20)) {
      signo = "Es Cancer";
      describ = 'Cáncer es un signo cardinal y comprendido dentro de los signos de agua'
    }
    if ((fecha.getMonth() == 7 && fecha.getDate() >= 21) || (fecha.getMonth() == 8 && fecha.getDate() <= 22)) {
      signo = "Es Leo";
      describ = 'El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco'
    }
    if ((fecha.getMonth() == 8 && fecha.getDate() >= 23) || (fecha.getMonth() == 9 && fecha.getDate() <= 23)) {
      signo = "Es Virgo";
      describ = 'Virgo es un signo mutable y de tierra; representado por una virgen'
    }
    if ((fecha.getMonth() == 9 && fecha.getDate() >= 24) || (fecha.getMonth() == 10 && fecha.getDate() <= 23)) {
      signo = "Es Libra";
      describ = 'Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco'
    }
    if ((fecha.getMonth() == 10 && fecha.getDate() >= 24) || (fecha.getMonth() == 11 && fecha.getDate() <= 22)) {
      signo = "Es Escorpius";
      describ = 'Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco'
    }
    if ((fecha.getMonth() == 11 && fecha.getDate() >= 23) || (fecha.getMonth() == 12 && fecha.getDate() <= 22)) {
      signo = "Es Sagitario";
      describ = 'Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco'
    }
    if ((fecha.getMonth() == 12 && fecha.getDate() >= 23) || (fecha.getMonth() == 1 && fecha.getDate() <= 22)) {
      signo = "Es Capricornio";
      describ = 'Capricornio es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible'
    }
    if ((fecha.getMonth() == 1 && fecha.getDate() >= 23) || (fecha.getMonth() == 2 && fecha.getDate() <= 20)) {
      signo = "Es Acuario";
      describ = 'Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal'
    }
    if ((fecha.getMonth() == 2 && fecha.getDate() >= 21) || (fecha.getMonth() == 3 && fecha.getDate() <= 20)) {
      signo = "Es Piscis";
      describ = 'Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos'
    }
    res.render('zodiaco', { signo: signo, describ: describ });
});


rutas.get('/astrologia-china/:yyyymmdd', (req, res) => {
    const fecha = req.params.yyyymmdd;
    let signo = '';
    let describ = '';
    let annio = (parseInt(fecha.substr(0,4))%12);
    switch(annio) {
        case 0:
        signo = "El Mono";
        describ = 'Animal más parecido al ser humano, es ingenioso, divertido, simpático, de mente rápida y despierta, comprador, persuasivo, sociable, capaces de resolver cualquier problema por difícil que sea con soltura'
        break;
        case 1:
        signo = "El Gallo";
        describ = 'Atractivo y seductor, con talento y apreciado. Son meticulosos, eficientes, ordenados, buenos conversadores, observadores, egoístas, usureros, pragmáticos y muy familiares.'
        break;
        case 2:
        signo = "El Perro";
        describ = 'El perro es un ser dedicado al trabajo, honesto, confiable, diligente, con un gran sentido de la justicia y la lealtad.'
        break;
        case 3:
        signo = "El Cerdo";
        describ = 'Es un animal sincero, honesto, confiado, educado, cariñoso, servicial, valiente, decidido, con gran fuerza de voluntad, sin grandes pretensiones ni vanidad, con los pies en la tierra.'
        break;
        case 4:
        signo = "La Rata";
        describ = 'Los nacidos bajo el signo de la Rata son persona sabias a las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios'
        break;
        case 5:
        signo = "El Buey";
        describ = 'Los búfalos o bueyes son animales pacientes y tranquilos, que irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo'
        break;
        case 6:
        signo = "El Tigre";
        describ = 'Las personas de este signo son muy pasionales y llenas de energía. No pasan desapercibidas, son aventureros, independientes, ingeniosos, impulsivos y les gusta la diversión'
        break;
        case 7:
        signo = "El Conejo";
        describ = 'Los que nacen en el Año del Conejo reúnen extraordinarias cualidades humanas: son prudentes, inteligentes, afables, discretos, previsores, atentos y benevolentes'
        break;
        case 8:
        signo = "El Dragón";
        describ = 'Símbolo del Emperador en China, el dragón es imaginativo, magnánimo, emprendedor, afortunado y poderoso. Está lleno de fuerza y vitalidad'
        break;
        case 9:
        signo = "La Serpiente";
        describ = 'Las personas Serpientes son astutas, saben lo que quieren y cómo conseguirlo. Su conversación es elegante y fluida. Son intensos y prudentes a la vez'
        break;
        case 10:
        signo = "El Caballo";
        describ = 'Populares, optimistas, llenos de alegría, aventureros, elocuentes, impacientes, emprendedores, entusiastas con la vida, grandes amantes y amigos'
        break;
        case 11:
      signo = "La Cabra";
      describ = 'La cabra es creativa, artística, positiva, elegante, femenina, afable, compasiva, llorona, sensible, soñadora, orgullosa y triste.'
      break;
    }
    res.render('zodiaco', { signo: signo, describ: describ });
});


module.exports = rutas;