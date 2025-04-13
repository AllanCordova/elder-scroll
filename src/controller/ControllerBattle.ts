import ViewPerssona from "../view/ViewPerssona";
import ControllerPersona from "./ControllerPersona";
import ViewConsole from "../view/ViewConsole";
import ViewBattle from "../view/ViewBattle";
import Battle from "../model/Batlle";
import Player from "../model/Player";
import Enemy from "../model/Enemy";

export default class ControllerBattle {
  private viewPersona: ViewPerssona;
  private viewConsole: ViewConsole;
  private viewBattle!: ViewBattle;
  private controllerPersona: ControllerPersona;
  private battle!: Battle;
  private enemy: Enemy;

  public constructor() {
    this.enemy = new Enemy();
    this.controllerPersona = new ControllerPersona();
    this.viewPersona = new ViewPerssona(this.controllerPersona);
    this.viewConsole = new ViewConsole();
  }

  public startBattle(): void {
    let turno: number = 1;

    console.log(this.viewPersona.showCreate());
    let player: Player = this.viewPersona.createPersona();
    this.enemy.startGoblin();

    this.battle = new Battle(player, this.enemy);
    this.viewBattle = new ViewBattle(player, this.enemy);

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
