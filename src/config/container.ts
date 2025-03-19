import { ProtocolController } from "../application/controllers/protocol.controller";
import { CreateProtocolUseCase } from "../application/use-cases/createProtocol.useCase";
import { AvroAdapter } from "../framework/adapters/avro.adapter";
import { SchemaRegistryAdapter } from "../framework/adapters/schemaRegistry.adapter";

const avroAdapter = new AvroAdapter();
const schemaRegistryAdapter = new SchemaRegistryAdapter();

const protocolUseCase = new CreateProtocolUseCase(
  avroAdapter,
  schemaRegistryAdapter
);

export const protocolController = new ProtocolController(protocolUseCase);
