# App culto Regional

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" style="width:5%;" /><img src="https://camo.githubusercontent.com/9eecc42439347332f256a326363924551042f5b96235f972982512199476611a/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667" style="width:5%;" /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" style="width:5%" ><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" style="width:5%">

---

## Passos para iniciar os serviços

1. É necessário que os pacotes tenham sido instalados
    - `git clone https://github.com/tonmarcondes/cultoReconnect.git`
    - `cd cultoReconnect`
    - `npm install`

2. [Iniciar a API](app-culto-regional#servidor-de-api)
3. [Rodar o App](app-culto-regional#rodar-aplicação-pwa)
4. [Gerar linlk externo](app-culto-regional#ngrok)

## Servidor de API

> Liga o banco de dados do JSON-SERVER em http://localhost:3000

```bash
  $ cd server
  $ json-server --watch db.json
```

<a id="2"></a> 
## Rodar Aplicação PWA

> Inicia a aplicação em http://localhost:5000

```bash
  $ ng build 
  $ cd dist/cultoReconnect
  $ npx serve
```

<a id="3"></a> 
## NGROK

> libera a aplicação da rede interna para fora

```bash
$ ./ngrok http 5000
```
