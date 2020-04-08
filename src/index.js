const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
/**
 *  Rota / recurso
 */

 /**
  * Metodos http:
  * 
  * GET: Buscar um info no backend
  * POST: Criar uma info no  backend
  * PUT: Alterar uma info no backend
  * DELETE: Deletar uma info no backend
  */

  /**
   * Tipos de parametros
   * 
   * Query Params: sao parametros nomeados enviados na rota apos o simbolo "?" 
   * servem para filtro, paginacao etc
   * Route Params: sao parametros utilizados para identificar recursos
   * Request Body: 
   */




