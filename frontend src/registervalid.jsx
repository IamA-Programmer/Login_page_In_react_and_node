import Swal from 'sweetalert2';

const RegisterValidation = (values)=>{
let errors={}
    const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    

    // if(!email_pattern.test(values.email)){
if(values.name === ""){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name field should not be empty',
        
      })
    errors.name="name field should not be empty"
}
else {
    errors.name="";
}
    if(values.email === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email field should not be empty',
            
          })
        errors.email="Email Field Should not be empty"
        }
        else if(!email_pattern.test(values.email)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Provide proper email, Email doesnt match',
                
              })
            errors.email="Provide proper email, Email doesn't match";
        }
        else{
            errors.email="";
        }

        if(values.password === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password field should not be empty',
                
              })
            
            errors.password="Password field should not be empty"
        }
        // else if(values.password.length < 8){
        //     error.password="Password length should be atleast 8 characters"
        // }
        else{
            errors.password=""
        }
    

return errors;
}
export default RegisterValidation;