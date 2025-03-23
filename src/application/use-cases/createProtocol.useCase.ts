import { IAvroAdapter } from "../../core/interfaces/IAvroAdapter";
import { ISchemaRegistryAdapter } from "../../core/interfaces/ISchemaRegistryAdapter";

const logger = require("../../framework/common/logger");

export class CreateProtocolUseCase {
  constructor(
    private readonly avroAdapter: IAvroAdapter,
    private readonly schemaRegistryAdapter: ISchemaRegistryAdapter
  ) {}

  async execute(params: Buffer<ArrayBuffer>): Promise<void> {
    try {
      /**
      const schema = await this.schemaRegistryAdapter.fetchSchema();

      const decodedMessage: TicketCreatedEvent = await this.avroAdapter.decode({
        schema,
        avroMessage: params,
      });
      */
    } catch (error) {
      throw error;
    }
  }
}
