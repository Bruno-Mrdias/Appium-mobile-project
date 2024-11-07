
const { I } = inject();

Given('I fill the email {string}', () => {
 I.fillField('~email', 'teste@123teste.com')
});

Given('I fill the password {string}', () => {
  I.fillField('~senha', '123456');
});

When('I click in the Entrar button', () => {
  I.click('~entrar');
});

Then('I see in the user login Salvar button', () => {
  I.see('Salvar')
});

Then('I see in the message login error {string}', () => {
  I.see('Erro no login!')
});

Given('I fill the Aluno {string}', () => {
  I.fillField('~aluno', 'Joao david')
});

Given('I fill the código {string}', () => {
  I.fillField('~codigo', '12345')
});

When('I click in the Salvar button', () => {
  I.click('~salvar')
});

Then('I see {string}', () => {
  I.see('Dados salvos!')
});

Given('I fill the código  {string}', () => {
  I.fillField('~codigo', '12345')
});

When('I click in the Cancelar button', () => {
  I.click('~cancelar')
});


Given('I fill the Search {string}', () => {
  I.fillField('~search', 'José')
});


Given('I fill the correct email {string}', () => {
  I.fillField('~email', 'teste@teste.com')
});


Then('I see the error message {string}', () => {
  I.see('Os campos devem ser preenchidos!')
});


Then('I see the Student {string}', () => {
  I.see('55555')
});

Then('I do not see in field aluno {string}', () => {
  I.dontSee('Joao david')
});
