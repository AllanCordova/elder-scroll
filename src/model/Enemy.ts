import Persona from "./Persona";

export default class Enemy extends Persona {
  private classType!: string;

  public showStatus(): string {
    return `${super.showStatus()}\nClasse: ${this.classType}`;
  }

  public startGoblin(): void {
    this.setName("Gobita");
    this.classType = "goblin";
    this.setHp(100);
    this.setAttack(80);
    this.setDefense(40);
  }

  public startDemon(): void {
    this.setName("Diablo");
    this.classType = "Demon";
    this.setHp(200);
    this.setAttack(90);
    this.setDefense(20);
  }

  public startZombie(): void {
    this.setName("Zumbreaker");
    this.classType = "zombie";
    this.setHp(120);
    this.setAttack(60);
  }

  public startSerpent(): void {
    this.setName("Venomtail");
    this.classType = "serpent";
    this.setHp(90);
    this.setAttack(100);
  }

  public startVampire(): void {
    this.setName("Nosferak");
    this.classType = "vampire";
    this.setHp(150);
    this.setAttack(85);
  }

  public startFireElemental(): void {
    this.setName("Pyron");
    this.classType = "fire elemental";
    this.setHp(180);
    this.setAttack(110);
  }

  public startDeathKnight(): void {
    this.setName("Morvax");
    this.classType = "death knight";
    this.setHp(250);
    this.setAttack(95);
  }
}
