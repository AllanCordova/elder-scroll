"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Player extends Persona_1.default {
    showStatus() {
        return `${super.showStatus()}`;
    }
    startHero(name) {
        this.setName(name);
        this.classType = "hero";
        this.setHp(220);
        this.setAttack(70);
    }
}
exports.default = Player;
