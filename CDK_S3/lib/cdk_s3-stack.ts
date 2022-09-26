import {App, Stack, StackProps} from "@aws-cdk/core";
import {Vpc} from '@aws-cdk/aws-ec2';
import {BlockPublicAccess, Bucket} from '@aws-cdk/aws-s3';

interface S3StackProps extends StackProps {
    vpc: Vpc;
}

export class S3Stack extends Stack {
    readonly sampleBucket: Bucket;

    constructor(scope: App, id: string, props?: S3StackProps) {
        super(scope, id, props);

        //Place you resource definitions here:
        this.sampleBucket = new Bucket(this, 'sampleBucket', {
            versioned: false,
            bucketName: 'bucket-created-using-cdk',
            publicReadAccess: false,
        });
    }
}