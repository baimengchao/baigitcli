#!/usr/bin/env node
const program = require('commander')
const {create} = require('../lib/create')

program
  .version('1.0.0','-v,-version')

program
  .command('create <name>')
  .description('create a project')
  .action((name)=>{
    create(name)
  })

 program.parse(process.argv)