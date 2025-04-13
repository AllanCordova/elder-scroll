"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = __importDefault(require("kleur"));
const readline_sync_1 = __importDefault(require("readline-sync"));
class ViewBattle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
    showInterval() {
        readline_sync_1.default.question("precione... ");
    }
    showParticipants() {
        return `${kleur_1.default.magenta(`Participantes\n${this.player.showStatus()}\n\n${this.enemy.showStatus()}`)}`;
    }
    showStatus() {
        return `${kleur_1.default.magenta(`\n${this.player.getName()}, tem... ${this.player.getHp()} pontos de vida restante!\n${this.enemy.getName()}, tem... ${this.enemy.getHp()} pontos de vida restante!\n`)}`;
    }
    showPlayerAttack() {
        return `${kleur_1.default.green(`\n${this.player.getName()} atacou ${this.enemy.getName()} infligindo ${this.player.getAttack()} de dano!`)}`;
    }
    showEnemyAttack() {
        return `${kleur_1.default.red(`${this.enemy.getName()} atacou ${this.player.getName()} infligindo ${this.enemy.getAttack()} de dano!`)}`;
    }
    showRound(round) {
        return `${kleur_1.default.cyan(`Turno ${round}`)}`;
    }
    showWiner(winer) {
        return `${kleur_1.default.green("Vencedor")} ${winer.getName()}`;
    }
}
exports.default = ViewBattle;
