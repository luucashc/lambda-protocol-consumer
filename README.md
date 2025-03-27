# lambda-protocol-consumer

## Contexto de negócio

Example project for a lambda function using Clear Architecture and good programming practices. In this example, the lambda will be responsible for listening to a Kafka event, validating the Avro schema and creating a protocol internally.

## Funcionalidades
- Consumir evento Kafka com payload serializado em Avro
- Decodificar o evento usando Schema Registry
- Executar o caso de uso de criação de protocolo

## Documentações

[ Architecture ]

## Arquitetura

Este projeto segue os princípios da Clean Architecture, separando claramente responsabilidades em diferentes camadas. Isso facilita a escalabilidade, testabilidade e manutenibilidade do sistema.

### Estrutura de pastas:

- **Application (`application`)**: onde ficam os casos de uso (regras de negócio orquestradas).
- **Core (`core`)**: O core é a camada mais interna do projeto sendo responsável pelas entidades ou os objetos do domínio de negócio, ela é independente de outras camadas.
  - **interfaces**: contratos (interfaces) que os adapters devem seguir.
  - **types**: tipos reutilizáveis entre as camadas.
- **Framework (`framework`)**: Camada responsável por todas as dependências externas do projeto, todas as regras externas estão isoladas no próprio adapter, e deve ser utilizada sempre pelo orquestrador(usecase).
  - **adapters**: implementações concretas dos contratos definidos na camada `core`, como Kafka, Schema Registry e HTTP.
  - **common**: constantes e logger reutilizáveis no projeto.
- **Handlers (`handlers`)**: entrada do Lambda, ponto de entrada da AWS Lambda que consome os eventos e aciona os casos de uso.

---

```bash
src/
├── application/
│   └── use-cases/                # Casos de uso da aplicação
│       └── closeTicket.useCase.ts
├── config/                       # Configuração e injeção de dependências
│   ├── config.ts
│   └── container.ts
├── core/
│   ├── interfaces/               # Contratos dos adapters (portas)
│   ├── types/                    # Tipos reutilizáveis
├── framework/
│   ├── adapters/                 # Adapters (implementações concretas)
│   ├── common/                   # Utilitários como logger e constantes
├── handlers/                 # Entradas dos Lambdas
├── tests/unit/                   # Testes unitários
```

## Monitoramento

[ New Relic ](https://newrelic.com/lp/developersignup-wglp?utm_medium=cpc&utm_source=google&utm_campaign=EVER-GREEN_BRAND_SEARCH_BRAND_AMER_LATAM_EN&utm_network=g&utm_keyword=new%20relic&utm_device=c&_bt=665617620689&_bm=e&_bn=g&cq_cmp=12566779323&cq_con=119636858796&cq_plac=&l5_source=googleads&l5_cid=12566779323&l5_adid=665617620689&mkt_network=g&adgroup=new_relic&gad_source=1&gclid=Cj0KCQjws-S-BhD2ARIsALssG0aR9W7zeVWMxyntL1WMP5lhv6UciS2_N6fkrMWP07TtJAipOTVd70gaAjCCEALw_wcB)

## Pré-requisitos

[ Node.js 20 ](https://www.npmjs.com/get-npm)

[ Serverless Framework ](https://www.serverless.com/framework/docs/getting-started/)

## Instalação do Projeto

```sh
git clone https://github.com/luucashc/worker-create-protocol-consumer.git
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
