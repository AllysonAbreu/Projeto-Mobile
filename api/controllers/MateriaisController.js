const database = require('../models')

class MateriaisController{

  static async pegaTodasOsMateriais(req,res) {
    try {
      const todasOsMateriais = await database.Materiais.findAll()
      return res.status(200).json(todasOsMateriais)
    } catch (error) {
      return res.status(500).json(error.message) 
    }      
  }

  static async pegaUmMaterial(req,res) {
    const { id } = req.params
    try {
      const umMaterial = await database.Materiais.findOne({
        where: {
           id: Number(id)
          }
        })
        return res.status(200).json(umMaterial)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMaterial(req,res) {
    const novoMaterial = req.body
    try {
      const novaMaterialCriada = await database.Materiais.create(novoMaterial)
      return res.status(200).json(novaMaterialCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMaterial(req,res) {
    const novasInfos = req.body
    const { id } = req.params
    try {
      await database.Materiais.update(novasInfos,{where: {id: Number(id)}})
      const MaterialAtualizado =  await database.Materiais.findOne({where:{id:Number(id)}})
      return res.status(200).json(MaterialAtualizado) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMaterial(req,res) {
    const { id } = req.params
    try {
      await database.Materiais.destroy({where:{id: Number(id)}})
      return res.status(200).json({mensagem: `Material de Id ${id} deletado.`})
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  
  static async pegaUmMaterial(req,res) {
    const { docenteId, materialId } = req.params
    try {
      const umMaterial = await database.Materiais.findOne({
        where: {
          id: Number(materialId),
          docente_id: Number(docenteId)
          }
        })
        return res.status(200).json(umMaterial)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}
module.exports = MateriaisController