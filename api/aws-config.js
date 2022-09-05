// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const appConfig = {
    apiGatewayInvokeUrl:'https://gu7bo2fxg3.execute-api.us-east-1.amazonaws.com/Stage/',
    cognitoUserPoolId: 'us-east-1_GcITiyilu',
    cognitoAppClientId: '1rf2t3pqutgllnt09o67p4dvu0',
    cognitoIdentityPoolId: 'us-east-1:39550c69-92ea-4fe3-ae99-f16feb9ed773',
    appInstanceArn: 'arn:aws:chime:us-east-1:868858670133:app-instance/31e44fc8-842a-4e20-a27e-370e2cf24cbd',
    region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
    attachments_s3_bucket_name: 'amazon-chime-sdk-chat-demo-chatattachmentsbucket-8om5j9iyozf4'
  };
module.exports = appConfig;
  