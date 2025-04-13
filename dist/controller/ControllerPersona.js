"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../model/Player"));
const Enemy_1 = __importDefault(require("../model/Enemy"));
class ControllerPersona {
    buildEnemy() {
        const goblin = new Enemy_1.default();
        goblin.startGoblin();
        const demon = new Enemy_1.default();
        demon.startDemon();
        const vampire = new Enemy_1.default();
        vampire.startVampire();
        const zombie = new Enemy_1.default();
        zombie.startZombie();
        const fire = new Enemy_1.default();
        fire.startFireElemental();
        const knight = new Enemy_1.default();
        knight.startDeathKnight();
        const serpent = new Enemy_1.default();
        serpent.startSerpent();
        return [goblin, demon, vampire, zombie, fire, knight, serpent];
    }
    buildPersona(name, classType) {
        this.player = new Player_1.default();
        switch (classType) {
            case "1":
                this.player.startHero(name);
                break;
            case "2":
                this.player.startAngel(name);
                break;
            case "3":
                this.player.startSummoner(name);
                break;
            default:
                this.player.startHero(name);
        }
        return this.player;
    }
}
exports.default = ControllerPersona;
