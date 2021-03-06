import { NegociacoesView, MensagemView } from '../views/Index';
import { Negociacao, Negociacoes } from '../models/Index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController{
  @domInject('#data')
  private _inputData: JQuery;
  
  @domInject('#quantidade')
  private _inputQuantidade: JQuery;
  
  @domInject('#valor')
  private _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ','));

    if(!this._ehDiaUtil(data)){
      this._mensagemView.update('Somente negociações em dias úteis, por favor!');
    }

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }

  private _ehDiaUtil(data: Date) {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}