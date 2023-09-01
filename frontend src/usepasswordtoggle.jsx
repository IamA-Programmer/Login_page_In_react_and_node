import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const usePasswordToggle=() =>{

    const [visible,setVisible]=useState(false);

    const icon=(
        <FontAwesomeIcon icon={visible ? "fa-eye-slash" : "fa-eye"}/>
    )
    const inputType = visible ? 'text':'password';
  return [inputType,icon];
   
}

export default usePasswordToggle;