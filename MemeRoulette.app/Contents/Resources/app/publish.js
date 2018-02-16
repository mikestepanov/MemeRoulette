const { exec } = require('child_process');
const appName = 'MemeRoulette';
const compileMacCommand = 'electron-packager . app --overwrite --platform=darwin --arch=x64 --icon=assets/images/icons/electron.icns --prune=true --out=release-builds';
const moveCommand = `mv release-builds/app-darwin-x64/app.app ${appName}.app && rm -rf -R release-builds`;
const removeCommand = `rm -rf -R release-builds`;
const setPictureCommand = `osascript -e 'tell application "Finder" to set desktop picture to POSIX file "${__dirname + '/assets/icons/electron.png'}"'`;

exec(compileMacCommand, (err, stdout, stderr) => {
  if (err) {
    return;
  } else {
    exec(moveCommand, () => {
      exec(removeCommand);
      exec(setPictureCommand);
    });
  }
});
