# 📊 Desafio Técnico - Relatório Operável Educacional

Seja bem-vindo(a) ao nosso desafio técnico! 🎉 Está pronto? Esperamos que sim!

## 🧠 Sobre o Desafio

Você terá contato com duas telas, cada uma dividida em duas partes. À medida que avança, a complexidade aumenta! O objetivo não é necessariamente finalizar tudo, mas entregar as atividades da melhor forma possível.

O cenário simula um ambiente educacional, e o desafio gira em torno de um **relatório operável** (nome novo, mas funcional!). Você pode iniciar pela **Tela 1** ou **Tela 2**, sem problemas!

---

## 🧩 Tela 1 — Foco nos Alunos

Aqui você irá lidar com os **alunos**, suas **séries (degrees)** e **turmas (classes)**.

### ✅ Parte 1 — Listagem e Edição

- Criar filtros usando os JSONs `degrees` e `classes`.
- Exibir os alunos com os dados relacionados:
  - Nome do aluno
  - Nome da série (degree)
  - Nome da classe (class)
- Permitir a edição:
  - Nome do aluno
  - Classe associada
- Aplicar filtros dinâmicos com base nas alterações feitas.

### ✅ Parte 2 — Geração de Dados e Visualização

- Botão que **gera 300 novos alunos** distribuídos entre séries e turmas.
- Os dados gerados devem ser **distribuídos aleatoriamente**.
- Gerar um **gráfico de quantidade de alunos por série**.
  - A cada clique no botão, novos alunos são adicionados e o gráfico atualizado automaticamente.

---

## 🧩 Tela 2 — Foco nos Professores

Agora vamos trabalhar com os **professores** e suas relações com séries e turmas.

### ✅ Parte 1 — Listagem e Alunos Relacionados

- Filtros baseados nos JSONs `degrees` e `classes`.
- Exibir dados da lista `relationships`, incluindo:
  - Nome do professor
  - Nome da matéria
  - Séries (degrees) onde leciona
  - Turmas (classes) de cada série
- Botão que, ao ser clicado, exibe os **alunos relacionados àquela série**.

### ✅ Parte 2 — Criação de Relacionamentos

- Formulário para adicionar um **novo relacionamento professor ↔ série ↔ turma**.
- O novo registro deve aparecer automaticamente na listagem da Parte 1.

---

## 🛠 Tecnologias Sugeridas

Você pode utilizar as tecnologias que desejar, mas frameworks como **React**, **Vue**, **Angular** ou **Vanilla JS** são bem-vindos. Para gráficos, considere bibliotecas como **Chart.js** ou **Recharts**.

---

## 📁 Estrutura de Dados (JSONs)

Você contará com os seguintes dados em formato JSON:

- `students.json`
- `degrees.json`
- `classes.json`
- `relationships.json`

---

