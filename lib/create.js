const inpuirer = require('inquirer')
const {copy} = require('./createProject')


const question = [
  {
    type: 'confirm',
    message:'确认要创建项目么？(y/n)',
    name: 'sure',
    default: 'y'
  }
]

function create(name){
  inpuirer.prompt(question).then((data)=>{
    copy(name)
  })
}


module.exports = {
  create
}

