//interface Aluno
interface Aluno{
    nome: string,
    notas: number[],
    media: number
}

//Função para calcular a média do aluno
function calcularmedia(nome: string, notas:number[]):Aluno{
    let soma: number = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    const media = soma/4
    
    const aluno:Aluno = {
        nome: nome,
        notas: notas,
        media: media
    }
    return aluno
}

//Importando e habilitando o prompt
import PromptSync from "prompt-sync"
const prompt = PromptSync()

const nome: string = prompt("Digite o nome do(a) aluno(a): ");
const notas: number[] = [];

for (let i = 0; i < 4; i++) {
    let nota: number;
    do {
        nota = parseFloat(prompt(`Digite a nota 0${i + 1}: `));
        if (isNaN(nota)){
            console.log("A nota precisa ser um número!")
            nota = 11;
        }
    } while (nota < 0 || nota > 10);
    notas.push(nota);
}

const aluno = calcularmedia(nome, notas)
console.log(`A média final do(a) aluno(a) ${aluno.nome} é ${aluno.media}`)