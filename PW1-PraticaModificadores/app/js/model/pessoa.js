class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }
    get idade() {
        return this._idade;
    }
    set idade(idadeNova) {
        this._idade = idadeNova;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(novaDataNascimento) {
        this._dataNascimento = novaDataNascimento;
    }
    toString() {
        return `Nome: ${this.nome} - Idade: ${this.idade} - data de Nascimento ${this.dataNascimento}`;
    }
}
