import getMongoCollection from "./LigacaoAoMongoDB"
import { ObjectId } from "mongodb"
const BASE_DE_DADOS = "hack304"
const COLECAO_PRODUTOS = "Produtos"
const COLECAO_CARINHO = "Carinho"
// export async function CriarCarinho(carinho) {
//   const collection = await getMongoCollection(BASE_DE_DADOS,COLECAO_CARINHO)
//   const result = await collection.insertOne(carinho)
//   return result.insertedId
// }
// export async function ObterCarinho(nomeDoUtilizador) {
//   const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_CARINHO)
//   const result = await collection.findOne({nome: nomeDoUtilizador})
//   return result
// }
export async function ObterTodosOsProdutos() {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_PRODUTOS)
  const result = await collection.find().toArray()
  return result
}
export async function ObterTodosOsProdutosPorCategoria(madeira) {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_PRODUTOS)
  const result = await collection.find({type:madeira}).toArray()
  return result
}
export async function ObterOcarrinho() {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_CARINHO)
  const result = await collection.find().toArray()
  return result
}
export async function ObterUmProduto(id) {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_PRODUTOS)
  const result = await collection.findOne({ _id: ObjectId(id) })
  return result
}
export async function criarCarrinho({ _id, ...data }) {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_CARINHO)
  const result = await collection.insertOne(data)
  console.log(result.insertedId)
  return result.insertedId
}
export async function RemoverProduto(id) {
  const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_CARINHO)
  const result = await collection.deleteOne({_id: ObjectId(id)})
  console.log(result)
  return result.deletedCount
  
}























// export async function ObterOsProdutosDePlastico(plastico) {
//   const collection = await getMongoCollection(BASE_DE_DADOS,COLECAO_PRODUTOS)
//   const result = await collection.find({tipo: plastico}).toArray()
//   return result
// }
// export async function ObterOsProdutosDeMadeira(madeira) {
//   const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_PRODUTOS)
//   const result = await collection.find(tipo: madeira).toArray()
//   return result
// }
// export async function ObterOsProdutosDeCartao(cartao) {
//   const collection = await getMongoCollection(BASE_DE_DADOS, COLECAO_PRODUTOS)
//   const result = await collection.find(tipo: cartao).toArray()
//   return result
// }
