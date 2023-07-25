import { Stack, Duration } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

export class Repro1626Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, "setAtRuntime", {
      runtime: Runtime.NODEJS_18_X,
      entry: "lib/setAtRuntime.ts",
      logRetention: RetentionDays.ONE_DAY,
    });

    new NodejsFunction(this, "setWithConstructor", {
      runtime: Runtime.NODEJS_18_X,
      entry: "lib/setWithConstructor.ts",
      logRetention: RetentionDays.ONE_DAY,
    });

    new NodejsFunction(this, "setWithEnv", {
      runtime: Runtime.NODEJS_18_X,
      entry: "lib/setWithEnv.ts",
      logRetention: RetentionDays.ONE_DAY,
      environment: {
        LOG_LEVEL: "WARN",
      },
    });
  }
}
