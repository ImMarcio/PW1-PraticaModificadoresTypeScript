class PessoaJuridica extends Pessoa {
    constructor(cnpj, nome, idade, dataNascimento) {
        super(nome, idade, dataNascimento);
        this.nome = nome + ' - Jurídica';
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return `CNPJ:${this.cnpj} - Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`;
    }
}
