import Player from "../model/Player";

export default class ControllerPersona {
  private player!: Player;

  public buildPersona(name: string, classType: string): Player {
    this.player = new Player();
    switch (classType) {
      case "1":
        this.player.startHero(name);
        break;
      default:
        this.player.startHero(name);
    }
    return this.player;
  }
}
