import React, { Component } from 'react'
import {SIGN_UP_SCHEMA} from '../../utils/validationSchema'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const SignUpForm = props => {
  const handleSubmit = (values, formikBag) => {
    console.log(values, formikBag)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SIGN_UP_SCHEMA}>
        {formikProps => {
          return (
            <Form>
              <Field type='text' name='firstName' />
              <ErrorMessage name='firstName'/>
              <Field type='text' name='lastName' />
              <Field type='text' name='email' />
              <ErrorMessage name='email' component='p'/>
              <Field type='text' name='password' />
              <button type='submit'>Submit</button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default SignUpForm
