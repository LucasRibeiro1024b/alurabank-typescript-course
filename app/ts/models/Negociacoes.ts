import { logarTempoDeExecucao } from '../helpers/decorators/logarTempoDeExecucao';
import {Negociacao} from './Negociacao';

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  @logarTempoDeExecucao()
  paraArray(): Negociacao[]{
    //if not typed concat will deal with Any type
    return ([] as Negociacao[]).concat(this._negociacoes);
  }
}