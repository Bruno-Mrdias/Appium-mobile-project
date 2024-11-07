const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    senha: '~senha'
  },

  buttons: {
    login: '~entrar'
  },

  messages: {
    loginError: '~lognFail'
  },

  userLog(email, senha){
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.senha, senha);
    I.click(this.buttons.login);
  },

  validateLoginError(){
    I.waitForElement(this.messages.loginError, 5)
    I.seeElement(this.messages.loginError)
  }
  // insert your locators and methods here
}
