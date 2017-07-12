var nap = function nap (ms) {
  if ( ms === void 0 ) ms = 1000;

  return new Promise(function (resolve) { return setTimeout(resolve, ms); })
};

export default nap;
