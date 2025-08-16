/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
  return <div>ContactUs</div>;
};

export default ContactUs;
