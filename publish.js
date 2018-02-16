const { exec } = require('child_process');
const compileMacCommand = 'electron-packager . MemeRoulette --overwrite --platform=darwin --arch=x64 --icon=assets/images/icons/electron.icns --prune=true --out=release-builds';

exec(compileMacCommand, (err, stdout, stderr) => {
  if (err) {
    return;
  } else {

  }
});
