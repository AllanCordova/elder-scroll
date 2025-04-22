"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPerssona_1 = __importDefault(require("../view/ViewPerssona"));
const ControllerPersona_1 = __importDefault(require("./ControllerPersona"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ViewBattle_1 = __importDefault(require("../view/ViewBattle"));
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const Batlle_1 = __importDefault(require("../model/Batlle"));
const Db_1 = __importDefault(require("../data/Db"));
class ControllerBattle {
    constructor() {
        this.enemies = [];
        this.lvl = 1;
        this.controllerPersona = new ControllerPersona_1.default();
        this.viewPersona = new ViewPerssona_1.default(this.controllerPersona);
        this.viewConsole = new ViewConsole_1.default();
        this.viewMenu = new ViewMenu_1.default();
        this.db = new Db_1.default();
    }
    startBattle() {
        this.setupGame();
        for (let i = 0; i < this.enemies.length; i++) {
            this.startRound(i);
            this.executeTurns(i);
            this.endRound();
        }
        console.log(this.viewMenu.gameIsEnd());
    }
    setupGame() {
        console.log(this.viewPersona.showCreate());
        this.player = this.viewPersona.createPersona();
        this.enemies = this.controllerPersona.buildEnemy();
        this.db.createEnemies(this.enemies);
    }
    startRound(enemyIndex) {
        this.player.restart();
        this.battle = new Batlle_1.default(this.player, this.enemies, enemyIndex);
        this.viewBattle = new ViewBattle_1.default(this.player, this.enemies, enemyIndex);
        console.log(this.viewConsole.showBorder());
        console.log(this.viewBattle.showParticipants());
        console.log(this.viewConsole.showBorder());
    }
    executeTurns(enemyIndex) {
        let turno = 1;
        while (!this.battle.battleOver()) {
            const choice = this.viewBattle.showChoice();
            switch (choice) {
                case "1":
                    this.battle.playerAttack();
                    break;
                case "2":
                    this.battle.defensePlayer();
                    break;
                default:
                    this.battle.playerAttack();
            }
            if (this.enemies[enemyIndex].isAlive()) {
                this.battle.enemyAttack();
            }
            this.statusBattle(choice, turno, enemyIndex);
            turno++;
        }
    }
    statusBattle(choice, turno, index) {
        console.log(`\n${this.viewConsole.showBorder()}`);
        console.log(this.viewBattle.showLvl(this.lvl));
        console.log(this.viewBattle.showRound(turno));
        switch (choice) {
            case "1":
                console.log(this.viewBattle.showPlayerAttack());
                break;
            case "2":
                console.log(this.viewBattle.showDefensePlayer());
                break;
            default:
                console.log(this.viewBattle.showPlayerAttack());
        }
        if (this.enemies[index].isAlive()) {
            console.log(this.viewBattle.showEnemyAttack());
        }
        console.log(this.viewBattle.showStatus());
    }
    endRound() {
        console.log(this.viewConsole.showBorder());
        console.log(`${this.viewBattle.showWiner(this.battle.getWiner())}`);
        this.viewBattle.proxRound();
        this.lvl++;
    }
}
exports.default = ControllerBattle;
