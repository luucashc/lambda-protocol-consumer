import { ICreateProtocolUseCase } from "../../core/interfaces/ICreateProtocolUseCase";
import { Event } from "../../core/types/handler.type";

export class ProtocolController {
  constructor(private readonly createProtocolUseCase: ICreateProtocolUseCase) {}

  async createProtocol(params: Event): Promise<void> {
    try {
      for (let key in params.records) {
        await Promise.all(
          params.records[key].map(async (record) => {
            const message = Buffer.from(record.value, "base64");
            await this.createProtocolUseCase.execute(message);
          })
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
