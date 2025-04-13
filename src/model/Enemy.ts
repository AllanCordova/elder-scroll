import Persona from "./Persona";

export default class Enemy extends Persona {
  private classType!: string;

  public showStatus(): string {
    return `${super.showStatus()}`;
  }

  public startGoblin(): void {
    this.setName("Gobita");
    this.classType = "goblin";
    this.setHp(100);
    this.setAttack(80);
  }
}
