import { App, Stack, StackProps } from "@aws-cdk/core";
import { Vpc } from '@aws-cdk/aws-ec2';
import { Bucket } from '@aws-cdk/aws-s3';
interface S3StackProps extends StackProps {
    vpc: Vpc;
}
export declare class S3Stack extends Stack {
    readonly reportBucket: Bucket;
    constructor(scope: App, id: string, props?: S3StackProps);
}
export {};
