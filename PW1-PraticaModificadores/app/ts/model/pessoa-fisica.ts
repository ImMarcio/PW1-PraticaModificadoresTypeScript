class PessoaFisica extends Pessoa{
    private _cpf:string
    constructor(cpf:string, nome:string, idade:number, dataNascimento:string){
        super (nome ,idade,dataNascimento);
        this.nome = nome + ' - Física';
        this._cpf=cpf
    }

    get cpf(){
        return this._cpf;
    }
    toString(){
        return `CPF:${this.cpf} - Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`
    }

}