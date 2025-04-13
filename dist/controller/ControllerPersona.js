"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../model/Player"));
class ControllerPersona {
    buildPersona(name, classType) {
        this.player = new Player_1.default();
        switch (classType) {
            case "1":
                this.player.startHero(name);
                break;
            default:
                this.player.startHero(name);
        }
        return this.player;
    }
}
exports.default = ControllerPersona;
