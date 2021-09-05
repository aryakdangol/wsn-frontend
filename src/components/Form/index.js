import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

    const initialValues = {
            username: '',
            email: '',
            phonenumber: '',
            password: ''
    }

    const onSubmit = {
        onSubmit: values => {
            console.log(values)
        }
    };

    const validationSchema = Yup.object({
    // --- This is custom validation --
        // validate: values => {
        //     let errors ={}
            
        //     if(!values.username) errors.username = 'Required' 
        //     if(!values.email){
        //         errors.email = 'Required'
        //     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        //         errors.email ='Invalid email format'
        //     }
        //     if(!values.phonenumber) errors.phonenumber = 'Required'
        //     if(!values.password) errors.password = 'Required'
        //     return errors
        // },

    // --- This is validation using Yup --
            username: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email format').required('Required'),
            phonenumber: Yup.string().required('Required'),
            password: Yup.string().required('Required')
        })

const FormikForm = () => {

    // const formik = useFormik({ --- This is replaced by <Formik> component
        
    // console.log(formik.errors);
    return (
        <Formik 
        initialValues ={initialValues}
        validationSchema ={validationSchema}
        onSubmit ={onSubmit}
    >
        <div>
            {/* <form onSubmit ={formik.handleSubmit}> */}
            {/* The Form component is a small wrapper around the html form element that automatically hooks into formiks handle submit method */}
            <Form>
                <div>
                <label htmlFor='username'>Username</label>
                {/* <input */}
                <Field
                type ='text'
                id ='username'
                name ='username'

            // --- manually validating ---
                // onChange ={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.username} 

            // --- formik helping us
                // {...formik.getFieldProps('username')}  -- we are able to further simplify it because the (Field) component
                //it will behind the seens hookup inputs to the top level formik component,
                //it uses the name attribute to match up with the formik state,
                //by default Field will render an input element.
                />

                {/* {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> :null} */}
                {/* This replacement is possible because the error ErrorMessage component will take care of rendering
                    the error message for the particular field indicated by the name attribute
                    only if the field have been visited and if there exists any errors */}
                <ErrorMessage name ='username' />
</div>
<div>
                <label htmlFor='email'>Email</label>
                {/* <input */}
                <Field
                type ='email' 
                id ='email' 
                name ='email' 

            // --- manually validating ---
                // onChange ={formik.handleChange} 
                // onBlur={formik.handleBlur} 
                // value={formik.values.email}

            // --- formik helping us
                // {...formik.getFieldProps('email')} 
                />
            {/*--- manually validating ---*/}
                {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> :null} */}
            
            {/*--- Validating using formik's ErrorMessage component--- */} 
            
                <ErrorMessage name ='email' />
</div>
<div>
                <label htmlFor='phonenumber'>Number</label>
                {/* <input */}
                <Field
                type ='tel' 
                id ='phonenumber' 
                name ='phonenumber' 

            // --- manually validating ---
                // onChange ={formik.handleChange} 
                // onBlur={formik.handleBlur} 
                // value={formik.values.phonenumber}

            // --- formik helping us
                // {...formik.getFieldProps('phonenumber')} 
                />

                {/*--- manually validating ---*/}
                {/* {formik.touched.phonenumber && formik.errors.phonenumber ? <div>{formik.errors.phonenumber}</div> :null} */}
                
                {/*--- Validating using formik's ErrorMessage component--- */} 
                <ErrorMessage name ='phonenumber' />
</div>
<div>
                <label htmlFor='password'>Password</label>
                {/* <input */}
                <Field
                type ='password' 
                id ='password' 
                name ='password' 

            // --- manually validating ---
                // onChange ={formik.handleChange} 
                // onBlur={formik.handleBlur} 
                // value={formik.values.password}

            // --- formik helping us
                // {...formik.getFieldProps('password')} 
                />
                {/*--- manually validating ---*/}
                {/* {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> :null} */}

                {/*--- Validating using formik's ErrorMessage component--- */} 
                <ErrorMessage name ='password' />
</div>
                <button type ='submit'>Submit</button>
            </Form>
        </div>
        </Formik>
    )
};

export default FormikForm
