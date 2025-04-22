import readlineSync from "readline-sync";
import kleur from "kleur";

export default class ViewMenu {
  public mainMenu(): string {
    console.log(
      `${kleur.bold("Bem vindo ao Elder Scroll")}\n\n${kleur.blue(
        `1.Começar\n2.Sair\n`
      )}`
    );
    return readlineSync.question("escolha uma opção... ");
  }

  public succesStart(): string {
    return `\n${kleur.yellow("Torneio começou!")}\n`;
  }

  public gameIsClose(): string {
    return `\nparece que você se divertiu! até mais.`;
  }

  public gameIsEnd(): string {
    return `O jogo acabou! obrigado por jogar`
  }

  public invalid(): string {
    return `\n${kleur.red(`Digite um valor dentro do intervalo do menu!`)}`;
  }
}
