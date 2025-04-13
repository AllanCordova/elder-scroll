import Player from "./Player";
import Enemy from "./Enemy";

export default class Battle {
  private player: Player;
  private enemy: Enemy[];
  private index: number;

  public constructor(player: Player, enemy: Enemy[], index: number) {
    this.player = player;
    this.enemy = enemy;
    this.index = index;
  }

  public playerAttack(): void {
    const enemy: Enemy = this.enemy[this.index];
    const attack: number = this.player.getAttack();
    const defense: number = enemy.getDefense();

    if (defense >= attack) {
      enemy.setDefense(defense - attack);
    } else {
      const remainingDamage = attack - defense;
      enemy.setDefense(0);
      enemy.setHp(Math.max(enemy.getHp() - remainingDamage, 0));
    }
  }

  public enemyAttack(): void {
    const attack: number = this.enemy[this.index].getAttack();
    const defense: number = this.player.getDefense();

    if (defense >= attack) {
      this.player.setDefense(defense - attack);
    } else {
      const remainingDamage = attack - defense;
      this.player.setDefense(0);
      this.player.setHp(Math.max(this.player.getHp() - remainingDamage, 0));
    }
  }

  public defensePlayer(): number {
    const defense: number = this.player.getDefense();
    this.player.setDefense(defense * 2);
    return defense;
  }

  public battleOver(): boolean {
    return !this.player.isAlive() || !this.enemy[this.index].isAlive();
  }

  public getWiner(): Player | Enemy {
    return this.player.isAlive() ? this.player : this.enemy[this.index];
  }
}
