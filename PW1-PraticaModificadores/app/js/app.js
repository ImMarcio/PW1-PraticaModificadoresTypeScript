let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
const pessoa = new Pessoa('Márcio', 20, '20/11/2002');
const pessoaFisica = new PessoaFisica('20221370023', 'Marcos', 20, '20/11/2002');
const pessoaJuridica = new PessoaJuridica('202356898', 'Allan', 20, '20/11/2002');
console.log(pessoa);
console.log(pessoaFisica);
console.log(pessoaJuridica);
