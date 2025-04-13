import Enemy from "../model/Enemy";

export default class Db {
  private data: [][] = [];
  private enemy: Enemy[] = [];

  public saveDb(valor: []): void {
    this.data.push(valor);
  }

  public saveEnemy(enemy: Enemy): void {
    this.enemy.push(enemy);
  }

  public createEnemies(enemies: Enemy[]): void {
    this.enemy.push(...enemies);
  }

  public getEnemy(): Enemy[] {
    return this.enemy;
  }
}
