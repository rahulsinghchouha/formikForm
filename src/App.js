import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';




function App() {
  return (
    <div className="App">

      <Formik
        initialValues={{ name: '', email: '', profileImage: null }}
        validate={(values) => {
          const error = {}

          if (!values.name) {
            error.name = 'Name is required';
          }
          if (!values.email) {
            error.email = 'Email is required';
          }
          else if (!/\S+@\S+\.\S+/.test(values.email)) {
            error.email = 'Enter a Valid Email'
          }
          if (!values.profileImage) {
            error.profileImage = 'Image is rquired';
          }
          return error; // Important: You must return the error object
        }}
        onSubmit={(values, { setSubmitting }) => {

          const formData = new FormData();

          formData.append('name', values.name);
          formData.append('email', values.email);
          formData.append('profileImage', values.profileImage);

          //here we can send our data to the backend
          console.log('Form values:', values);
          console.log('form Data values', formData.get('name'), formData.get('email'), formData.get('profileImage'));
          console.log('FormData:', formData.get('profileImage')); // Check the file object

          setSubmitting(false); //  if we not set false  that means the form is processing and we cant submit the form

        }
        }
      >
        {({ isSubmitting, setFieldValue }) => (

          <Form>
            <div>
              <label htmlFor='name'>Name : </label>
              <Field type='text' name='name' />
              <ErrorMessage name='name' component="div" />

            </div>
            <div>
              <label htmlFor='email'>Email : </label>
              <Field type='email' name='email' />
              <ErrorMessage name='email' component="div" />
            </div>
            <div>
              <label htmlFor='profileImage'>Enter Your Image : </label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                onChange={(event) => {
                  setFieldValue('profileImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="profileImage" component="div" />
            </div>
            <br/>
            <br/>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Submit'} {/* Change text based on submitting state */}
            </button>
          </Form>


        )}
        
      </Formik>


    </div>
  );
}

export default App;
