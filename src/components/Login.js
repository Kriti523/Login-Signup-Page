import { useState} from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { Navigate, useNavigate } from "react-router-dom";
// useNavigate




const fields=loginFields;
let fieldState = {};
fields.forEach(field=>fieldState[field.id] = '');

export default function Login({setLoginData}){
    const navigate = useNavigate();
    const[loginState,setLoginState] = useState(fieldState);
    // const router =
    

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSumbit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }
    
    const authenticateUser =()=>{
        const { email, password } = loginState;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('users', users)
        const user = users.find(user => (user.email === email && user.password === password));
        setLoginData(user);
        
        if (user) {
          localStorage.setItem("isAuthenticated", true); 
          localStorage.setItem("loggedInUser", email); 
          console.log("Login successful!");
          navigate('/welcome')
        }
        else {
          console.log("Invalid credentials!");
          alert("Invalid credentials!");
          
        }
    };


    return(
        <form className="mt-2 space-y-6 " onSubmit={handleSumbit}>
            <div className="-space-y-px mt-[-200px]">
                {
                   fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                        
                        />
                   ) 
                }

            </div>

            <FormExtra/>
            <FormAction handleSumbit={handleSumbit} text="Login"/>
        </form>
    )
}