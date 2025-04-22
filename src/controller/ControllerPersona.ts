import Player from "../model/Player";
import Enemy from "../model/Enemy";

export default class ControllerPersona {
  private player!: Player;
  public buildEnemy(fast: boolean): Enemy[];
  public buildEnemy(): Enemy[];

  public buildEnemy(fast?: boolean): Enemy[] {
    if (fast !== undefined) {
      const vampire = new Enemy();
      vampire.startVampire();
      const zombie = new Enemy();
      zombie.startZombie();
      return [vampire, zombie];
    }

    const goblin = new Enemy();
    goblin.startGoblin();

    const demon = new Enemy();
    demon.startDemon();

    const vampire = new Enemy();
    vampire.startVampire();

    const zombie = new Enemy();
    zombie.startZombie();

    const fire = new Enemy();
    fire.startFireElemental();

    const knight = new Enemy();
    knight.startDeathKnight();

    const serpent = new Enemy();
    serpent.startSerpent();

    return [goblin, demon, vampire, zombie, fire, knight, serpent];
  }

  public buildPersona(name: string, classType: string): Player {
    this.player = new Player();
    switch (classType) {
      case "1":
        this.player.startHero(name);
        break;
      case "2":
        this.player.startAngel(name);
        break;
      case "3":
        this.player.startSummoner(name);
        break;
      default:
        this.player.startHero(name);
    }
    return this.player;
  }
}
