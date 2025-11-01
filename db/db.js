import mongoose from "mongoose";
import 'dotenv/config';

async function conectarBD() {
  try {
    const conexion = await mongoose.connect(process.env.KEY_MONGO);
    console.log("Conexión establecida con MongoDB");
  } catch (err) {
    console.log("Error al conectar a MongoDB:", err);
  }
}

export default conectarBD;