"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Stack = void 0;
const core_1 = require("@aws-cdk/core");
const aws_s3_1 = require("@aws-cdk/aws-s3");
class S3Stack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //Place you resource definitions here:
        this.sampleBucket = new aws_s3_1.Bucket(this, 'sampleBucket', {
            versioned: false,
            bucketName: 'S3-bucket-using-cdk',
            encryption: BucketEncryption.KMS_MANAGED,
            publicReadAccess: false,
            blockPublicAccess: aws_s3_1.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: RemovalPolicy.DESTROY
        });
    }
}
exports.S3Stack = S3Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX3MzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrX3MzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFxRDtBQUVyRCw0Q0FBMEQ7QUFNMUQsTUFBYSxPQUFRLFNBQVEsWUFBSztJQUc5QixZQUFZLEtBQVUsRUFBRSxFQUFVLEVBQUUsS0FBb0I7UUFDcEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUscUJBQXFCO1lBQ2pDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsaUJBQWlCLEVBQUUsMEJBQWlCLENBQUMsU0FBUztZQUM5QyxhQUFhLEVBQUUsYUFBYSxDQUFDLE9BQU87U0FDdkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBaEJELDBCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwLCBTdGFjaywgU3RhY2tQcm9wc30gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCB7VnBjfSBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbmltcG9ydCB7QmxvY2tQdWJsaWNBY2Nlc3MsIEJ1Y2tldH0gZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcblxuaW50ZXJmYWNlIFMzU3RhY2tQcm9wcyBleHRlbmRzIFN0YWNrUHJvcHMge1xuICAgIHZwYzogVnBjO1xufVxuXG5leHBvcnQgY2xhc3MgUzNTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgICByZWFkb25seSByZXBvcnRCdWNrZXQ6IEJ1Y2tldDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBBcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogUzNTdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIC8vUGxhY2UgeW91IHJlc291cmNlIGRlZmluaXRpb25zIGhlcmU6XG4gICAgICAgIHRoaXMuc2FtcGxlQnVja2V0ID0gbmV3IEJ1Y2tldCh0aGlzLCAnc2FtcGxlQnVja2V0Jywge1xuICAgICAgICAgICAgdmVyc2lvbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6ICdTMy1idWNrZXQtdXNpbmctY2RrJyxcbiAgICAgICAgICAgIGVuY3J5cHRpb246IEJ1Y2tldEVuY3J5cHRpb24uS01TX01BTkFHRUQsXG4gICAgICAgICAgICBwdWJsaWNSZWFkQWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGJsb2NrUHVibGljQWNjZXNzOiBCbG9ja1B1YmxpY0FjY2Vzcy5CTE9DS19BTEwsXG4gICAgICAgICAgICByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1lcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19