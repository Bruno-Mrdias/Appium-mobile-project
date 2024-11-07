Feature: Login
  I with a user
  I would like to do login in the application 
  To access the system

  Scenario: Login with success
    Given I fill the correct email "teste@teste.com"
    And I fill the password "123456"
    When I click in the Entrar button
    Then I see in the user login Salvar button  

     Scenario: Login with error 
      Given I fill the email "teste@123teste.com"
      And I fill the password "123456"
      When I click in the Entrar button
      Then I see in the message login error "Erro no login!" 

     Scenario: Add new Student with success
     Given I fill the correct email "teste@teste.com"
     And I fill the password "123456"
     When I click in the Entrar button
     And I fill the Aluno "Joao david"
     And I fill the código "12345"
     When I click in the Salvar button
     Then I see "Dados salvos!" 

     Scenario: Add new Student with error
     Given I fill the correct email "teste@teste.com"
     And I fill the password "123456"
     When I click in the Entrar button
     And I fill the código "12345"
     When I click in the Salvar button
     Then I see the error message "Os campos devem ser preenchidos!"

    Scenario: Add new Student with  name error
      Given I fill the correct email "teste@teste.com"
      And I fill the password "123456"
      When I click in the Entrar button
      And I fill the Aluno "Joao david"
      When I click in the Salvar button
      Then I see the error message "Os campos devem ser preenchidos!" 

    Scenario: Add new Student canceled
     Given I fill the correct email "teste@teste.com"
      And I fill the password "123456"
      When I click in the Entrar button
      And I fill the código  "12345"
      And I fill the Aluno "Joao david"
      When I click in the Cancelar button
      Then I do not see in field aluno "Joao david"

    Scenario: Search Student
      Given I fill the correct email "teste@teste.com"
      And I fill the password "123456"
      When I click in the Entrar button
      And I fill the Search "José"
      Then I see the Student "55555" 