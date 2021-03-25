System.register(["../views/Index", "../models/Index"], function (exports_1, context_1) {
    "use strict";
    var Index_1, Index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            },
            function (Index_2_1) {
                Index_2 = Index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Index_2.Negociacoes();
                    this._negociacoesView = new Index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new Index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Index_2.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
