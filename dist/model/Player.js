"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Player extends Persona_1.default {
    showStatus() {
        return `${super.showStatus()}\nClasse: ${this.classType}`;
    }
    startHero(name) {
        this.setName(name);
        this.classType = "hero";
        this.setHp(220);
        this.setAttack(70);
        this.setDefense(100);
    }
    startAngel(name) {
        this.setName(name);
        this.classType = "angel";
        this.setHp(100);
        this.setAttack(188);
        this.setDefense(40);
    }
    startSummoner(name) {
        this.setName(name);
        this.classType = "summoner";
        this.setHp(80);
        this.setAttack(175);
        this.setDefense(68);
    }
    restart() {
        switch (this.classType) {
            case "hero":
                this.setHp(220);
                this.setAttack(70);
                this.setDefense(100);
                break;
            case "angel":
                this.setHp(100);
                this.setAttack(188);
                this.setDefense(40);
                break;
            case "summoner":
                this.setHp(80);
                this.setAttack(175);
                this.setDefense(68);
                break;
        }
    }
}
exports.default = Player;
