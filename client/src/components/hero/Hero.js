import React from "react";
import "./Hero.css";
import "../../App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, microsoftProvider } from "../../config/firebase";

function Hero() {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((result) => {
        console.log("google");
        console.log("Logged in user name:", result.user.displayName); // Log the user's name
      });
    } catch (error) {
      alert("Authentication failed, Please try again!");
      console.log("redirect error");
      console.log(error);
    }
  };
  const handleMicrosoftSignIn = async () => {
    try {
      await signInWithPopup(auth, microsoftProvider).then((result) => {
        console.log("microsoft");
        console.log("Logged in user name:", result.user.displayName); // Log the user's name
      });
    } catch (error) {
      alert("Authentication failed, Please try again!");
      console.log("redirect error");
      console.log(error);
    }
  };

  return (
    <div className="hero">
      <p className="oneline alegreya-700">
        {/* Job hunting, reimagined. */}
        Title

      </p>
      <p className="twoline alegreya-400">
        {/* Stay on top of your applications, streamline the process, and track your
        progress effortlessly <br />
        —every step of the way. */}
        Subtitle
      </p>
      <div className="loginButton">
        <button
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <span class="button_top"> Login </span>
        </button>
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
              modal body
              {/* Log in to track your job applications, sync emails, and stay
              organized—all in one place. */}
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
              <button
              
                className="button-google"
          
                onClick={handleMicrosoftSignIn}
              >
                Continue with Outlook
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
