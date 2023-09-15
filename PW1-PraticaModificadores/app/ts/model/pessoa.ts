class Pessoa{
    private _nome:string;
    private _idade:number;
    private _dataNascimento:string;

    constructor(nome:string, idade:number, dataNascimento:string){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome(){
        return this._nome;
    }

    set nome(nomeNovo:string){
        this._nome = nomeNovo;
    }

    get idade(){
        return this._idade;
    }

   set idade(idadeNova:number){
       this._idade = idadeNova ;
    }

    get dataNascimento(){
        return this._dataNascimento;
    }
    set dataNascimento(novaDataNascimento){
        this._dataNascimento = novaDataNascimento;
    }

    toString(){
        return `Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`
    }



}