/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const ContactUs = () => {
  const initialValues = { email: '', name: '', phoneNumber: '' };
  const ValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email address').required('Required'),
    name: Yup.string().required('Required'),
    phoneNumber: Yup.number().required('Required'),
  });
  //Handle form submit
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            id='name'
            name='name'
            className='border border-gray-300 p-2 rounded w-full'
          />
          <ErrorMessage
            name='name'
            component='div'
            className='text-red-500'
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <Field
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            className='border border-gray-300 p-2 rounded w-full'
          />
          <ErrorMessage
            name='phoneNumber'
            component='div'
            className='text-red-500'
          />
          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            id='email'
            name='email'
            className='border border-gray-300 p-2 rounded w-full'
          />
          <ErrorMessage
            name='email'
            component='div'
            className='text-red-500'
          />
        </div>
        <button type='submit' />
      </Form>
    </Formik>
  );
};

export default ContactUs;
