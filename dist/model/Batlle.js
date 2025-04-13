"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
    playerAttack() {
        const demange = this.player.getAttack();
        this.enemy.setHp(Math.max(this.enemy.getHp() - demange, 0));
    }
    enemyAttack() {
        const demange = this.enemy.getAttack();
        this.player.setHp(this.player.getHp() - demange);
    }
    battleOver() {
        return !this.player.isAlive() || !this.enemy.isAlive();
    }
    getWiner() {
        return this.player.isAlive() ? this.player : this.enemy;
    }
}
exports.default = Battle;
