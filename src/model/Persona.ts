export default class Persona {
  private name: string;
  private hp: number;
  private attack: number;

  public constructor() {
    this.name = "";
    this.hp = 0;
    this.attack = 0;
  }

  public showStatus(): string {
    return `nome: ${this.name}\nvida: ${this.hp}\nataque: ${this.attack}`;
  }

  public isAlive(): boolean {
    return this.hp > 0;
  }

  public getName(): string {
    return this.name;
  }

  public getHp(): number {
    return this.hp;
  }

  public getAttack(): number {
    return this.attack;
  }

  public setName(value: string) {
    this.name = value;
  }

  public setHp(value: number) {
    this.hp = value;
  }

  public setAttack(value: number) {
    this.attack = value;
  }
}
