# Programação WEB
Repositório criado para realização e postagem da atividade referente a aula 01 (25.08.2023) de Programação WEB durante o 4º semestre do curso de Análise e Desenvolvimento de Sistemas na Fatec Indaiatuba

### Atividade - Introdução a Express, Node e Typescript
Desenvolver um código em Node.js e Typescript que solicite ao usuário um nome e quatro notas de 0 a 10. Devolver a média final calculada a partir das notas.
Requirementos:
- Utilizar uma Interface para definir detalhes do objeto Aluno;
- Criar uma função calcularMedia() que recebe um array com as notas e calcula a média;
- As entradas do usuário podem ser capturadas usando a biblioteca [prompt-sync](https://www.npmjs.com/package/prompt-sync).

#### Conclusão
O código desenvolvido recebe o nome e as quatro notas, fazendo um filtro para que o usuário consiga incluir apenas números que estejam entre 0 e 10. Retorna no terminal o nome do aluno com sua média final. As dificuldades enfretadas durante o desenvolvimento foram:
- Filtrar a entrada do usuário sem passar para o próximo passo: sempre que é inserido um número fora do range ou qualquer outro caracter, o código não salva na variável. A parte difícil foi criar um laço de repetição que esperasse o usuário digitar uma nota válida quantas vezes fosse necessário;
- Função calcularmedia(): apesar de não ser extamente complicado, foi a primeira vez que mexi com função em Typescript;
- Interface Aluno: mesma justificativa do tópico anterior. A única outra linguagem onde construí uma interface foi Java.

O material dessa e outras aulas de programação WEB pode ser encontrado [aqui](https://github.com/barbara-bruzon/aulas-prog-web).
