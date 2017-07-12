(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.nap = factory());
}(this, (function () { 'use strict';

var nap = function nap (ms) {
  if ( ms === void 0 ) ms = 1000;

  return new Promise(function (resolve) { return setTimeout(resolve, ms); })
};

return nap;

})));
