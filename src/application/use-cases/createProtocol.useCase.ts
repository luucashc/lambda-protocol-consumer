import { IAvroAdapter } from "../../core/interfaces/IAvroAdapter";
import { ISchemaRegistryAdapter } from "../../core/interfaces/ISchemaRegistryAdapter";
import { TicketCreatedEvent } from "../../core/types/event.type";

const logger = require("../../framework/common/logger");

export class CreateProtocolUseCase {
  constructor(
    private readonly avroAdapter: IAvroAdapter,
    private readonly schemaRegistryAdapter: ISchemaRegistryAdapter
  ) {}

  async execute(params: Buffer<ArrayBuffer>): Promise<void> {
    try {
      const schema = await this.schemaRegistryAdapter.fetchSchema();

      const decodedMessage: TicketCreatedEvent = await this.avroAdapter.decode({
        schema,
        avroMessage: params,
      });

      logger.INFO("Event payload decoded", {
        global_event_name: "EVENT_DECODED",
        context: {
          service: "handler",
          content: decodedMessage,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
