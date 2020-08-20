const express = require('express');
const router = express.Router();
const GaleriaModel = require('../model/galeria/GaleriaModel');
const RespostaClass = require('../model/RespostaClass');

router.get('/', function(req, resp, next){
    GaleriaModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro inesperado';
        }else{
            resposta.dados = retorno;
        }

        resp.json(resposta);
    })
})

module.exports = router;