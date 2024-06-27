/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Header from "../components/header";
import Signup from "../components/Signup";

export default function SignupPage({signupState, setSignupState}){
    // console.log('first', first)
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup signupState={signupState} setSignupState={setSignupState}/>
        </>
    )
}