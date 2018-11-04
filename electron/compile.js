const { exec } = require("child_process");

const appName = "MemeRoulette";

const compileMacApp = "electron-packager . app --overwrite --platform=darwin --arch=x64 --icon=assets/images/icons/electron.icns --prune=true --out=release-builds";
const moveAppIntoRoot = `mv release-builds/app-darwin-x64/app.app ${appName}.app`;
const cleanup = `rm -rf release-builds`;

const compile = async () => {
  try {
    await exec(compileMacApp)
    await exec(moveAppIntoRoot)
    await exec(cleanup)
  } catch (err) {
    console.error('to err is human => ', err)
  }
};

compile()
