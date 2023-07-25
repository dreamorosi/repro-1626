import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger({ logLevel: "WARN" });

export const handler = async () => {
  logger.info("this log will NOT show");
  logger.warn("this log will show");
};
