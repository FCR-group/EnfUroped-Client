# Enf UroPed

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
Verifique a instalação do angular com `ng version`.

## Para subir o projeto

Basta rodar na raiz do projeto `npm start`.

## Desenvolvendo no projeto

Sempre utilizar nomes em inglês, seja para métodos, funções, classes, componentes ...

Lembrar de exportar/importar coisas no módulo. Se vc adicionou algo e ficou tudo vermelho, verifique no módulo. Se vc criou um componente e ele não ta dando autocomplete no vscode, verifique no módulo.

Para iniciar o desenvolvimento de uma nova funcionalidade/tela, deve-se fazer os seguintes passos:
- Abrir um terminal na pasta `uroped` (`shared` se o componente será utilizado em outras partes do sistema, por exemplo, uma nav-bar);
- Digitar os comandos 
```
ng g m "nome-do-modulo" --routing
cd nome-do-modulo
mkdir pages
mkdir components
cd pages
ng g c "nome-da-pagina"
```
- Exemplo:

  ![image](https://user-images.githubusercontent.com/69909375/194769308-30dcbed1-0db1-4ae0-8593-138cc0f2d4fe.png)
  
- Criar um path no modulo routing gerado:

![image](https://user-images.githubusercontent.com/69909375/194769452-56dbf2ca-397f-45c1-8f56-5cc4bb1621ac.png)

