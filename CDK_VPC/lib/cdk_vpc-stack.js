"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkVpcStack = void 0;
const core_1 = require("@aws-cdk/core");
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
class CdkVpcStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //Place resource definitions here.
        this.vpc = new aws_ec2_1.Vpc(this, 'CustomVPC', {
            cidr: '10.0.0.0/16',
            maxAzs: 2,
            subnetConfiguration: [{
                    cidrMask: 26,
                    name: 'isolatedSubnet',
                    subnetType: aws_ec2_1.SubnetType.ISOLATED,
                }],
            natGateways: 0
        });
        this.ingressSecurityGroup = new SecurityGroup(this, 'ingress-security-group', {
            vpc: this.vpc,
            allowAllOutbound: false,
            securityGroupName: 'IngressSecurityGroup',
        });
        this.ingressSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.tcp(3306));

        this.egressSecurityGroup = new SecurityGroup(this, 'egress-security-group', {
            vpc: this.vpc,
            allowAllOutbound: false,
            securityGroupName: 'EgressSecurityGroup',
        });
        this.egressSecurityGroup.addEgressRule(Peer.anyIpv4(), Port.tcp(80));
        }
}
exports.CdkVpcStack = CdkVpcStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX3ZwYy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNka192cGMtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXFEO0FBQ3JELDhDQUEyRTtBQUUzRSxNQUFhLFdBQVksU0FBUSxZQUFLO0lBS2xDLFlBQVksS0FBVSxFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUNsRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3BDLElBQUksRUFBRSxhQUFhO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsbUJBQW1CLEVBQUUsQ0FBQztvQkFDbEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsVUFBVSxFQUFFLG9CQUFVLENBQUMsUUFBUTtpQkFDbEMsQ0FBQztZQUNGLFdBQVcsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXBCRCxrQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcCwgU3RhY2ssIFN0YWNrUHJvcHN9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHtQZWVyLCBQb3J0LCBTZWN1cml0eUdyb3VwLCBTdWJuZXRUeXBlLCBWcGN9IGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInXG5cbmV4cG9ydCBjbGFzcyBDZGtWcGNTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgICByZWFkb25seSB2cGM6IFZwYztcbiAgICByZWFkb25seSBpbmdyZXNzU2VjdXJpdHlHcm91cDogU2VjdXJpdHlHcm91cDtcbiAgICByZWFkb25seSBlZ3Jlc3NTZWN1cml0eUdyb3VwOiBTZWN1cml0eUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IEFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIC8vUGxhY2UgcmVzb3VyY2UgZGVmaW5pdGlvbnMgaGVyZS5cbiAgICAgICAgdGhpcy52cGMgPSBuZXcgVnBjKHRoaXMsICdDdXN0b21WUEMnLCB7XG4gICAgICAgICAgY2lkcjogJzEwLjAuMC4wLzE2JyxcbiAgICAgICAgICBtYXhBenM6IDIsXG4gICAgICAgICAgc3VibmV0Q29uZmlndXJhdGlvbjogW3tcbiAgICAgICAgICAgICAgY2lkck1hc2s6IDI2LFxuICAgICAgICAgICAgICBuYW1lOiAnaXNvbGF0ZWRTdWJuZXQnLFxuICAgICAgICAgICAgICBzdWJuZXRUeXBlOiBTdWJuZXRUeXBlLklTT0xBVEVELFxuICAgICAgICAgIH1dLFxuICAgICAgICAgIG5hdEdhdGV3YXlzOiAwXG4gICAgICB9KTtcbiAgICB9XG59XG4iXX0=