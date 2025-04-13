import Persona from "./Persona";

export default class Player extends Persona {
  private classType!: string;

  public showStatus(): string {
    return `${super.showStatus()}\nClasse: ${this.classType}`;
  }

  public startHero(name: string): void {
    this.setName(name);
    this.classType = "hero";
    this.setHp(220);
    this.setAttack(70);
    this.setDefense(100);
  }

  public startAngel(name: string): void {
    this.setName(name);
    this.classType = "angel";
    this.setHp(100);
    this.setAttack(188);
    this.setDefense(40);
  }

  public startSummoner(name: string): void {
    this.setName(name);
    this.classType = "summoner";
    this.setHp(80);
    this.setAttack(175);
    this.setDefense(68);
  }

  public restart(): void {
    switch (this.classType) {
      case "hero":
        this.setHp(220);
        this.setAttack(70);
        this.setDefense(100);
        break;
      case "angel":
        this.setHp(100);
        this.setAttack(188);
        this.setDefense(40);
        break;
      case "summoner":
        this.setHp(80);
        this.setAttack(175);
        this.setDefense(68);
        break;
    }
  }
}
