import React, { useState } from "react";

interface RegisterProps {
	modalOpen: (data: boolean) => void;
}

const RegisterModal: React.FC<RegisterProps> = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const checkPassword = (password: string, password2: string) => {
		if (password.length <= 8) {
			if (password === password2) {
				if (
					password.match(/[a-z]/) &&
					password.match(/[A-Z]/) &&
					password.match(/\d/)
				) {
				} else {
					console.log(
						"Password must contain an uppercase, lowercase and a number"
					);
				}
			} else {
				console.log("Passwords do not match");
			}
		} else {
			console.log("Password needs to be at least 8 characters long");
		}
	};

	const handleUserRegistration = () => {};

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
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="text-center mt-6">
									<button
										className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
										type="submit"
										onClick={handleUserRegistration}
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
