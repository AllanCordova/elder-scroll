import ViewPerssona from "../view/ViewPerssona";
import ControllerPersona from "./ControllerPersona";
import ViewConsole from "../view/ViewConsole";
import ViewBattle from "../view/ViewBattle";
import Battle from "../model/Batlle";
import Player from "../model/Player";
import Enemy from "../model/Enemy";
import Db from "../data/Db";

export default class ControllerBattle {
  private viewPersona: ViewPerssona;
  private viewConsole: ViewConsole;
  private viewBattle!: ViewBattle;
  private controllerPersona: ControllerPersona;
  private battle!: Battle;
  private db: Db;
  private player!: Player;
  private enemies: Enemy[] = [];
  private lvl: number = 1;

  public constructor() {
    this.controllerPersona = new ControllerPersona();
    this.viewPersona = new ViewPerssona(this.controllerPersona);
    this.viewConsole = new ViewConsole();
    this.db = new Db();
  }

  public startBattle(): void {
    this.setupGame();
    for (let i = 0; i < this.enemies.length; i++) {
      this.startRound(i);
      this.executeTurns(i);
      this.endRound();
    }
  }

  private setupGame(): void {
    console.log(this.viewPersona.showCreate());
    this.player = this.viewPersona.createPersona();

    this.enemies = this.controllerPersona.buildEnemy();
    this.db.createEnemies(this.enemies);
  }

  private startRound(enemyIndex: number): void {
    this.player.restart();
    this.battle = new Battle(this.player, this.enemies, enemyIndex);
    this.viewBattle = new ViewBattle(this.player, this.enemies, enemyIndex);

    console.log(this.viewConsole.showBorder());
    console.log(this.viewBattle.showParticipants());
    console.log(this.viewConsole.showBorder());
  }

  private executeTurns(enemyIndex: number): void {
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

  private statusBattle(choice: string, turno: number, index: number): void {
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

  private endRound(): void {
    console.log(this.viewConsole.showBorder());
    console.log(`${this.viewBattle.showWiner(this.battle.getWiner())}`);
    this.viewBattle.proxRound();
    this.lvl++;
  }
}
