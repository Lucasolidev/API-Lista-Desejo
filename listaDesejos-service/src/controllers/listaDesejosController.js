const listaDesejosRepository = require('../repositories/listaDesejosRepository');
const ListaDesejos = require('../models/listaDesejosModel');

exports.criarListaItem = async (req, res) => {
  try {
    const { idGrupo, NomeGrupo, idParticipante, NomeParticipante, listaItens } = req.body;
    const listaDesejos = await ListaDesejos.create({ idGrupo, NomeGrupo, idParticipante, NomeParticipante, listaItens });
    res.status(201).json({ success: true, listaDesejos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao criar a lista de desejos.' });
  }
};

exports.addItemLista = async (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    const listaDesejos = await ListaDesejos.findById(id);
    if (!listaDesejos) {
      return res.status(404).json({ success: false, message: 'Lista de desejos não encontrada.' });
    }
    listaDesejos.listaItens.push(item);
    await listaDesejos.save();
    res.status(200).json({ success: true, listaDesejos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao adicionar item na lista de desejos.' });
  }
};

exports.delItemLista = async (req, res) => {
  try {
    const { id, item } = req.params;
    const listaDesejos = await ListaDesejos.findById(id);
    if (!listaDesejos) {
      return res.status(404).json({ success: false, message: 'Lista de desejos não encontrada.' });
    }
    listaDesejos.listaItens = listaDesejos.listaItens.filter((i) => i !== item);

    await listaDesejos.save();
    res.status(200).json({ success: true, listaDesejos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao remover item da lista de desejos.' });
  }
};

exports.getAllItensLista = async (req,res) => {
 try {
  const { idLista, NomeParticipante } = req.params;
  const listaDesejos = await ListaDesejos.findById(idLista);

   res.status(200).json({ message: 'Itens da lista de desejos recuperados com sucesso!',NomeParticipante: listaDesejos.NomeParticipante, listaItens: listaDesejos.listaItens });
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error });
 }
};