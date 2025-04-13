"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Db {
    constructor() {
        this.data = [];
        this.enemy = [];
    }
    saveDb(valor) {
        this.data.push(valor);
    }
    saveEnemy(enemy) {
        this.enemy.push(enemy);
    }
    createEnemies(enemies) {
        this.enemy.push(...enemies);
    }
    getEnemy() {
        return this.enemy;
    }
}
exports.default = Db;
