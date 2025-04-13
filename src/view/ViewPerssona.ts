import readlineSync from "readline-sync";
import kleur from "kleur";
import ControllerPersona from "../controller/ControllerPersona";
import Player from "../model/Player";

export default class ViewPerssona {
  private controllerPersona: ControllerPersona;

  public constructor(controllerMenu: ControllerPersona) {
    this.controllerPersona = controllerMenu;
  }

  public showCreate(): string {
    return `${kleur.yellow(`Criando seu perssoangem!`)}`;
  }

  public createPersona(): Player {
    const name: string = readlineSync.question(
      "\nDigite o nome do seu perssoangem... "
    );

    if (!name) {
      console.log(kleur.red("\nSeu perssonagem precisa de um nome!\n"));
      return this.createPersona();
    }

    const classType: string = readlineSync.question(
      "qual classe você escolhe?\n1.Hero\n2.Angel\n3.Summoner\n"
    );
    return this.controllerPersona.buildPersona(name, classType);
  }
}
