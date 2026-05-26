class LoginPage {


    constructor(page) {

        this.page = page;
        this.u_input = page.getByPlaceholder('UserName');
        this.u_password = page.getByPlaceholder('Password');
        this.loginbtn = page.getByRole('button', { name: 'Login' });


    }


    async openloginpage() {

        await this.page.goto('https://demoqa.com/login');
    }


    async login(username, password) {

        await this.u_input.fill(username)\
        await this.u_password.fill(password)
        await this.loginbtn.click()
    }
}
export { LoginPage };