const ListaDesejos = require('../models/listaDesejosModel');

exports.criarListaItem = async (data) => {
  try {
    const { idGrupo, NomeGrupo, idParticipante, NomeParticipante, listaItens } = data;
    const listaDesejos = await ListaDesejos.create({ idGrupo, NomeGrupo, idParticipante, NomeParticipante, listaItens });
    return listaDesejos;
  } catch (err) {
    console.error(err);
    throw new Error('Erro ao criar a lista de desejos.');
  }
};

exports.addItemLista = async (id, item) => {
  try {
    const listaDesejos = await ListaDesejos.findById(id);
    if (!listaDesejos) {
      throw new Error('Lista de desejos não encontrada.');
    }
    listaDesejos.listaItens.push(item);
    await listaDesejos.save();
    return listaDesejos;
  } catch (err) {
    console.error(err);
    throw new Error('Erro ao adicionar item na lista de desejos.');
  }
};

exports.delItemLista = async (id, item) => {
  try {
    const listaDesejos = await ListaDesejos.findById(id);
    if (!listaDesejos) {
      throw new Error('Lista de desejos não encontrada.');
    }
    listaDesejos.listaItens = listaDesejos.listaItens.filter((i) => i !== item);

    await listaDesejos.save();
    return listaDesejos;
  } catch (err) {
    console.error(err);
    throw new Error('Erro ao remover item da lista de desejos.');
  }
};

exports.getAllItensLista = async (idLista) => {
 try {
  const listaDesejos = await ListaDesejos.findById(idLista);
  if (!listaDesejos) {
      throw new Error('Lista de desejos não encontrada.');
    }

  return listaDesejos.listaItens;
 } catch (error) {
   console.error(error);
   throw new Error('Erro ao recuperar itens da lista de desejos.');
 }
};
