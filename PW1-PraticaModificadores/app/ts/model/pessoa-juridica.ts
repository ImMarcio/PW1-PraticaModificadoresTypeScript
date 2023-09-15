class PessoaJuridica extends Pessoa{
    private _cnpj:string;
    constructor(cnpj:string, nome:string, idade:number, dataNascimento:string){
        super (nome ,idade,dataNascimento)
        this.nome = nome + ' - Jurídica';
        this._cnpj = cnpj;
    }

    get cnpj(){
        return this._cnpj;
    }

    toString(){
        return `CNPJ:${this.cnpj} - Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`
    }

}