import Player from "./Player";
import Enemy from "./Enemy";

export default class Battle {
  private player: Player;
  private enemy: Enemy;

  public constructor(player: Player, enemy: Enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  public playerAttack(): void {
    const demange: number = this.player.getAttack();
    this.enemy.setHp(Math.max(this.enemy.getHp() - demange, 0));
  }

  public enemyAttack(): void {
    const demange: number = this.enemy.getAttack();
    this.player.setHp(this.player.getHp() - demange);
  }

  public battleOver(): boolean {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }

  public getWiner(): Player | Enemy {
    return this.player.isAlive() ? this.player : this.enemy;
  }
}
