Feature('login');

const { login_page } = inject()

Before(() => {
    console.log("exibir antes de cada teste");  
})

Scenario('Login with success',  ({ I, home_page }) => {
     //User log
    login_page.userLog('teste@teste.com','123456')
    //validate Login Success
    home_page.validateLoginSucces();
});

Scenario('Login with error',  ({ I }) => {
    //User log
    login_page.userLog('teste@123teste.com','123456')
    //validate Login error
    login_page.validateLoginError();
});
