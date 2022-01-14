const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const copy = function (name){
  let spinner = ora({
    text: 'loading',
    color: 'red'
  }).start();
  let timer = setInterval(() => {
    spinner.color = 'yellow';
    spinner.text += '.';
  }, 500);
  download('github:baimengchao/bai-cli', name, (err) => {
    if(err) {
      console.log(err)
      return;
    } 
    spinner.stop();
    clearInterval(timer)
    console.log('创建成功')
    process.exit()
  })
}

module.exports = {
  copy
}