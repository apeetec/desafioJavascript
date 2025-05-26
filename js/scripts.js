const filtroGraus = document.getElementById("degreeFilter");
const filtroClasses = document.getElementById("classFilter");
const searchInput = document.getElementById("pesquisa");
const corpoTabela = document.querySelector("#tabelaDeAlunos tbody");
const gerarAluno = document.getElementById("generateStudentsBtn");
// Objeto de grau de escolaridade
const graus = [
    {"id":1,"name":"Ensino Fundamental"},
    {"id":2,"name":"1° ano do ensino médio"},
    {"id":3,"name":"2° ano ensino médio"},
    {"id":4,"name":"3° ano do ensino médio"},
    {"id":5,"name":"Cursinho"},
    {"id":8,"name":"4º ano do ensino fundamental"},
    {"id":9,"name":"5º ano do ensino fundamental"},
    {"id":10,"name":"6º ano do ensino fundamental"},
    {"id":11,"name":"7º ano do ensino fundamental"},
    {"id":12,"name":"8º ano do ensino fundamental"},
    {"id":13,"name":"9º ano do ensino fundamental"},
    {"id":6,"name":"Estudo em casa"},
    {"id":7,"name":"Outros"}
]
// Objeto de Classe
const classes = [
    {"name":"A"},
    {"name":"B"},
    {"name":"C"},
    {"name":"D"},
    {"name":"E"},
    {"name":"F"}
]
// Objeto de aluno
const alunos = [
    {"id":1,"ra":12346,"name":"Nome do aluno 1","degreeId":1,"classId":1},
    {"id":2,"ra":456798,"name":"Nome do aluno 2","degreeId":2,"classId":1},
    {"id":3,"ra":752156,"name":"Nome do aluno 3","degreeId":3,"classId":2},
    {"id":4,"ra":852348,"name":"Nome do aluno 4","degreeId":4,"classId":2},
    {"id":5,"ra":454643,"name":"Nome do aluno 5","degreeId":6,"classId":2}
]
// Função para buscar o grau de escolaridade
function buscarGrau(id) {
    for (const grau of graus) {
        if (grau.id === id) {
            return grau.name;
        }
    }
    return 'Não encontrado'; // Caso não encontre
}
// Buscar a classe
function buscarClasse(id) {
    let options = "";
    for (let i = 0; i < classes.length; i++) {
        const posicao = i + 1; // posição lógica (1-based)
        const selected = (posicao === id) ? " selected" : "";
        options += `<option value="${posicao}"${selected}>${classes[i].name}</option>`;
    }
    return options;
}

// Função para exibir os options de Grau
function optionsDeGrau(){
    graus.forEach(grau => {
        // console.log(grau.name);
        const options = document.createElement("option");
        options.value = grau.id;
        options.innerText = grau.name;
        filtroGraus.append(options);
    });
}
optionsDeGrau();
// Função para exibir as Classes
function optionsClasse(){
    var cont = 0;
    classes.forEach(classe => {
        cont++;
    //    console.log(classe.name); 
       const options = document.createElement("option");
       options.value = cont;
       options.innerText = classe.name;
       filtroClasses.append(options);
    });
}
optionsClasse();
// Corpo da tabela de alunos
function tabelaAlunos(){
    const df = degreeFilter.value;
    const cf = classFilter.value;
    const termoBusca = searchInput.value.trim().toLowerCase();
    corpoTabela.innerHTML = "";
    alunos
    .filter(a => 
        (!df || a.degreeId == df) &&
        (!cf || a.classId == cf) &&
        (
          a.name.toLowerCase().includes(termoBusca) || 
          a.ra.toString().includes(termoBusca)
        )
    )
    .forEach(aluno => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        corpoTabela.append(tr);
        tr.innerHTML ='<td>'
        +aluno.ra+'</td>'+
        '<td class="campoAluno" contenteditable="true" onblur="updateName(' + aluno.id + ', this.innerText)">' + aluno.name + '</td>'+
        '<td>'
        +buscarGrau(aluno.degreeId)
        +'</td>'
        +'<td>'
        +'<select onchange="updateClass(' + aluno.id + ', this.value)">'
        +buscarClasse(aluno.classId)
        +'</select>'
        +'</td>'
        +'<td><button class="btn" onclick="deleteStudent(' + aluno.id + ')">Remover</button></td>';
        corpoTabela.appendChild(tr);
    });
}
tabelaAlunos();
// Atualizar o nome 
    window.updateName = function(id, value) {
    const aluno = alunos.find(a => a.id === id);
    console.log(aluno);
    if (aluno) {
        aluno.name = value.trim();
        corpoTabela.innerHTML = ""; // limpa antes de renderizar
        tabelaAlunos(); // atualiza a tabela
    }
    };
// Atualizar a classe
window.updateClass = function(id, value) {
  const index = alunos.findIndex(a => a.id === id);
  if (index !== -1) {
    alunos[index].classId = parseInt(value);
    corpoTabela.innerHTML = "";
    tabelaAlunos();
  }
};
// Deletar aluno
window.deleteStudent = function(id) {
  const index = alunos.findIndex(a => a.id === id);
  if (index !== -1) {
    alunos.splice(index, 1);
    corpoTabela.innerHTML = "";
    tabelaAlunos();
    // Se houver gráfico, atualize aqui também (opcional)
    // updateChart(); 
  }
};

degreeFilter.addEventListener("change", tabelaAlunos);
classFilter.addEventListener("change", tabelaAlunos);
searchInput.addEventListener("input", tabelaAlunos);
