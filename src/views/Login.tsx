import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = (props?: LoginPropTypes) => {
	const [incorrectPassword, setIncorrectPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorCode, setErrorCode] = useState("");

	const navigate = useNavigate();
	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(async (response) => {
				navigate("/dashboard/");
			})
			.catch((error) => {
				if (error.code.includes("auth/wrong-password")) {
					setIncorrectPassword(true);
				} else {
					setErrorCode(error.code);
					alert(`The login details provided don't match any in our system`);
				}
			});
	};

	return (
		<section className="relative w-full h-full py-40 min-h-screen">
			<div className="absolute top-0 w-full h-full bg-slate-700 bg-no-repeat bg-full"></div>
			<div className="container mx-auto px-4 h-full bg-slate-700">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<div className="text-slate-400 text-center mb-3 font-bold pt-8">
									<small>Layback and Win Bot Login</small>
								</div>
								{incorrectPassword ? (
									<div className="py-2 mb-4 rounded-lg text-center bg-red-300 w-full">
										<p>Incorrect Password was entered</p>
									</div>
								) : (
									<></>
								)}
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
								</div>

								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="Password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div>
									<label className="inline-flex items-center cursor-pointer">
										<input
											id="customCheckLogin"
											type="checkbox"
											className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>
										<span className="ml-2 text-sm font-semibold text-slate-600">
											Remember me
										</span>
									</label>
								</div>

								<div className="text-center mt-6">
									<button
										className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
										type="submit"
									>
										Sign In
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<a href="#pablo" className="text-slate-200">
									<small>Forgot password?</small>
								</a>
							</div>
							<div className="w-1/2 text-right">
								<Link to="/" className="text-slate-200">
									<small>Create new account</small>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type LoginPropTypes = {};
