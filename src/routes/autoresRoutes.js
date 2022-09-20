import express from "express";
import autorController from "../controller/autoresController.js";

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listarAutoresPorID)
    .post("/autores", autorController.cadastrarAutores)
    .put("/autores/:id", autorController.atualizarAutores)
    .delete("/autores/:id", autorController.excluirAutores)
    
export default router;
