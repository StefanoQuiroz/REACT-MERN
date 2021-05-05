import { Card } from 'antd';
import React, { useState} from 'react'
import { Form, Input, Button} from 'antd';
import FormValidations from '../tools/validations'
const FormRegister = () => {
    const [formValues, setFormValues] = useState({
        name: ['', ''],
        password: ['', ''],
        email: ['', ''],
        confirmPassword: ['', ''],

    })
    console.log("🚀 ~ file: Form.js ~ line 7 ~ FormRegister ~ formValues", formValues)
    const validations = new FormValidations()

    // useEffect(() => {
    //     console.log("🚀 ~ file: Form.js ~ line 19 ~ FormRegister ~ formValues", formValues)

    // }, formValues)

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getValidations = (e) => {
        let formError = validations.validateFields(e.target.name, e.target.value)
        setFormValues({ ...formValues, [e.target.name]: [e.target.value, formError] })
    }

    //Opción corta
    // const getValidations = (e) => setFormValues({ ...formValues, [e.target.name]: [e.target.value, validations.validateFields(e.target.name, e.target.value)] })


    const validatePass = (pass1, e) => {
        let passError = validations.validatePassword(formValues[pass1][0], e.target.value);
        setFormValues({ ...formValues, [pass1]: [formValues[pass1][0], passError], [e.target.name]: [e.target.value, passError] })
    }

    return (
        <div className="container">
            <Card title="Formulario de registro" extra={<a href="#top">More</a>} style={{ width: 300 }}>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item label="Nombre completo" name="name" rules={[{ required: true, message: 'Please input your username!' }]} >
                        <Input name='name' onChange={e => getValidations(e)} />
                    </Form.Item>
                    <p className='error'>{formValues.name[1]}</p>
                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password name='password' onChange={e => { getValidations(e); validatePass('confirmPassword', e) }} />
                    </Form.Item>
                    <p className='error'>{formValues.password[1]}</p>
                    <Form.Item
                        label="Confirma contraseña"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password name='confirmPassword' onChange={e => { getValidations(e); validatePass('password', e) }} />
                    </Form.Item>
                    <p className='error'>{formValues.confirmPassword[1]}</p>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )

}

export default FormRegister;