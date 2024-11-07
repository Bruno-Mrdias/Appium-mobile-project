Feature('Students');

const { faker } = require('@faker-js/faker');

const { I, login_page, students_page, home_page } = inject();

Before(() =>{
    
    login_page.userLog('teste@teste.com','123456')
   
    home_page.validateLoginSucces();
})

Scenario('Add new Student with success',  ({ I }) => {

    const code = faker.string.numeric(5)
    const aluno = faker.person.fullName()

    //New Student Add
    students_page.newStudent(code,aluno)

    //Validate new Student
    students_page.validateSucces();

});

Scenario('Add new Student with error',  ({ I }) => {

    const code = faker.string.numeric(5)
    // const aluno = faker.person.fullName()

    //New Student Add
    students_page.noSaveStudent(code)

    //Validate new Student
    students_page.validateLoginError();

});

Scenario('Add new Student with  name error',  ({ I }) => {

    // const code = faker.string.numeric(5)
    const aluno = faker.person.fullName()

    //New Student Add
    students_page.noSaveStudentName(aluno)

    //Validate new Student
    students_page.validateLoginError();

});

Scenario('Add new Student canceled',  ({ I }) => {

    const code = faker.string.numeric(5)
    const aluno = faker.person.fullName()

    //New Student Add
    students_page.cancelStudent(code,aluno)

    //Validate new Student
    students_page.validateCancelBtn(aluno);

});

Scenario('Search Student',  ({ I }) => {
    //Find student
    students_page.searchStudent('José','55555')
});