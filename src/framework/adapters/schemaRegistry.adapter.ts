import { ISchemaRegistryAdapter } from "../../core/interfaces/ISchemaRegistryAdapter";

const logger = require("../common/logger");

export class SchemaRegistryAdapter implements ISchemaRegistryAdapter {
  async fetchSchema(): Promise<string> {
    try {
      return JSON.stringify({});
    } catch (error: any) {
      logger.ERROR("Error ocurrented on adapter", {
        global_event_name: "USE_CASE_EXECUTION_FAILED",
        context: {
          service: "schema-registry-adapter",
          action: "FETCH_SCHEMA",
          status: error.status ? error.status : null,
          stack: error.stack ? error.stack : null,
        },
      });
      throw error;
    }
  }
}
