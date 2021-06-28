// import SigninForm from "../components/forms/SigninForm";
import SigninForm from "../components/forms/SigninForm";
// import Signin from "./Signin";
// import Login from "../components/Login";


export default function LoginPage({  setCheckLogin, googleUserData, setGoogleUserData, setFbUserData }) {
    // console.log("Login Page 1  Google :"+{setGoogleUserData});
    console.log("Login Page 2  FaceBook :"+{setFbUserData})
    return (
        <>
            <SigninForm
                // users={users}
                setCheckLogin={setCheckLogin}
                googleUserData={googleUserData}
                setGoogleUserData={setGoogleUserData}				// Google
                setFbUserData={setFbUserData}						// FaceBook  pasa la prop
            />
        </>
    )
}
