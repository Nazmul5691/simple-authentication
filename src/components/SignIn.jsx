import { GoogleAuthProvider } from "firebase/auth/web-extension";


const SignIn = () => {

    const provider = new GoogleAuthProvider()


    const handleGoogleSignIn = () =>{
        console.log("google coming soon");
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>sign in with google</button>
        </div>
    );
};

export default SignIn;