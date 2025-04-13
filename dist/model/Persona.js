"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor() {
        this.name = "";
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
    }
    showStatus() {
        return `nome: ${this.name}\nvida: ${this.hp}\nataque: ${this.attack}\ndefesa: ${this.defense}`;
    }
    isAlive() {
        return this.hp > 0;
    }
    getName() {
        return this.name;
    }
    getHp() {
        return this.hp;
    }
    getAttack() {
        return this.attack;
    }
    getDefense() {
        return this.defense;
    }
    setName(value) {
        this.name = value;
    }
    setHp(value) {
        this.hp = value;
    }
    setAttack(value) {
        this.attack = value;
    }
    setDefense(value) {
        this.defense = value;
    }
}
exports.default = Persona;
