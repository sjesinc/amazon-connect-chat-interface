// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * Simple utitlity for for Event subscription
 */
import EventBus from "./eventbus"

class ChatInterface {

  clientConfig = {
    contactFlowId: "",
    instanceId: "",
    region: "",
    stage: "prod",
    contactAttributes: {},
    featurePermissions: {}
  }

  initiateChat(input, success, failure) {
    let chatInput = Object.assign({}, this.clientConfig, input);
    EventBus.trigger("initChat", chatInput, success, failure);
  }

  acceptChat(input, success, failure) {
    let agentChatInput = Object.assign({}, input);
    EventBus.trigger("acceptChat", agentChatInput, success, failure);
  }
}

window.connect = window.connect || {};
window.connect.ChatInterface = window.connect.ChatInterface || new ChatInterface();


window.addEventListener("message", (data) => {
  if (data.initChat) {
    window.connect.ChatInterface.initiateChat(data);
  } else if (data.acceptChat) {
    window.connect.ChatInterface.acceptChat(data);
  }
})

