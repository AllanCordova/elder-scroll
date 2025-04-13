import Persona from "./Persona";

export default class Player extends Persona {
  private classType!: string;

  public showStatus(): string {
    return `${super.showStatus()}`;
  }

  public startHero(name: string): void {
    this.setName(name);
    this.classType = "hero";
    this.setHp(220);
    this.setAttack(70);
  }
}
