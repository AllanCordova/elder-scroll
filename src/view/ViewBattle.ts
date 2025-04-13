import Player from "../model/Player";
import Enemy from "../model/Enemy";
import kleur from "kleur";
import readlineSync from "readline-sync";

export default class ViewBattle {
  private player: Player;
  private enemy: Enemy;

  public constructor(player: Player, enemy: Enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  public showInterval(): void {
    readlineSync.question("precione... ");
  }

  public showParticipants(): string {
    return `${kleur.magenta(
      `Participantes\n${this.player.showStatus()}\n\n${this.enemy.showStatus()}`
    )}`;
  }

  public showStatus(): string {
    return `${kleur.magenta(
      `\n${this.player.getName()}, tem... ${this.player.getHp()} pontos de vida restante!\n${this.enemy.getName()}, tem... ${this.enemy.getHp()} pontos de vida restante!\n`
    )}`;
  }

  public showPlayerAttack(): string {
    return `${kleur.green(
      `\n${this.player.getName()} atacou ${this.enemy.getName()} infligindo ${this.player.getAttack()} de dano!`
    )}`;
  }

  public showEnemyAttack(): string {
    return `${kleur.red(
      `${this.enemy.getName()} atacou ${this.player.getName()} infligindo ${this.enemy.getAttack()} de dano!`
    )}`;
  }

  public showRound(round: number): string {
    return `${kleur.cyan(`Turno ${round}`)}`;
  }

  public showWiner(winer: Player | Enemy): string {
    return `${kleur.green("Vencedor")} ${winer.getName()}`;
  }
}
