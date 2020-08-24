import React from 'react';
import {Formik, Field,Form} from 'formik';
import * as yup from 'yup'
import {TextField, Button} from '@material-ui/core'
import './App.css';

const validationSchema = yup.object({
  firstName: yup.string().required().max(10)
})
const App: React.FC = () => {
  return (
    <div >
 <Formik 
 initialValues={{ firstName: '', lastName:''}}
validateOnChange={true}
validationSchema={validationSchema}
 onSubmit={ (data, {setSubmitting,resetForm}) => {

   setSubmitting(true);
   // make async call
   console.log(data)
   setSubmitting(false);
   resetForm();
 }}
 >
{
  ({values,errors, isSubmitting}) => (
    <Form >
      <Field 
      placeholder='first name'
      name='firstName'
      type='input'
      as={TextField}
      />
      <div>
        <p color='red'>{ errors.firstName}</p>
      </div>
<div>
<Field 
      placeholder='last name'
      name='lastName'
      type='input'
      as={TextField}
      />
</div>
      <div>
      <Button disabled={isSubmitting} type='submit'>Submit</Button>
      </div>
  
  <pre>{JSON.stringify(values,null,2)}</pre>
    </Form>
  )
}
 </Formik>
    </div>
  );
}

export default App;
