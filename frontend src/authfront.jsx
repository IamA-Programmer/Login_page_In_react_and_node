import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faRightToBracket,faLock,faFileInvoice} from '@fortawesome/free-solid-svg-icons'

function Authfront() {

    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
    //   setValidated(true);
    // };

// const [values,setValues]=useState({
//   email:'',
//   password:''
// })

const [pass,setpass]=useState("");
const [email,setemail]=useState("");
const [errors,setErrors]=useState({});


const navigate=useNavigate();
 

const formSubmit=(event)=>{
  event.preventDefault();
 setErrors(Validation({email:email,password:pass}));

 if(errors.email === "" && errors.password === ""){
  axios.post('http://localhost:8081/login',{email:email,password:pass})
  .then(res => {
    if(res.data === "Success"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login Successful',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.setItem("email",email);
      localStorage.setItem("name",res.data.name);

      const name=res.data.name;
      const email=res.data.email;
      console.log(name,email);
      const data=res.json();
navigate("/profile",data);

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login Failed.... Try Again!',
        
      })
      
    }
  }).catch(err => console.log(err))
 }
}
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='container col-6 bg-white p-3 rounded 15'>
       
       
        <form action='' onSubmit={formSubmit} className='needs-validation'>
            
        <div className='p-2 form-group '>
                   <label htmlFor='email' className='d-flex justify-content-flex-start form-label'><FontAwesomeIcon icon={faEnvelope} />&nbsp;<p>Email</p><span>*</span></label>
        <input type='email'name='email' placeholder='blahblah@gmail.com' className='form-control rounded 0' onChange={(e)=>{setemail(e.target.value)}}  />
           <div className='invalid-feedback'>
            Please Enter Your Email
           </div>
           {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>


            <div className='p-2 form-group'>
                   <label htmlFor='password' className='d-flex justify-content-flex-start form-label'><FontAwesomeIcon icon={faLock} />&nbsp;Password<span>*</span></label>
                   <input type='password' name="password" placeholder='Password' className='form-control rounded 0' onChange={(e)=>{setpass(e.target.value)}}  />
                   <div className='invalid-feedback'>
            Please Enter password
           </div>
           {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>

           
<p></p>
            <button type="submit"className='btn btn-success w-100'>Log in&nbsp;<FontAwesomeIcon icon={faRightToBracket} /></button>
            <p></p>
            <Link to="/register" className='btn btn-default border w-100 bg-light'><FontAwesomeIcon icon={faFileInvoice} />&nbsp;Create Account</Link>
        </form>
       </div>
       </div>
       </div>
   
  )
}

export default Authfront;