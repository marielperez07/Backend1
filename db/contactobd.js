import Contacto from "../models/modelContacto.js"

export async function nuevoContacto({nombre, edad}){
	const contacto = new Contacto({nombre, edad})//objeto contacto, viene de la clase de mongoose y se guarda en mongodb
	const respuestaMongo = await contacto.save()
	return respuestaMongo
}

export async function mostrarContactos(){
	const contactosBD= await Contacto.find()
	//console.log(contactosBD)
	return contactosBD
}
export async function buscarPorId(id){
	const contactoBD=await Contacto.find()
	return contactoBD
}
export async function editarContacto({id,nombre,edad}){
  const respuestaMongo=await Contacto.findByIdAndUpdate(id,{nombre,edad})
  return respuestaMongo
}
export async function borrarContacto(id){
	const respuestaMongo=await Contacto.findByIdAndDelete(id)
	return respuestaMongo
}
export async function buscarContacto(nombre){
	const contactosBD=await Contacto.find({nombre})
	return contactosBD
}