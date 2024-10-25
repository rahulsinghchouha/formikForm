import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';


function App() {

  const [inputValue, setInputValue] = useState('');

  // --- for type input something...
  // const showShal = () =>{
  //   withReactContent(Swal).fire({
  //     title: <i>Loading...</i>,
  //      input:'text',
  //      inputValue, //for see what define in the input field
  //     preConfirm:()=>{
  //       setInputValue(Swal.getInput()?.value || '')
  //     },

  //   })
  //   }

  // for show the confirm Button
  // const showShal  = ()=>{
  //   Swal.fire({
  //     title:'Success!',
  //     text:'Your data has been saved',
  //     icon:'success',
  //     confirmButtonText:'OK'
  //   })
  // }

  // for error alerts

  // const showShal = () =>{

  //   Swal.fire({
  //     icon:'error',
  //     title:"Error!",
  //     text:'An Error Occured while processing your request',

  //     confirmButtonText:'Try Again'
  //   })

  // }

  //confirmation we can add this when user want to delete the account

  // const showShal = () => {

  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Are you sure?',
  //     text: 'This action cannot be undone',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Deleted', 'your file has been deleted.', 'success');
  //     }
  //   })
  // }


  // input prompts

  // const showShal = () =>{
  //   Swal.fire({
  //     title:'Enter your Email Address',
  //     input:'email',
  //     inputPlaceholder:'Your email address',
  //   }).then((result)=>{
  //     if(result.value)
  //     {
  //       console.log('Email',result.value);
  //     }
  //   })
  // }


  // loading indicator

  // const showShal = () => {

  //   Swal.fire({
  //     title: 'Loading...',
  //     text: "Please Wait",

  //     didOpen: () => {
  //       Swal.showLoading();
  //     }

  //   })
  // }

  //loading with conditions

  // const fetchDataWithConditions = async () => {
  //   // Show loading alert
  //   Swal.fire({
  //     title: 'Loading...',
  //     text: 'Fetching data...',
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });

  //   try {
  //     // Simulate data fetching
  //     const response = await fetch('https://api.example.com/data');
  //     const data = await response.json();

  //     // Check conditions on the data (for example, a specific field)
  //     if (data.success) {
  //       // If the condition is true, show a success message and close the loading alert
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Data loaded!',
  //         text: 'Your data has been successfully fetched.',
  //         timer: 2000, // Automatically close after 2 seconds
  //         showConfirmButton: false,
  //       });
  //     } else {
  //       // If the condition fails, show an error message
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Failed to load!',
  //         text: 'The data could not be fetched.',
  //       });
  //     }
  //   } catch (error) {
  //     // Handle errors and show an error message
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Something went wrong!',
  //     });
  //   }
  // };

  //custom HTML
// const showShal = () =>{
//   Swal.fire({
//     title: '<strong>Custom HTML</strong>',
//     html: '<b>Bold</b> text and <a href="#">links</a>',
//     showCloseButton: true
//   });
// }

//Timed Alert

// const showShal = () =>{
//   Swal.fire({
//     title: 'Auto close alert!',
//     text: 'This will close in 3 seconds.',
//     timer: 3000,
//     timerProgressBar: true
//   });
// }

// file upload or download alerts 
// const showShal = () =>{Swal.fire({
//   title: 'Uploading your file...',
//   text: 'Please wait',
//   allowOutsideClick: false, //outside click pr off kr dena
//   didOpen: () => {
//     Swal.showLoading();
//   }
// });
// }

//Interacttive form or validation

const showShal = () =>{
  Swal.fire({
    title: 'Enter your name',
    input: 'text',
    inputAttributes: {
      'aria-label': 'Type your name here'
    },
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        console.log("value",value);
        return 'You need to write something!'
      }
    }
  });
}


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

           showShal();

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
            <br />
            <br />
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Submit'} {/* Change text based on submitting state */}
            </button>
          </Form>


        )}

      </Formik>
      <div>{inputValue}</div>


    </div>
  );
}

export default App;
