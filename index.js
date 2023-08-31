"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Função para calcular a média do aluno
function calcularmedia(nome, notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    const media = soma / 4;
    const aluno = {
        nome: nome,
        notas: notas,
        media: media
    };
    return aluno;
}
//Importando e habilitando o prompt
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const nome = prompt("Digite o nome do(a) aluno(a): ");
const notas = [];
for (let i = 0; i < 4; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Digite a nota 0${i + 1}: `));
        if (isNaN(nota)) {
            console.log("A nota precisa ser um número!");
            nota = 11;
        }
    } while (nota < 0 || nota > 10);
    notas.push(nota);
}
const aluno = calcularmedia(nome, notas);
console.log(`A média final do(a) aluno(a) ${aluno.nome} é ${aluno.media}`);
