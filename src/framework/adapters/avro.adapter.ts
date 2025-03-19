import avro from "avsc";
import { IAvroAdapter } from "../../core/interfaces/IAvroAdapter";
import { Avro } from "../../core/types/avroAdapter.type";
import { TicketCreatedEvent } from "../../core/types/event.type";

const logger = require("../common/logger");

export class AvroAdapter implements IAvroAdapter {
  async decode(params: Avro): Promise<TicketCreatedEvent> {
    try {
      const avroSchema = avro.Type.forSchema(JSON.parse(params.schema));
      return avroSchema.fromBuffer(params.avroMessage);
    } catch (error: any) {
      logger.ERROR("Error ocurrented on adapter", {
        global_event_name: "USE_CASE_EXECUTION_FAILED",
        context: {
          service: "avro-adapter",
          action: "DECODE",
          status: error.status ? error.status : null,
          stack: error.stack ? error.stack : null,
        },
      });
      throw error;
    }
  }
}
