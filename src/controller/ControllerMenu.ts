import ViewMenu from "../view/ViewMenu";
import ViewConsole from "../view/ViewConsole";

import ControllerBattle from "./ControllerBattle";

export default class ControllerMenu {
  private viewMenu: ViewMenu;
  private viewConsole: ViewConsole;
  private controllerBattle: ControllerBattle;

  public constructor() {
    this.viewMenu = new ViewMenu();
    this.viewConsole = new ViewConsole();
    this.controllerBattle = new ControllerBattle();
  }

  public startGame(): void {
    let run: boolean = true;
    while (run) {
      console.log(this.viewConsole.showBorder());
      switch (this.viewMenu.mainMenu().trim()) {
        case "1":
          console.log(this.viewConsole.showBorder());
          console.log(this.viewMenu.succesStart());
          this.controllerBattle.startBattle();
          run = false;
          break;
        case "2":
          console.log(this.viewConsole.showBorder());
          console.log(this.viewMenu.gameIsClose());
          run = false;
          break;
        default:
          console.log(`\n${this.viewMenu.invalid()}`);
      }
    }
  }
}
