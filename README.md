# SoundNotificationWebpackPluginn
Very simple webpack plugin that plays a sound on compile is done

# Usage

```js 
var SoundNotificationWebpackPlugin = require('sound-notification-webpack-plugin');

new SoundNotificationWebpackPlugin(options);
```

## Default options:

```js
options = {
  player: 'paplay',
  successSound: '/usr/share/sounds/ubuntu/stereo/dialog-information.ogg',
  errorSound: '/usr/share/sounds/ubuntu/stereo/dialog-error.ogg'
}
```
