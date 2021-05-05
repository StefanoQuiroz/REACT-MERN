import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, '*Nombre tiene que tener un minimo de 3 caracteres')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
    email: Yup.string
        //parametros(regular expression, "mensaje")
        .matches(/\S+@\S+\.\S+/, '*Debe ingresar un mail válido'),
    password: Yup.string()
        .required('*Campo Requerido'),
    confirmPassword: Yup.string()
        .equals([Yup.ref('password'), null], '*Ambas contraseñas deben coincidir')
});
 
const ValidationSchemaExample = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         confirmPassword: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
         {/* formik recibe los valores iniciales y el signupSchema . El touched => el usuario tocó el campo y los errors através del signup Schema*/}
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div className="error">{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div className="error">{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
           <Field name="password" type="password"/>
           {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
           <Field name="confirmPassword" type="password" />
           {errors.confirmPassword && touched.confirmPassword ? <div className="error">{errors.confirmPassword}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default ValidationSchemaExample;