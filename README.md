# Max Frequency Caller

Create a Max Frequency Caller to then run functions through it that will be limited to running with a max frequency.

```javascript
import MaxFreq from 'max-frequency-caller';

const maxFreq = new MaxFreq(2); // 2 times a second

function publishData(channel, data) {
  // ...
  // (In some way costly for the system, e.g
  // due to the use of some external connection)
}

export function publish(channel, data) {
  maxFreq(publishData, [channel, data]);
}
// If publish is called multiple times, only the calls that are
// at least 500 ms apart will run.
```
