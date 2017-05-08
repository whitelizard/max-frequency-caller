let runOk = true;
let delayedArgs;

function timing(func, delay) {
  if (delayedArgs) {
    func(...delayedArgs);
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
export default function maxFreq(func, delay, args) {
  if (runOk) {
    delayedArgs = undefined;
    runOk = false;
    func(...args);
    setTimeout(timing.bind(this, func, delay), delay);
  } else {
    delayedArgs = args;
  }
}
