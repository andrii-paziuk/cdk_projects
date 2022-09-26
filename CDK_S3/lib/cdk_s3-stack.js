"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Stack = void 0;
const core_1 = require("@aws-cdk/core");
const aws_s3_1 = require("@aws-cdk/aws-s3");
class S3Stack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //Place you resource definitions here:
        this.reportBucket = new aws_s3_1.Bucket(this, 'reportBucket', {
            versioned: false,
            bucketName: 'sample-bucket-cdk-tutorial',
            publicReadAccess: false,
        });
    }
}
exports.S3Stack = S3Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX3MzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrX3MzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFxRDtBQUVyRCw0Q0FBMEQ7QUFNMUQsTUFBYSxPQUFRLFNBQVEsWUFBSztJQUc5QixZQUFZLEtBQVUsRUFBRSxFQUFVLEVBQUUsS0FBb0I7UUFDcEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsNEJBQTRCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBYkQsMEJBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcCwgU3RhY2ssIFN0YWNrUHJvcHN9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQge1ZwY30gZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XG5pbXBvcnQge0Jsb2NrUHVibGljQWNjZXNzLCBCdWNrZXR9IGZyb20gJ0Bhd3MtY2RrL2F3cy1zMyc7XG5cbmludGVyZmFjZSBTM1N0YWNrUHJvcHMgZXh0ZW5kcyBTdGFja1Byb3BzIHtcbiAgICB2cGM6IFZwYztcbn1cblxuZXhwb3J0IGNsYXNzIFMzU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gICAgcmVhZG9ubHkgcmVwb3J0QnVja2V0OiBCdWNrZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IFMzU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgICAgICAvL1BsYWNlIHlvdSByZXNvdXJjZSBkZWZpbml0aW9ucyBoZXJlOlxuICAgICAgICB0aGlzLnJlcG9ydEJ1Y2tldCA9IG5ldyBCdWNrZXQodGhpcywgJ3JlcG9ydEJ1Y2tldCcsIHtcbiAgICAgICAgICAgIHZlcnNpb25lZDogZmFsc2UsXG4gICAgICAgICAgICBidWNrZXROYW1lOiAnc2FtcGxlLWJ1Y2tldC1jZGstdHV0b3JpYWwnLFxuICAgICAgICAgICAgcHVibGljUmVhZEFjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=