// módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//módulos internos
const fs = require('fs')

console.log('iniciamos o projeto')

operation()

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then((answer) => {
    const action = answer['action']
    console.log(action)
    if (action === 'Criar conta') createAccount()
    else if (action === 'Consultar saldo') {
    } else if (action === 'Depositar') {
    } else if (action === 'Sacar') {
    } else if (action === 'Sair') {
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
      process.exit()
    }
  }).catch(err => console.log(err))
}

//Create an account

function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Digite o nome sa sua conta:'
  }]).then((answer) => {
    const accountName = answer['accountName']
    console.info(accountName)

    if (!fs.existsSync('accounts')) fs.mkdirSync('accounts')
    if (fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome'))
      buildAccount()
      return
    }

    fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', (err) => console.log(err))
    operation()

  }).catch((err) => console.log(err))
}