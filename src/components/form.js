// // import React from 'react'
// // import { Formik, Form, Field, ErrorMessage } from 'formik'

// // const Basic = () => (
// //     <div>
// //         <h1>AQR Form Demo</h1>
// //         <Formik
// //         initialValues={{ email: 'email', password: 'password'}}
// //         validate={values => {
// //             let errors = {};
// //             if (!values.email) {
// //                 errors.email = 'Required';
// //             } else if ( 
// //                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
// //             ) {
// //                 errors.email = 'Invalid email address';
// //             } 
// //             console.log(errors)
// //             return errors;
// //         }}
// //         onSubmit={(values, { setSubmitting }) => {
// //             setTimeout(() => {
// //                 alert(JSON.stringify(values, null, 2));
// //                 setSubmitting(false);
// //             }, 400);

// //         }}
// //         >
// //         {({ isSubmitting }) => (
// //             <Form>
// //                 <Field type="email" name="email" />
// //                 <ErrorMessage name="email" component="div" />
// //                 <Field type="password" name="password" />
// //                 <ErrorMessage name="password" component="div" />
// //                 <button type="submit" disabled={isSubmitting}>
// //                     Submit
// //                 </button>
// //             </Form>
// //         )}
// //         </Formik>
// //     </div>
// // );

// // export default Basic


// import React from 'react'
// import { Formik, FormikProps, Form, Field } from 'formik'

// export class AQRForm extends React.Component {
//     handleSubmit = (values, {
//         props = this.props,
//         setSubmitting
//     }) => {

//         //Process form submission here

//         //on done submit set submitting to flase
//         setSubmitting(false)

//         return;
//     }

//     render() {

//         return (
//             <Formik
//                 initialValues={{
//                     first_name: '',
//                     email_address: '',
//                     gender: ''
//                 }}
//                 validate={(values) => {
//                     let errors = [];

//                     // check if my values have any errors 
//                     return errors;
//                 }}
//                 onSubmit={handleSubmit}
//                 render={formProps: FormikProps => {

//             return(
//                 <Form>
//                     <Field />
//                     <Field />
//                     <Field />

//                     <button
//                         type="submit"
//                         disabled={formProps.isSubmitting}>
//                         Submit Form
//                     </button>
//                 </Form>
//             );
//     }}
import React from 'react';
import { render } from 'react-dom';
import Styles from './styles';
import { Form, Field } from 'react';
import AutoSave from './AutoSave';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const save = async values => {
    console.log('Saving', values)
    await sleep(2000)
}

const App = () => (
    <h1>AQR Final Form </h1>

    <Form 
        onSubmit={save}
        initialValies={{}}
)
