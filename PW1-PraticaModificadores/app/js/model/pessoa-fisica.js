class PessoaFisica extends Pessoa {
    constructor(cpf, nome, idade, dataNascimento) {
        super(nome, idade, dataNascimento);
        this.nome = nome + ' - Física';
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `CPF:${this.cpf} - Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`;
    }
}
