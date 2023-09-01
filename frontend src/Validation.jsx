import Swal from 'sweetalert2';

const Validation = (values)=>{
let error={}
    const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(values.email === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email field should not be empty',
            
          })
        error.email="Email Field Should not be empty"
        }
        else if(!email_pattern.test(values.email)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Provide proper email, Email doesnt match',
                
              })
            error.email="Provide proper email, Email doesn't match";
        }
        else{
            error.email="";
        }

        if(values.password === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password field should not be empty',
                
              })
            error.password="Password field should not be empty"
        }
        // else if(values.password.length < 8){
        //     error.password="Password length should be atleast 8 characters"
        // }
        else{
            error.password=""
        }
    

return error;
}
export default Validation;