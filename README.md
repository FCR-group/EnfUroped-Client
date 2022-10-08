# EnfUropedClient

## Como settar o ambiente
Antes de instalar de fato os pré-requisitos, para facilitar a codificação, pesquise nas configurações do vscode a opção "Format on Save" e instale a seguinte extensão:
- Angular extension pack (Loiane Groner)

```
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
sudo source ~/.bashrc
sudo nvm install v14.10.1
sudo nvm use v14.10.1
sudo npm install npm@latest -g
sudo npm install -g @angular/cli
```


Verifique a instalação do node com `node -v` e saída deve ser algo como:
```
v14.20.1
```
Verifique a instalação do npm com `npm --version` e saída deve ser algo como:
```
8.19.2
```
Verifique a instalação do angular com `ng version` e saída deve ser algo como:
```
                                                                                                                         _                      _                 ____ _     ___                                                            / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|                                                          / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |                                                          / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |                                                         /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|                                                                       |___/                                                                                                                                                                                                                                                                                                                                       Angular CLI: 14.2.5                                                                                                 Node: 14.20.1                                                                                                       Package Manager: npm 8.19.2                                                                                         OS: linux x64                                                                                                                                                                                                                           Angular: 14.2.5                                                                                                     ... animations, cli, common, compiler, compiler-cli, core, forms                                                    ... platform-browser, platform-browser-dynamic, router                                                                                                                                                                                  Package                         Version                                                                             ---------------------------------------------------------                                                           @angular-devkit/architect       0.1402.5                                                                            @angular-devkit/build-angular   14.2.5                                                                              @angular-devkit/core            14.2.5                                                                              @angular-devkit/schematics      14.2.5                                                                              @schematics/angular             14.2.5                                                                              rxjs                            7.5.7                                                                               typescript                      4.7.4   
```

## Para subir o projeto

Basta rodar na raiz do projeto `npm start`.

## Desenvolvendo no projeto

Sempre utilizar nomes em inglês, seja para métodos, funções, classes, componentes ...

Lembrar de exportar/importar coisas no módulo. Se vc adicionou algo e ficou tudo vermelho, verifique no módulo. Se vc criou um componente e ele não ta dando autocomplete no vscode, verifique no módulo.

Para criar um componente utiliza-se o comando `ng g c "nome-do-componente"` no path de onde você quer criar o componente, sendo que o path de criação deve seguir a seguinte regra:
- Se o componente será utilizado em outras partes do sistema ele deve ser criado na pasta `shared`.
- Se um componente está muito grande, deve-se analisar se algo não pode ser componentizado. Casos seja o caso, crie-o na pasta de components dentro dessa pasta do componente. Caso a pasta não exista crie, sempre em inglês: `components`