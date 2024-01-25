import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

const UserSignup: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const {
        authenticateUser,
        storeToken
    } = useContext(AuthContext)!; // Use "!" to assert that AuthContext is not undefined

    const navigate = useNavigate();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSignupSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        const requestBody = { email, password };
    
        post("/auth/signup", requestBody)
          .then((response: any) => {
            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/");
          })
          .catch((error: any) => {
            const errorDescription = error.response?.data?.message || "An error occurred.";
            setErrorMessage(errorDescription);
          });
      };

    return (

        <div style={{ height: '70vh' }} className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 bg-indigo-200 border border-slate-600 rounded-3xl">
                <span className="text-3xl font-bold my-3">Register</span>

                <form onSubmit={handleSignupSubmit} className="flex flex-col items-center justify-center w-4/5 md:w-3/5">

                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            required
                        />

                    </div>

                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            required
                        />

                    </div>

                    <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl">
                        <button type="submit"><span className="hover:text-black transition cursor-pointer">Signup</span></button>
                    </div>

                    <div className="my-4">
                        <span>Already have account?
                            <Link to="/login"> <span className="font-bold border-b-2 border-black hover:text-white hover:border-white transition cursor-pointer">Login</span></Link>
                        </span>
                    </div>

                    {errorMessage && <p className=" mb-2">{errorMessage}</p>}

                </form>

            </div>
        </div>


    )
}

export default UserSignup