export default class Persona {
  private name: string;
  private hp: number;
  private attack: number;
  private defense: number;

  public constructor() {
    this.name = "";
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
  }

  public showStatus(): string {
    return `nome: ${this.name}\nvida: ${this.hp}\nataque: ${this.attack}\ndefesa: ${this.defense}`;
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

  public getDefense(): number {
    return this.defense;
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

  public setDefense(value: number) {
    this.defense = value;
  }
}
