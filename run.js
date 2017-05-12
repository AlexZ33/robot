
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
import config from './config.js'

const run = async () => {
  await login()
}




const login = async () =>{
  await nightmare.goto('https://cnodejs.org/signin')
  await nightmare.wait('#signin_form')

  await nightmare.click('.form-actions :nth-child(2)')
  await nightmare.wait('#login_field')

  await nightmare.type('#login_field', config.username)
  await nightmare.type('#password',config.password)

  await nightmare.click('input[name="commit"]')
}

run()