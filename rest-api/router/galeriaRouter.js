const express = require('express');
const router = express.Router();
const GaleriaModel = require('../model/galeria/GaleriaModel');
const RespostaClass = require('../model/RespostaClass');

const fs = require('fs');
const pastaPublica = './public/images/';

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

router.get('/:id?', function(req, resp, next){
    GaleriaModel.getId(req.params.id, function(erro, retorno){
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

router.post('/?', function(req, resp, next){
    let resposta = new RespostaClass();

    if(req.body.dados_imagem != null){

        //salvar a imagem
    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    let dataAtual = new Date().toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/-/g, '').replace(/ /g, '');
    let nomeImagemCaminho = pastaPublica + dataAtual + req.body.dados_imagem.nome_arquivo;
    fs.writeFileSync(nomeImagemCaminho, bitmap);

    req.body.caminho = nomeImagemCaminho;

        GaleriaModel.adicionar(req.body, function(erro, retorno){
            
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro inesperado';
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "cadastro realizado com sucesso"
                }else{
                    resposta.erro = true
                    resposta.msg = "Não foi possível realizar operação"
                }
            }
            console.log('resp', resposta);
            resp.json(resposta);
        })
    }else{
        resposta.erro = true;
        resposta.msg = "Não foi enviada a imagem";
        resp.json(resposta);
    }

    
})

router.put('/', function(req, resp, next){
    let resposta = new RespostaClass();
    
    //salvar a imagem
    if(req.body.dados_imagem != null){

    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    let dataAtual = new Date().toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/-/g, '').replace(/ /g, '');
    let nomeImagemCaminho = pastaPublica + dataAtual + req.body.dados_imagem.nome_arquivo;
    fs.writeFileSync(nomeImagemCaminho, bitmap);

    req.body.caminho = nomeImagemCaminho;

    }
        GaleriaModel.editar(req.body, function(erro, retorno){
            
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro inesperado';
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "registro alterado com sucesso"
                }else{
                    resposta.erro = true
                    resposta.msg = "Não foi possível realizar a alteração"
                }
            }
            console.log('resp', resposta);
            resp.json(resposta);
        })
    }    
)

router.delete('/:id?', function(req, resp, next){
    GaleriaModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro inesperado';
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "registro deletado com sucesso"
            }else{
                resposta.erro = true
                resposta.msg = "Não foi possível excluir o registro"
            }
            resposta.dados = retorno;
        }

        resp.json(resposta);
    })
})
module.exports = router;