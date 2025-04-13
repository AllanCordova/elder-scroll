"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Enemy extends Persona_1.default {
    showStatus() {
        return `${super.showStatus()}\nClasse: ${this.classType}`;
    }
    startGoblin() {
        this.setName("Gobita");
        this.classType = "goblin";
        this.setHp(100);
        this.setAttack(80);
        this.setDefense(40);
    }
    startDemon() {
        this.setName("Diablo");
        this.classType = "Demon";
        this.setHp(200);
        this.setAttack(90);
        this.setDefense(20);
    }
    startZombie() {
        this.setName("Zumbreaker");
        this.classType = "zombie";
        this.setHp(120);
        this.setAttack(60);
    }
    startSerpent() {
        this.setName("Venomtail");
        this.classType = "serpent";
        this.setHp(90);
        this.setAttack(100);
    }
    startVampire() {
        this.setName("Nosferak");
        this.classType = "vampire";
        this.setHp(150);
        this.setAttack(85);
    }
    startFireElemental() {
        this.setName("Pyron");
        this.classType = "fire elemental";
        this.setHp(180);
        this.setAttack(110);
    }
    startDeathKnight() {
        this.setName("Morvax");
        this.classType = "death knight";
        this.setHp(250);
        this.setAttack(95);
    }
}
exports.default = Enemy;
