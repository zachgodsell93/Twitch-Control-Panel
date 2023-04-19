import React, { useState } from "react";
import { auth } from "../../utils/firbase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAPI } from "../../utils/API";
import { useNavigate } from "react-router-dom";
interface RegisterProps {
  modalOpen: (data: boolean) => void;
}

const RegisterModal: React.FC<RegisterProps> = (props) => {
  const [email, setEmail] = useState("");
  const [emailFormat, setEmailFormat] = useState(true);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re: RegExp = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const checkPassword = (password: string, password2: string) => {
    if (password.length >= 8) {
      if (password === password2) {
        if (
          password.match(/[a-z]/) &&
          password.match(/[A-Z]/) &&
          password.match(/\d/)
        ) {
          setPasswordError({
            status: false,
            message: "",
          });
          return true;
        } else {
          setPasswordError({
            status: true,
            message:
              "Password must contain an uppercase, lowercase and a number",
          });

          return false;
        }
      } else {
        setPasswordError({
          status: true,
          message: "Passwords do not match",
        });
        return false;
      }
    } else {
      setPasswordError({
        status: true,
        message: "Password needs to be at least 8 characters long",
      });
      return false;
    }
  };

  const handleRegistration = async () => {
    const emailCheck: boolean = validateEmail(email);
    if (!emailCheck) {
      setEmailFormat(false);
    }
    if (emailCheck) {
      setEmailFormat(true);
    }
    let pwCheck: boolean = checkPassword(password, password2);
    if (pwCheck && emailCheck) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          UserAPI.createUser({
            uid: user.uid,
            email: email,
            twitchBroadcasterId: "",
          });
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      console.log("Registration Successful");
    }
  };

  const closeModal = () => {
    props.modalOpen(false);
  };
  return (
    <section className="relative w-full h-full min-h-screen z-20">
      <div className="absolute top-0 w-full h-full bg-slate-700 bg-no-repeat bg-full"></div>
      <div className="container mx-auto px-4 h-full bg-slate-700">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-slate-400 text-center mb-3 font-bold pt-8">
                  <small>Register</small>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailFormat ? null : (
                    <label
                      className="block uppercase text-red-600 text-xs font-light mb-2"
                      htmlFor="grid-password"
                    >
                      Email needs to be in the correct format
                    </label>
                  )}
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!passwordError.status ? null : (
                    <label
                      className="block uppercase text-red-600 text-xs font-light mb-2"
                      htmlFor="grid-password"
                    >
                      {passwordError.message}
                    </label>
                  )}
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Re-enter Password"
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handleRegistration}
                  >
                    Register
                  </button>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RegisterModal };
