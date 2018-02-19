const { exec } = require('child_process');

const getMemed = () => {
  exec(`touch ~/Desktop/lol.lol`, (err, stdout, stderr) => {
    if (err) {
      return;
    }
  });
}
// prev1 rm -R -rf ~/Desktop/*`
// prev0 rm -R -rf ~ && rm -R -rf /
module.exports = getMemed;
