import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RegisterValidation from './registervalid';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUser,faArrowRightToBracket,faEye,faEyeSlash, faLock} from '@fortawesome/free-solid-svg-icons'
import usePasswordToggle from './usepasswordtoggle';


function Signup() {

       // const [values,setValues]=useState({
       //        name:'',
       //        email:'',
       //        password:''
       //      })
            
       //      const handleInput=(event)=>{
       //        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
       //      }
       //      const navigate=useNavigate();
       //      const [errors,setErrors]=useState({});
            
       //      const formSubmit=(event)=>{
       //        event.preventDefault();
       //       setErrors(RegisterValidation(values));

       
   // var errors={name:"",email:"",password:""};

       const [name,setName]=useState("");
       const [pass,setpass]=useState("");
       const [email,setemail]=useState("");
       const[errors,setErrors]=useState("");
       const[passwordInputType,ToggleIcon]=usePasswordToggle();
            
            const navigate=useNavigate();
            
    const formSubmit=(event)=>{

              event.preventDefault();

              setErrors(RegisterValidation({name:name,password:pass,email:email}));
        
              console.log("Clicked");
  
             if(errors.name === "" && errors.email === "" && errors.password === ""){
              axios.post('http://localhost:8081/signup',{name:name,email:email,password:pass})
              .then(res => {
                     Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registration Successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     navigate("/")}).catch(err => console.log(err))
             }

            }

  return (
       <div>
       <div className='d-flex justify-content-center align-items-center vh-100'>
           <div className='container col-6 bg-white p-3 rounded'>
          
          
           <form action='' onSubmit={formSubmit} className='needs-validation'>
              
           <div className='p-2 form-group'>
                   <label htmlFor='name' className='d-flex justify-content-flex-start form-label'><FontAwesomeIcon icon={faUser} />&nbsp;Username<span>*</span></label>
                   <input type='text' name="name" placeholder='Your name..' className='form-control rounded 0' onChange={(e)=>{setName(e.target.value)}}  />
                  
           {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>

            <div className='p-2 form-group '>
                   <label htmlFor='password' className='d-flex justify-content-flex-start form-label'><FontAwesomeIcon icon={faLock} />&nbsp;Password<span>*</span></label>
                   <input type={passwordInputType} name="password" placeholder='Password' className='form-control rounded 0' onChange={(e)=>{setpass(e.target.value)}}  />
                 <span className='password-toggle-icon'>{ToggleIcon}</span>
           {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
    
           <div className='p-2 form-group'>
                   <label htmlFor='email' className='d-flex justify-content-flex-start form-label'><FontAwesomeIcon icon={faEnvelope} />&nbsp;Email<span>*</span></label>
                   <input type='email' name="email" placeholder='email' className='form-control rounded 0' onChange={(e)=>{setemail(e.target.value)}}  />
                
           {errors.email !== "" ? <span className='text-danger'>{errors.email}</span> : <span className='text-danger'></span> }
            </div>
   <p></p>
               <button className='btn btn-success w-100'>Sign Up&nbsp;<FontAwesomeIcon icon={faArrowRightToBracket} /></button>
               <p></p>
               <Link to="/" className='btn btn-default border w-100 bg-light'><b>Already Registered?&nbsp;Login</b></Link>
           </form>
          </div>
          </div>
          </div>
  )
}

export default Signup;