import Player from "../model/Player";
import Enemy from "../model/Enemy";
import kleur from "kleur";
import readlineSync from "readline-sync";

export default class ViewBattle {
  private player: Player;
  private enemy: Enemy[];
  private index: number;

  public constructor(player: Player, enemy: Enemy[], index: number) {
    this.player = player;
    this.enemy = enemy;
    this.index = index;
  }

  public showChoice(): string {
    return readlineSync.question("sua jogada!\n1.atacar\n2.defender ");
  }

  public proxRound(): void {
    readlineSync.question("Você venceu esse Nível! precione... ");
  }

  public showParticipants(): string {
    return `${kleur.magenta(
      `Participantes\n${this.player.showStatus()}\n\n${this.enemy[
        this.index
      ].showStatus()}`
    )}`;
  }

  public showStatus(): string {
    return `${kleur.magenta(
      `\n${this.player.getName()}, tem... ${this.player.getHp()} pontos de vida restante! e ${this.player.getDefense()} pontos de defesa!\n${this.enemy[
        this.index
      ].getName()}, tem... ${this.enemy[
        this.index
      ].getHp()} pontos de vida restante! e ${this.enemy[
        this.index
      ].getDefense()} pontos de defesa!\n`
    )}`;
  }

  public showPlayerAttack(): string {
    return `${kleur.green(
      `\n${this.player.getName()} atacou ${this.enemy[
        this.index
      ].getName()} infligindo ${this.player.getAttack()} de dano!`
    )}`;
  }

  public showEnemyAttack(): string {
    return `${kleur.red(
      `${this.enemy[
        this.index
      ].getName()} atacou ${this.player.getName()} infligindo ${this.enemy[
        this.index
      ].getAttack()} de dano!`
    )}`;
  }

  public showDefensePlayer(): string {
    return `${kleur.green(
      `${this.player.getName()} se defendeu! lhe restan ${this.player.getDefense()} pontos de defesa!`
    )}`;
  }

  public showRound(round: number): string {
    return `${kleur.cyan(`Turno ${round}`)}`;
  }

  public showLvl(lvl: number): string {
    return `${kleur.cyan(`Nível atual! ${lvl}`)}`;
  }

  public showWiner(winer: Player | Enemy): string {
    return `${kleur.green("Vencedor")} ${winer.getName()} !!!!!!!!!!!!`;
  }
}
