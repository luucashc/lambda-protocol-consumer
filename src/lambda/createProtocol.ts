import { protocolController } from "../config/container";
import { Event, LambdaResponse } from "../core/types/handler.type";

const logger = require("../framework/common/logger");

export async function handler(params: Event): Promise<LambdaResponse> {
  try {
    logger.DEBUG("New ticket received", {
      global_event_name: "TICKET_RECEIVED",
      context: {
        service: "handler",
        params: params,
      },
    });

    await protocolController.createProtocol(params);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Event processed successfully!",
      }),
    };
  } catch (error) {
    throw error;
  }
}
