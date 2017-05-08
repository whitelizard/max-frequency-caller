"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = maxFreq;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var runOk = true;
var delayedArgs = void 0;

function timing(func, delay) {
  if (delayedArgs) {
    func.apply(undefined, _toConsumableArray(delayedArgs));
    delayedArgs = undefined;
    setTimeout(timing.bind(this, func, delay), delay);
  } else {
    runOk = true;
  }
}
/**
 * Will run callback with latest arguments if at least delay since last call
 * @param  {Function} func  Callback to be runOk
 * @param  {Number} delay Minimum delay between calls
 * @param  {Array} args  Arguments for the call
 * @return undefined
 */
function maxFreq(func, delay, args) {
  if (runOk) {
    delayedArgs = undefined;
    runOk = false;
    func.apply(undefined, _toConsumableArray(args));
    setTimeout(timing.bind(this, func, delay), delay);
  } else {
    delayedArgs = args;
  }
}