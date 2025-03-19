import { Avro } from "../types/avroAdapter.type";
import { TicketCreatedEvent } from "../types/event.type";

export interface IAvroAdapter {
  decode(params: Avro): Promise<TicketCreatedEvent>;
}
