// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * UPDATE ME - add endpoints after deploying the CFN template
 *
 * CloudFormation Template: https://github.com/amazon-connect/amazon-connect-chat-ui-examples/tree/master/cloudformationTemplates/startChatContactAPI
 * 
 * Prerequisites:
 *  - Amazon Connect Instance: https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 *  - InstanceId: https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html
 *  - ContactFlowId: https://docs.aws.amazon.com/connect/latest/adminguide/find-contact-flow-id.html
 */

var contactFlowId = "8a7fa237-d13c-4b69-b9ec-5d78ae6e8f58"; // TODO: Fill in
var instanceId = "05b21b19-6755-4299-9add-b2f099da1dbc"; // TODO: Fill in
var apiGatewayEndpoint = "https://7xfjd9yz64.execute-api.us-east-1.amazonaws.com/Prod/"; // TODO: Fill in with the API Gateway endpoint created by your CloudFormation template
var region = "us-east-1"; // TODO: Fill in
