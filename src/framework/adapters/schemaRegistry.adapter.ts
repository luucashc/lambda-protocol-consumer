import axios from "axios";
import { ISchemaRegistryAdapter } from "../../core/interfaces/ISchemaRegistryAdapter";

const logger = require("../common/logger");

export class SchemaRegistryAdapter implements ISchemaRegistryAdapter {
  async fetchSchema(): Promise<string> {
    try {
      const response = await axios.get(
        `${process.env.REGISTRY_URL}/apis/registry/v2/groups/default/artifacts/${process.env.AVRO_SCHEMA_V1}/versions/latest`
      );

      return JSON.stringify(response.data);
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
