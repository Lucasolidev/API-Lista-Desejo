const express = require('express');
const router = express.Router();

const listaDesejosController = require('../controllers/listaDesejosController');

router.post('/', listaDesejosController.criarListaItem);
router.put('/:id/item', listaDesejosController.addItemLista);
router.delete('/:id/item/:item', listaDesejosController.delItemLista);
router.get('/:idLista/item', listaDesejosController.getAllItensLista);

module.exports = router;