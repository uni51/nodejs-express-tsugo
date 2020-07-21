var util = {};

util.inherits = function (child, parent) {
  child.prototype = parent.prototype;
  child.prototype.constructor = parent;
};

util.base = function (self, ...args) {
  // Object.getPrototypeOfで、インスタンスからプロトタイプを取得する
  var prototype = Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
};

// var Dog = function () {
//   util.base(this);
// };
// util.inherits(Dog, Animal);
