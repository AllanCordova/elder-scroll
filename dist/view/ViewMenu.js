"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const kleur_1 = __importDefault(require("kleur"));
class ViewMenu {
    mainMenu() {
        console.log(`${kleur_1.default.bold("Bem vindo ao Elder Scroll")}\n\n${kleur_1.default.blue(`1.Começar\n2.Sair\n`)}`);
        return readline_sync_1.default.question("escolha uma opção... ");
    }
    succesStart() {
        return `\n${kleur_1.default.yellow("Torneio começou!")}\n`;
    }
    gameIsClose() {
        return `\nparece que você se divertiu! até mais.`;
    }
    gameIsEnd() {
        return `O jogo acabou! obrigado por jogar`;
    }
    invalid() {
        return `\n${kleur_1.default.red(`Digite um valor dentro do intervalo do menu!`)}`;
    }
}
exports.default = ViewMenu;
