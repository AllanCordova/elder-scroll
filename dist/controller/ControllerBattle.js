"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPerssona_1 = __importDefault(require("../view/ViewPerssona"));
const ControllerPersona_1 = __importDefault(require("./ControllerPersona"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
const Batlle_1 = __importDefault(require("../model/Batlle"));
const Enemy_1 = __importDefault(require("../model/Enemy"));
class ControllerBattle {
    constructor() {
        this.enemy = new Enemy_1.default();
        this.controllerPersona = new ControllerPersona_1.default();
        this.viewPersona = new ViewPerssona_1.default(this.controllerPersona);
        this.viewConsole = new ViewConsole_1.default();
    }
    startBattle() {
        let turno = 1;
        console.log(this.viewPersona.showCreate());
        let player = this.viewPersona.createPersona();
        this.enemy.startGoblin();
        this.battle = new Batlle_1.default(player, this.enemy);
        this.viewBattle = new ViewBattle_1.default(player, this.enemy);
        console.log(this.viewConsole.showBorder());
        console.log(this.viewBattle.showParticipants());
        console.log(this.viewConsole.showBorder());
        while (!this.battle.battleOver()) {
            console.log(`\n${this.viewConsole.showBorder()}`);
            console.log(this.viewBattle.showRound(turno));
            this.viewBattle.showInterval();
            this.battle.playerAttack();
            console.log(this.viewBattle.showPlayerAttack());
            if (this.enemy.isAlive()) {
                this.battle.enemyAttack();
                console.log(this.viewBattle.showEnemyAttack());
            }
            console.log(this.viewBattle.showStatus());
            turno += 1;
        }
        console.log(this.viewConsole.showBorder());
        console.log(`${this.viewBattle.showWiner(this.battle.getWiner())}`);
    }
}
exports.default = ControllerBattle;
