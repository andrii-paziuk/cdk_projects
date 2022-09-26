import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { VpcStack } from "../../CDK_VPC/lib/cdk_vpc-stack";
import { S3Stack } from "../lib/cdk_s3-stack";

const app = new cdk.App();
const vpcStack  = new VpcStack(app, 'VpcStack');
new S3Stack(app, 'S3Stack', {vpc: vpcStack.vpc});
app.synth();