import { App, Stack, StackProps } from '@aws-cdk/core';
import { SecurityGroup, Vpc } from '@aws-cdk/aws-ec2';
export declare class CdkVpcStack extends Stack {
    readonly vpc: Vpc;
    readonly ingressSecurityGroup: SecurityGroup;
    readonly egressSecurityGroup: SecurityGroup;
    constructor(scope: App, id: string, props?: StackProps);
}
