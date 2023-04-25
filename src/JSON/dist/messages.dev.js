"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllMessages = exports.messages = void 0;
var messages = [{
  userId: 1,
  fromSelf: true,
  message: 'jjuud kjikiuiu sjjiuiu',
  image: 'assets/stream.png'
}, {
  userId: 1,
  fromSelf: false,
  message: 'jtitorito oieroirtit',
  image: ''
}];
exports.messages = messages;

var getAllMessages = function getAllMessages(currentUser) {
  return messages.map(function (message) {
    return message.userId === currentUser;
  });
};

exports.getAllMessages = getAllMessages;
//# sourceMappingURL=messages.dev.js.map
