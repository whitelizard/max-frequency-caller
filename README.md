# Max Frequency Caller

Wrap a frequently called function in this Max Frequency Caller to limit the running of it to a max frequency.

```javascript
import maxFreq from 'max-frequency-caller';

function publishData(channel, data) {
  // ...
  // (In some way costly for the system, e.g
  // due to the use of some external connection)
}

export default function publish(channel, data) {
  maxFreq(publishData, [channel, data], 500);
}
// If publish is called multiple times, only the calls that are
// at least 500 ms apart will run.
```
