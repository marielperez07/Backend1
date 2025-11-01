import mongoose from "mongoose"

const contactoSchema = new mongoose.Schema({
	nombre:{
		type:String,
		required:true,
		trim:true,//quita los espacios
		unique:false
	},
	edad:{
		type:Number,
		required:true,
		trim:true,
		unique:false
	}
})
export default mongoose.model("Contacto", contactoSchema)

