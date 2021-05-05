class FormValidations {

    // constructor(name, password, confirmPassword, age, email) {
    //     this.name = [name, ''];
    //     this.password = password;
    //     this.confirmPassword = confirmPassword;
    //     this.age = age;
    //     this.email = email;
    //     this.errorGral = ''
    // }

    // setname(name) {
    //     this.name = name;
    // }

    validateFields(input, value) {
        if (input === 'name' && value.length < 3) {
            return `*${input} debe tener un mínimo de 3 caracteres`;
        }
        if (input === 'email' && (/^[^\s@]+@[^\s@]+$/).test(value)) {
            return '*Ingresar un correo válido';
        }
        if (input === 'password' && value.length < 4) {
            return '*La contraseña debe tener un mínimo de 4 caracteres'
        }
        else {
            return '';
        }
    }

    validatePassword = (pass, confPass) => pass !== confPass ? '*Contraseñas deben coincidir' : '';

}

export default FormValidations