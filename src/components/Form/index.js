import React from 'react'
import { useFormik } from 'formik';

const FormikForm = () => {

    const formik = useFormik({
        initialValues:{
            username: '',
            email: '',
            phonenumber: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })
    //console.log(formik.values);
    return (
        <div>
            <form onSubmit ={formik.handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type ='text' id ='username' name ='username' onChange ={formik.handleChange} value={formik.values.username} />

                <label htmlFor='email'>Email</label>
                <input type ='email' id ='email' name ='email' onChange ={formik.handleChange} value={formik.values.email} />

                <label htmlFor='phonenumber'>Number</label>
                <input type ='tel' id ='phonenumber' name ='phonenumber' onChange ={formik.handleChange} value={formik.values.phonenumber} />

                <label htmlFor='password'>Password</label>
                <input type ='password' id ='password' name ='password' onChange ={formik.handleChange} value={formik.values.password} />

                <button type ='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormikForm
