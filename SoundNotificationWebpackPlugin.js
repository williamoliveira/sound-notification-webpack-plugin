/**
 * WebpackSoundNotificationPlugin
 *
 * @type {exports|module.exports}
 */

var sys = require('util');
var exect = require('child_process').exec;

var player = 'paplay';
var successSound = '/usr/share/sounds/ubuntu/stereo/dialog-information.ogg';
var errorSound = '/usr/share/sounds/ubuntu/stereo/dialog-error.ogg';

function SoundNotificationWebpackPlugin(options) {

    if(!options){
        return;
    }

    player = options.player || player;
    successSound = options.successSound || successSound;
    errorSound = options.errorSound || errorSound;
}

SoundNotificationWebpackPlugin.prototype.apply = function (compiler) {

    compiler.plugin('done', function(stats) {
        
        if(stats.compilation.errors.length > 0){
            return playErrorSound();
        }
        
        playSuccessSound();
    });

    compiler.plugin('failed', playErrorSound);
};

function playSuccessSound() {
    playSound(successSound);
}

function playErrorSound() {
    playSound(errorSound);
}

function playSound(soundFile) {
    exec(player + ' ' + soundFile);
}

function exec(cmd) {
    exect(cmd, function (error, stdout, stderr) {
        console.log(stdout);
    });
}

module.exports = SoundNotificationWebpackPlugin;
