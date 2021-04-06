System.register(["../helpers/decorators/logarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var logarTempoDeExecucao_1, Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (logarTempoDeExecucao_1_1) {
                logarTempoDeExecucao_1 = logarTempoDeExecucao_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
            };
            __decorate([
                logarTempoDeExecucao_1.logarTempoDeExecucao()
            ], Negociacoes.prototype, "paraArray", null);
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
