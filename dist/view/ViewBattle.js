"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = __importDefault(require("kleur"));
const readline_sync_1 = __importDefault(require("readline-sync"));
class ViewBattle {
    constructor(player, enemy, index) {
        this.player = player;
        this.enemy = enemy;
        this.index = index;
    }
    showChoice() {
        return readline_sync_1.default.question("sua jogada!\n1.atacar\n2.defender ");
    }
    proxRound() {
        readline_sync_1.default.question("Você venceu esse Nível! precione... ");
    }
    showParticipants() {
        return `${kleur_1.default.magenta(`Participantes\n${this.player.showStatus()}\n\n${this.enemy[this.index].showStatus()}`)}`;
    }
    showStatus() {
        return `${kleur_1.default.magenta(`\n${this.player.getName()}, tem... ${this.player.getHp()} pontos de vida restante! e ${this.player.getDefense()} pontos de defesa!\n${this.enemy[this.index].getName()}, tem... ${this.enemy[this.index].getHp()} pontos de vida restante! e ${this.enemy[this.index].getDefense()} pontos de defesa!\n`)}`;
    }
    showPlayerAttack() {
        return `${kleur_1.default.green(`\n${this.player.getName()} atacou ${this.enemy[this.index].getName()} infligindo ${this.player.getAttack()} de dano!`)}`;
    }
    showEnemyAttack() {
        return `${kleur_1.default.red(`${this.enemy[this.index].getName()} atacou ${this.player.getName()} infligindo ${this.enemy[this.index].getAttack()} de dano!`)}`;
    }
    showDefensePlayer() {
        return `${kleur_1.default.green(`${this.player.getName()} se defendeu! lhe restan ${this.player.getDefense()} pontos de defesa!`)}`;
    }
    showRound(round) {
        return `${kleur_1.default.cyan(`Turno ${round}`)}`;
    }
    showLvl(lvl) {
        return `${kleur_1.default.cyan(`Nível atual! ${lvl}`)}`;
    }
    showWiner(winer) {
        return `${kleur_1.default.green("Vencedor")} ${winer.getName()} !!!!!!!!!!!!`;
    }
}
exports.default = ViewBattle;
