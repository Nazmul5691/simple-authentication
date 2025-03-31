import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const SignIn = () => {


    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result);
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('user sign out');
            setUser(null);
        })
        .catch((error)=>{
            console.log(error);
        })
    }



    return (
        <div>
            {
                user ? <button className="bg-blue-500 text-black p-2 rounded-md" onClick={handleSignOut}>Sign Out</button> : 
                <>
                    <button className="bg-blue-500 text-black p-2 rounded-md mr-4" onClick={handleGoogleSignIn}>sign in with google</button>
                    <button className="bg-blue-500 text-black p-2 rounded-md" onClick={handleGithubSignIn}>sign in with github</button>
                </>
            }

            {
                user && <div>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                </div>
            }
           
        </div>
    );
};

export default SignIn;