"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(player, enemy, index) {
        this.player = player;
        this.enemy = enemy;
        this.index = index;
    }
    playerAttack() {
        const enemy = this.enemy[this.index];
        const attack = this.player.getAttack();
        const defense = enemy.getDefense();
        if (defense >= attack) {
            enemy.setDefense(defense - attack);
        }
        else {
            const remainingDamage = attack - defense;
            enemy.setDefense(0);
            enemy.setHp(Math.max(enemy.getHp() - remainingDamage, 0));
        }
    }
    enemyAttack() {
        const attack = this.enemy[this.index].getAttack();
        const defense = this.player.getDefense();
        if (defense >= attack) {
            this.player.setDefense(defense - attack);
        }
        else {
            const remainingDamage = attack - defense;
            this.player.setDefense(0);
            this.player.setHp(Math.max(this.player.getHp() - remainingDamage, 0));
        }
    }
    defensePlayer() {
        const defense = this.player.getDefense();
        this.player.setDefense(defense * 2);
        return defense;
    }
    battleOver() {
        return !this.player.isAlive() || !this.enemy[this.index].isAlive();
    }
    getWiner() {
        return this.player.isAlive() ? this.player : this.enemy[this.index];
    }
}
exports.default = Battle;
