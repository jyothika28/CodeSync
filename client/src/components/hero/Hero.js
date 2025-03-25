import React from "react";
import "./Hero.css";
import "../../App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../config/firebase";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
function Hero({ setUserName }) {
  const navigate = useNavigate();

  const handleSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in user:", result.user);
      
      if (result.user) {
        // Use display name or email if display name is not available
        const displayName = result.user.displayName || result.user.email.split('@')[0];
        
        // Call setUserName to update the parent component's state
        setUserName(displayName);
        
        // Navigate to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Authentication failed. Please try again!");
    }
  };

  const handleGoogleSignIn = () => handleSignIn(googleProvider);
  const handleGithubSignIn = () => handleSignIn(githubProvider);

  return (
    <div className="hero">
      <p className="oneline alegreya-700">
      Code Together, Anytime, Anywhere!!

      </p>
      <p className="twoline alegreya-400">
      Write and review code with teammates in perfect sync, wherever you are.
        
      </p>
      <div className="loginButton">
        {/* <button
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <span class="button_top"> Login </span>
        </button> */}
 <a class="fancy" href="#s" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> 
  <span class="top-key"></span>
  <span class="text">Login</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>

      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            Sign in with your preferred account and start coding with your team—no setup, no hassle.
              <br />
              <br />
              <div className="loginButton"> 
              <button className="button-google" onClick={handleGoogleSignIn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Continue with Google
              </button>
              </div>
              <br />
              <div className="loginButton">
              <button class="button" onClick={handleGithubSignIn}> 
  <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
  Continue with Github 
  </button>
              </div>
            </div>
            <div class="modal-footer">
              
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Hero;
