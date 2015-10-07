'use strict';

var Dialog = require('./dialog');

class Confirm extends Dialog {

  get modalType() {
    return 'standard';
  }

  render() {
    super.render();

    var $eModal = this.window.$('e-modal');
    $eModal.attr('data-params', JSON.stringify({
      integrationId: this.options.source.integration_id,
      integrationInstanceId: 'SUITE',
      openerIntegrationInstanceId: this.options.source.integration_instance_id,
      dialogId: this.options.data.dialogId
    }));
  }

  getButtonHtml(onClick, classNames, text) {
    return [
      '<button type="button" onClick="' + onClick + '" class="' + classNames + '">',
      this.cleanMessage(text),
      '</button>'
    ].join('');
  }

  getModalContent(options) {
    var retval = [
      '<h2>' + this.cleanMessage(options.data.title) + '</h2>'
    ];

    if (options.data.body) {
      retval.push('<p>' + this.cleanMessage(options.data.body) + '</p>');
    }

    retval.push('<div class="e-buttongroup">');
    retval.push(this.getButtonHtml(
      'window.Emarsys.integration.dialog.submit(false)',
      'e-btn',
      options.data.cancel));
    retval.push(this.getButtonHtml(
      'window.Emarsys.integration.dialog.submit(true)',
      'e-btn e-btn-primary',
      options.data.ok));
    retval.push('</div>');

    return retval.join('\n');
  }

}

module.exports = Confirm;
