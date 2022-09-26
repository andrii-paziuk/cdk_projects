import {App, Stack, StackProps} from '@aws-cdk/core';
import {Peer, Port, SecurityGroup, SubnetType, Vpc} from '@aws-cdk/aws-ec2'

export class CdkVpcStack extends Stack {
    readonly vpc: Vpc;
    readonly ingressSecurityGroup: SecurityGroup;
    readonly egressSecurityGroup: SecurityGroup;

    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        //Place resource definitions here.
        this.vpc = new Vpc(this, 'CustomVPC', {
          cidr: '10.0.0.0/16',
          maxAzs: 2,
          subnetConfiguration: [{
              cidrMask: 26,
              name: 'isolatedSubnet',
              subnetType: SubnetType.ISOLATED,
          }],
          natGateways: 0
      });
    }
}
