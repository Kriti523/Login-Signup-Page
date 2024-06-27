/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Header from "../components/header";
import Login from "../components/Login";

export default function LoginPage({setLoginData}){

    return(
        <>
        <Header
            heading="Login to your account"
            paragraph="Don't have account yet?"
            linkName="Signup"
            linkUrl="/signup"
            />

        <Login setLoginData={setLoginData} />
        
    </>
    )
}