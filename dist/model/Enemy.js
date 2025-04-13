"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Enemy extends Persona_1.default {
    showStatus() {
        return `${super.showStatus()}`;
    }
    startGoblin() {
        this.setName("Gobita");
        this.classType = "goblin";
        this.setHp(100);
        this.setAttack(80);
    }
}
exports.default = Enemy;
