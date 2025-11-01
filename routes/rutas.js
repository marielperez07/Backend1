import { Router } from "express";
import {nuevoContacto, mostrarContactos, buscarPorId, editarContacto, borrarContacto, buscarContacto} from "../db/contactobd.js"
const router = Router();
var artistas=["Bethoven","Van Gogh","Mozart","Picasso"]

router.get("/", function (req, res) {
  res.render("home",{artistas}); // va a buscar views/home.ejs
});

router.get("/info/:c", function (req, res) {
  var c = req.params.c
  console.log(c)
  res.render("info",{c});
});

router.get("/contact", function(req,res){
	res.render("contact");
});

router.post("/contactanos", async function(req,res){
  var nombre= req.body.nombre
  var edad=req.body.edad
  console.log("Nombre: "+nombre+"Edad: "+edad)
  const respuestaMongo = await nuevoContacto(req.body)
  console.log(respuestaMongo)
  res.render("respuesta", {nombre,edad})
});
router.get("/mostrarContactos", async function(req, res){
  const contactosBD=await mostrarContactos()
  res.render("mostrarContactos",{contactosBD})
})
router.get("/editar/:id", async function(req,res){
  const id=req.params.id
  const contactoBD=await buscarPorId(id)
  res.render("editarContacto",{contactoBD})
})

router.get("/editarContacto", async function(req, res){
  const id= req.body.id
  const respuestaMongo=await editarContacto(req.body)
  console.log(respuestaMongo)
  res.redirect("/mostrarContactos")
})

router.get("/borrar/:id", async function(req,res){
  const id=req.params.id
  const respuestaMongo=await borrarContacto(id)
  res.redirect("/mostrarContactos")
})

router.post("/buscarContacto", async function(req,res){
  const nombre=req.body.nombre
  const contactosBD=await buscarContacto(nombre)
  res.render("mostrarContactos", {contactosBD})
})


export default router;

