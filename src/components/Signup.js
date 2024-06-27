import { SignupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';


const fields=SignupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup({signupState, setSignupState}){
    // const [signupState,setSignupState]=useState(fieldsState);

    const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

    const handleSumbit=(e)=>{
        e.preventDefault();
        createAccount();
    }
    const createAccount=()=>{
      const users = JSON.parse(localStorage.getItem('users')) || [];
      console.log("Existing users:", users);
      console.log("Signup state:", signupState);

      console.log('signupState', signupState);
      if(signupState.password !== signupState.confirmPassword) {
        console.log("Passwords do not match!");
        alert("Passwords do not match!");
        return;
      };
console.log('signupState', signupState.username)
      const userExists = users.some(user => user.email === signupState.email);
  
      if (userExists) {
        console.log('User already exists!');
        alert("User already exist!");
        
      } else {
        users.push(signupState);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Account created successfully!');
        alert("'Account created successfully!'")
        
      }
    }
    return(
        <form className="mt-2 space-y-6" onSubmit={handleSumbit}>
        <div className="mt-[-200px]">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSumbit={handleSumbit} text="Signup" />
        </div>

         

      </form>
    )
}