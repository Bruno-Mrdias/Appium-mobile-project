const { fields } = require("./home_page");
const { buttons } = require("./login_page");

const { I } = inject();

module.exports = {

  fields:{
    code: '~codigo',
    aluno: '~aluno',
    search: '~search'
  },

  buttons: {
    save: '~salvar',
    cancel: '~cancelar',
    okBtn: '#button1',
    cancel: '~cancelar'
  },

  messages: {
    // invalid: '~alertTitle'
  },

  newStudent(code,aluno){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.aluno, aluno)
    I.click(this.buttons.save)
  },

  noSaveStudent(code){
    I.fillField(this.fields.code, code)
    I.click(this.buttons.save)
  },

  noSaveStudentName(name){
    I.fillField(this.fields.aluno, name)
    I.click(this.buttons.save)
  },

  cancelStudent(code, aluno){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.aluno, aluno)
    I.click(this.buttons.cancel)
  },

  searchStudent(search,check){
    I.fillField(this.fields.search,search)
    I.seeElement(this.fields.aluno, check)
  },

  validateSucces(){
    I.waitForElement('Dados salvos!', 5)
    I.see('Dados salvos!')
  },

  validateLoginError(){
    I.waitForElement('Os campos devem ser preenchidos!', 5)
    I.click('OK')
  },

  validateCancelBtn(name){
    I.dontSee(name)
  }
}
