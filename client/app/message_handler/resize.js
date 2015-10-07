'use strict';

var AbstractMessageHandler = require('./abstract_message_handler');

class MessageHandlerResize extends AbstractMessageHandler {

  get MESSAGE_EVENT() {
    return 'resize';
  }

  handleMessage(message) {
    var height = parseInt(message.data.height, 10);
    var $iframe = $(this.getIntegrationIframe(message.source.integration_instance_id));

    if (height) {
      $iframe
        .height(height)
        .parent()
        .height(height);
    }
  }

}

module.exports = MessageHandlerResize;
