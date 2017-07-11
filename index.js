/**
 * Created by bangbang93 on 2017/7/11.
 */
'use strict';

const GeTui = require('./vanilla/GT.push');

const SYNC_METHOD = ['inspect', 'getBatch'];

const METHODS = Object.keys(GeTui.prototype);

METHODS.forEach((methodName) => {
  if (SYNC_METHOD.indexOf(methodName) !== -1) {
    return;
  }
  const method = GeTui.prototype[methodName];
  GeTui.prototype[methodName] = function () {
    const that = this;
    const arg = [...arguments];
    return new Promise((resolve, reject) => {
      arg.push(function (err, res) {
        if (err) return reject(err);
        return resolve(res);
      });
      return method.apply(that, arguments);
    })
  }
});

exports.GeTui = GeTui;

exports.AppMessage = require('./vanilla/getui/message/AppMessage');
exports.ListMessage = require('./vanilla/getui/message/ListMessage');
exports.SingleMessage = require('./vanilla/getui/message/SingleMessage');
exports.Message = require('./vanilla/getui/message/Message');

exports.APNTemplate = require('./vanilla/getui/template/APNTemplate');
exports.BaseTemplate = require('./vanilla/getui/template/BaseTemplate');
exports.IncTemplate = require('./vanilla/getui/template/IncTemplate');
exports.LinkTemplate = require('./vanilla/getui/template/LinkTemplate');
exports.NotificationTemplate = require('./vanilla/getui/template/NotificationTemplate');
exports.NotyPopLoadTemplate = require('./vanilla/getui/template/NotyPopLoadTemplate');
exports.PopupTransmissionTemplate = require('./vanilla/getui/template/PopupTransmissionTemplate');
exports.TransmissionTemplate = require('./vanilla/getui/template/TransmissionTemplate');

exports.AlertMsg = require('./vanilla/payload/AlertMsg');
exports.APNPayload = require('./vanilla/payload/APNPayload');
exports.DictionaryAlertMsg = require('./vanilla/payload/DictionaryAlertMsg');
exports.Payload = require('./vanilla/payload/Payload');
exports.SimpleAlertMsg = require('./vanilla/payload/SimpleAlertMsg');

exports.PushType = require('./vanilla/getui/PushType');
exports.Target = require('./vanilla/getui/Target');
