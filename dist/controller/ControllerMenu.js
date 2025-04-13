"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMenu_1 = __importDefault(require("../view/ViewMenu"));
const ViewConsole_1 = __importDefault(require("../view/ViewConsole"));
const ControllerBattle_1 = __importDefault(require("./ControllerBattle"));
class ControllerMenu {
    constructor() {
        this.viewMenu = new ViewMenu_1.default();
        this.viewConsole = new ViewConsole_1.default();
        this.controllerBattle = new ControllerBattle_1.default();
    }
    startGame() {
        let run = true;
        while (run) {
            console.log(this.viewConsole.showBorder());
            switch (this.viewMenu.mainMenu().trim()) {
                case "1":
                    console.log(this.viewConsole.showBorder());
                    console.log(this.viewMenu.succesStart());
                    this.controllerBattle.startBattle();
                    run = false;
                    break;
                case "2":
                    console.log(this.viewConsole.showBorder());
                    console.log(this.viewMenu.gameIsClose());
                    run = false;
                    break;
                default:
                    console.log(`\n${this.viewMenu.invalid()}`);
            }
        }
    }
}
exports.default = ControllerMenu;
