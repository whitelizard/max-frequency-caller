export default class MaxFreq {
  constructor(freq = 1) {
    this.runOk = true;
    this.delay = 1000 / freq;
  }

  _$call() {
    if (this.delayedCall) {
      const func = this.delayedCall[0];
      const args = this.delayedCall[1];
      func(...args);
      this.delayedCall = undefined;
      setTimeout(this._$call.bind(this), this.delay);
    } else {
      this.runOk = true;
    }
  }

  /**
   * Will run callback with latest arguments if at least delay since last call
   * @param  {Function} func  Callback to be runOk
   * @param  {Array} args  Arguments for the call
   * @return undefined
   */
  call(func, args) {
    if (this.runOk) {
      this.runOk = false;
      func(...args);
      setTimeout(this._$call.bind(this), this.delay);
    } else {
      this.delayedCall = [func, args];
    }
  }
}
