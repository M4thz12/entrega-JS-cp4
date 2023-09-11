// Cria um array para armazenar as tarefas
const tarefas = [];

// Obtém os elementos do formulário, da tabela e dos botões
const botao = document.getElementById("Botao");
const tabela = document.querySelector(".tabela-tarefas");
const botaoImportancia = document.getElementById("BotaoImportancia");


// Adiciona um evento de clique para o botão "Adicionar"
botao.addEventListener("click",()=>{
    adicionarTarefa()
});

// Função para adicionar uma tarefa ao array e à tabela
function adicionarTarefa(){
    const thead = tabela.querySelector("thead");
    thead.textContent = '';

    const linhaPrincipalNova = document.createElement('tr');
    const descricaoNova = document.createElement('th');
    const importanciaNova = document.createElement('th');
    const departamentoNova = document.createElement('th');
    const autorNova = document.createElement('th');
    const valorNova = document.createElement('th');
    const tempoNova = document.createElement('th');
    const removerNova = document.createElement('th');
    
    

    descricaoNova.textContent = 'Descrição';
    importanciaNova.textContent = 'Importancia';
    departamentoNova.textContent = 'Departamento';
    autorNova.textContent = 'Autor';
    tempoNova.textContent = 'Tempo';
    valorNova.textContent = 'Valor';
    removerNova.textContent = 'Remover';


    linhaPrincipalNova.appendChild(descricaoNova);
    linhaPrincipalNova.appendChild(autorNova);
    linhaPrincipalNova.appendChild(departamentoNova);
    linhaPrincipalNova.appendChild(importanciaNova);
    linhaPrincipalNova.appendChild(valorNova);
    linhaPrincipalNova.appendChild(tempoNova);
    linhaPrincipalNova.appendChild(removerNova);


    thead.append(linhaPrincipalNova);




    const inpDescricao = document.getElementById("IDdescricao");
    const inpAutor = document.getElementById("IDautor");
    const inpDepartamento = document.getElementById("IDdepartamento");
    const inpImportancia = document.getElementById("importancia");
    const inpValor = document.getElementById("IDvalor");
    const inpDuracao = document.getElementById("IDduracao");

    // Adiciona a tarefa ao array
    tarefas.push({
        descricao: inpDescricao.value,
        autor: inpAutor.value,
        departamento: inpDepartamento.value,
        importancia: inpImportancia.value,
        valor: inpValor.value,
        duracao: inpDuracao.value
    });

    // Limpa os campos do formulário após adicionar a tarefa
    inpDescricao.value = "";
    inpDepartamento.value = "";
    inpAutor.value = "";
    inpValor.value = "";
    inpDuracao.value = "";

    // Recria a tabela com base nas tarefas do array
    criarTabela();
};

// Função para criar a tabela com base nas tarefas do array
function criarTabela() {
    const Bodytabela = tabela.querySelector("tbody");
    Bodytabela.innerHTML = ""; // Limpa o conteúdo atual da tabela

    // Percorre o array de tarefas e cria as linhas da tabela
    tarefas.forEach((tarefa, index) => {
        const linha = document.createElement("tr");
        const tdDescricao = document.createElement("td");
        const tdAutor = document.createElement("td");
        const tdDepartamento = document.createElement("td");
        const tdValor = document.createElement("td");
        const tdDuracao = document.createElement("td");
        const tdImportancia = document.createElement("td");
        const tdExcluir = document.createElement("td");
        const botaoDeExcluir = document.createElement("button");

        tdDescricao.textContent = tarefa.descricao;
        tdAutor.textContent = tarefa.autor;
        tdDepartamento.textContent = tarefa.departamento;
        tdImportancia.textContent = tarefa.importancia;
        tdValor.textContent = tarefa.valor;
        tdDuracao.textContent = tarefa.duracao;
        botaoDeExcluir.textContent = " Remover ";
        botaoDeExcluir.id = "idRemover"
        botaoDeExcluir.addEventListener("click", () => {
            tarefas.splice(index, 1); // Remove a tarefa do array
            criarTabela(); // Recria a tabela
        });

        tdExcluir.appendChild(botaoDeExcluir);
        linha.appendChild(tdDescricao);
        linha.appendChild(tdAutor);
        linha.appendChild(tdDepartamento);
        linha.appendChild(tdImportancia);
        linha.appendChild(tdValor);
        linha.appendChild(tdDuracao);
        linha.appendChild(tdExcluir);
        Bodytabela.appendChild(linha);
    });
};



// Adiciona um evento de clique para o botão "Ordenar por Importância"
botaoImportancia.addEventListener("click", () => {
    // Ordena o array de tarefas com base na importância
    tarefas.sort((a, b) => {
        const importanceOrder = {
            "muito-importante": 1,
            "relevante": 2,
            "pouco-importante": 3
        };
        return importanceOrder[a.importancia] - importanceOrder[b.importancia];
    });

    // Recria a tabela com base no array de tarefas ordenado
    criarTabelaDescricao();
});

function criarTabelaDescricao() {

    const thead = tabela.querySelector("thead");
    thead.textContent = '';

    const linhaPrincipalNova = document.createElement('tr');
    const descricaoNova = document.createElement('th');
    
    
    descricaoNova.textContent = 'Descrição';
    
    
    linhaPrincipalNova.appendChild(descricaoNova);
    
   
    thead.append(linhaPrincipalNova);

    const Bodytabela = tabela.querySelector("tbody");
    Bodytabela.innerHTML = ""; // Limpa o conteúdo atual da tabela

    // Percorre o array de tarefas e cria as linhas da tabela
    tarefas.forEach((tarefa, index) => {
        const linha = document.createElement("tr");
        const tdDescricao = document.createElement("td");
        
        

        tdDescricao.textContent = tarefa.descricao;
        
        
        linha.appendChild(tdDescricao);
        
        
        Bodytabela.appendChild(linha);
    });
};