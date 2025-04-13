"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const kleur_1 = __importDefault(require("kleur"));
class ViewPerssona {
    constructor(controllerMenu) {
        this.controllerPersona = controllerMenu;
    }
    showCreate() {
        return `${kleur_1.default.yellow(`Criando seu perssoangem!`)}`;
    }
    createPersona() {
        const name = readline_sync_1.default.question("\nDigite o nome do seu perssoangem... ");
        if (!name) {
            console.log(kleur_1.default.red("\nSeu perssonagem precisa de um nome!\n"));
            return this.createPersona();
        }
        const classType = readline_sync_1.default.question("qual classe você escolhe?\n1.Hero\n2.Angel\n3.Summoner\n");
        return this.controllerPersona.buildPersona(name, classType);
    }
}
exports.default = ViewPerssona;
