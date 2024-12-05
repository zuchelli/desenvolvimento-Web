// Evento que lida com o envio do formulário
document.getElementById('formulario-transacao').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o comportamento padrão do formulário
  const indiceEdicao = document.getElementById('indice-edicao').value;
  if (indiceEdicao === '-1') {
    adicionarTransacao(); // Se não estiver editando, adiciona nova transação
  } 
  else {
    atualizarTransacao(indiceEdicao); // Se estiver editando, atualiza transação existente
  }
});

// Função para adicionar uma nova transação
function adicionarTransacao() {
  // Pegando os valores do formulário
  const nome = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value;
  const data = document.getElementById('data').value;
  const valor = parseFloat(document.getElementById('valor').value);

  // Validação simples para garantir que tudo foi preenchido corretamente
  if (nome === '' || isNaN(valor) || valor <= 0) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const transacao = { nome, categoria, data, valor };

  // Pegando as transações salvas no LocalStorage ou criando uma lista nova
  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];
  transacoes.push(transacao);
  localStorage.setItem('transacoes', JSON.stringify(transacoes)); // Salvando a nova lista no LocalStorage

  // Resetando o formulário e exibindo as transações atualizadas
  document.getElementById('indice-edicao').value = '-1';
  resetarFormulario();
  exibirTransacoes();
  atualizarResumo();
}

// Função para atualizar uma transação existente
function atualizarTransacao(indice) {
  // Pegando a lista de transações do LocalStorage
  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

  // Pegando os valores atualizados do formulário
  const nome = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value;
  const data = document.getElementById('data').value;
  const valor = parseFloat(document.getElementById('valor').value);

  // Validação simples para garantir que tudo foi preenchido corretamente
  if (nome === '' || isNaN(valor) || valor <= 0) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Atualizando a transação na lista
  transacoes[indice].nome = nome;
  transacoes[indice].categoria = categoria;
  transacoes[indice].data = data;
  transacoes[indice].valor = valor;

  localStorage.setItem('transacoes', JSON.stringify(transacoes)); // Salvando a lista atualizada no LocalStorage

  // Resetando o formulário e exibindo as transações atualizadas
  document.getElementById('indice-edicao').value = '-1';
  //o -1 serve para mostrar que o formulario nao esta sendo editado,
  // que foi atualizado as existentes ou adicionando novas e esta pronto para receber novas mudancas
  resetarFormulario();
  exibirTransacoes();
  atualizarResumo();
}

// Função para exibir todas as transações na tabela
function exibirTransacoes() {
  const tabelaTransacoes = document.getElementById('tabela-transacoes').getElementsByTagName('tbody')[0];
  tabelaTransacoes.innerHTML = ''; // Limpa o conteúdo da tabela antes de adicionar as novas linhas

  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || []; //let variavel delimitada do bloco
  //Tenta recuperar os dados armazenados no localStorage sob a chave 'transacoes'.
  //Converte essa string JSON de volta em um objeto JavaScript (neste caso, para a array de transações).
  //Se não houver nenhum dado armazenado, ou se a recuperação falhar, usa uma array vazia [] como valor padrão.

  // Adicionando cada transação como uma linha na tabela
  transacoes.forEach(function(transacao, indice) {
    const linha = tabelaTransacoes.insertRow(); // Cria uma nova linha na tabela

    linha.insertCell(0).innerText = transacao.nome; // Adiciona o nome da transação na primeira célula da tabela
    linha.insertCell(1).innerText = transacao.categoria; // Adiciona a categoria da transação na segunda célula
    linha.insertCell(2).innerText = transacao.data; // Adiciona a data da transação na terceira célula
    linha.insertCell(3).innerText = transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Adiciona o valor formatado para o dinheiro brasileiro na quarta célula

    const acoesCelula = linha.insertCell(4); // Cria uma célula para as ações (editar/excluir)
    acoesCelula.innerHTML = '<button onclick="prepararEdicao(' + indice + ')">Editar</button>' +
                             '<button onclick="excluirTransacao(' + indice + ')">Excluir</button>'; // Adiciona os botões de editar e excluir que estao chamando a funcao quando apertados
  });
}

// Função para preparar o formulário para edição de uma transação
function prepararEdicao(indice) {
  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

  // Preenche o formulário com os dados da transação selecionada
  document.getElementById('indice-edicao').value = indice; //indice representa a posicao da transacao na array que sera adicionada o valor 
  document.getElementById('nome').value = transacoes[indice].nome;
  document.getElementById('categoria').value = transacoes[indice].categoria;
  document.getElementById('data').value = transacoes[indice].data;
  document.getElementById('valor').value = transacoes[indice].valor;
}

// Função para excluir uma transação
function excluirTransacao(indice) {
  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];
  //Tenta recuperar os dados armazenados no localStorage sob a chave 'transacoes'.
  //Converte essa string JSON de volta em um objeto JavaScript (neste caso, para a array de transações).
  //Se não houver nenhum dado armazenado, ou se a recuperação falhar, usa uma array vazia [] como valor padrão.

  transacoes.splice(indice, 1); // O método splice remove elementos de um array. Nesse caso, remove 1 elemento a partir do índice fornecido
  localStorage.setItem('transacoes', JSON.stringify(transacoes)); // Atualiza o LocalStorage

  exibirTransacoes(); // Exibe as transações atualizadas
  atualizarResumo(); // Atualiza o resumo financeiro
}

// Função para atualizar o resumo financeiro
function atualizarResumo() {
  let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];
  

  // Calcula os totais de receitas e despesas
  const totalReceitas = transacoes.filter(function(t) {
    return t.categoria === 'receita';//verifica se a transacao é receita ou despesa (sua categoria) logo abaixo
  }).reduce(function(acc, t) {//Reduz o array filtrado somando os valores das transações acc vai acumulando os valores da array t de transacoes.
    return acc + t.valor;//soma o valor de todas as transações que são receitas ou despesas abaixo.
  }, 0);//esse zero representa o valor inicial do acumulador da reduce
  const totalDespesas = transacoes.filter(function(t) {
    return t.categoria === 'despesa';
  }).reduce(function(acc, t) {
    return acc + t.valor;
  }, 0);
  const saldoFinal = totalReceitas - totalDespesas;

  // Exibe os totais no resumo financeiro
  document.getElementById('total-receitas').innerText = totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById('total-despesas').innerText = totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });//formata os valores numeros normais em valor de dinheiro brasileiro
  document.getElementById('saldo-final').innerText = saldoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para resetar o formulário
function resetarFormulario() {
  document.getElementById('formulario-transacao').reset(); // Limpa o formulário
}

// Carregar as transações e o resumo financeiro ja na hora que abre a página
window.onload = function () {
  exibirTransacoes(); // Exibe as transações salvas no carregar a página
  atualizarResumo(); // Atualiza o resumo financeiro no carregar a página
};
