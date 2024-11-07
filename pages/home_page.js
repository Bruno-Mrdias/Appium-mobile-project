const { I } = inject();

module.exports = {

  fields: {
    codigo: '~codigo',
    aluno: '~aluno',
  },

  validateLoginSucces(){
    I.waitForElement('~codigo', 5)
    I.seeElement('~codigo')
  }

  // insert your locators and methods here
}
