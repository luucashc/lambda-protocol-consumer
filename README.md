# worker-create-protocol-consumer

## Descrição do Projeto

Worker responsável por ouvir um evento Kafka, validar o schema avro e criar um protocolo em uma API interna.

## Documentações

[ Clear Architecture ]()

[ Clear Code ]()

## Monitoramento

[ New Relic ](https://newrelic.com/lp/developersignup-wglp?utm_medium=cpc&utm_source=google&utm_campaign=EVER-GREEN_BRAND_SEARCH_BRAND_AMER_LATAM_EN&utm_network=g&utm_keyword=new%20relic&utm_device=c&_bt=665617620689&_bm=e&_bn=g&cq_cmp=12566779323&cq_con=119636858796&cq_plac=&l5_source=googleads&l5_cid=12566779323&l5_adid=665617620689&mkt_network=g&adgroup=new_relic&gad_source=1&gclid=Cj0KCQjws-S-BhD2ARIsALssG0aR9W7zeVWMxyntL1WMP5lhv6UciS2_N6fkrMWP07TtJAipOTVd70gaAjCCEALw_wcB)

## Pré-requisitos

[ Node.js 20 ](https://www.npmjs.com/get-npm)

[ Serverless Framework ](https://www.serverless.com/framework/docs/getting-started/)

## Instalação do Projeto

```sh
git clone worker-create-protocol-consumer
```

```sh
cd worker-create-protocol-consumer
```

```sh
npm install
```

## Como Rodar

```sh
sls invoke local --function app --path event-example.json

```

## Como Testar

```sh
npm test
```
