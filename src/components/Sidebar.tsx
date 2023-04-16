import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

type SidebarProps = {
	header: string;
};

const Sidebar = (props: SidebarProps) => {
	const { header } = props;
	const [collapseShow, setCollapseShow] = useState("hidden");

	return (
		<>
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					{/* Toggler */}
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
					>
						<i className="fas fa-bars"></i>
					</button>
					{/* Brand */}
					<h2 className="md:block cursor-pointer text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
						DojoDev Twitch Panel
					</h2>
					{/* Collapse */}
					<div
						className={
							"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
							collapseShow
						}
					>
						<hr className="my-4 md:min-w-full" />
						{/* Heading */}

						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							General
						</h6>

						{/* Navigation */}

						<ul className="md:flex-col md:min-w-full flex flex-col list-none">
							<li className="items-center cursor-pointer">
								<h2
									className={
										"text-xs uppercase py-3 font-bold block " +
										(window.location.href.indexOf("/admin/dashboard") !== -1
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-slate-700 hover:text-slate-500")
									}
									onClick={() => setCollapseShow("hidden")}
								>
									<i
										className={
											"fas fa-tv mr-2 text-sm " +
											(window.location.href.indexOf("/dashboard") !== -1
												? "opacity-75"
												: "text-slate-300")
										}
									></i>{" "}
									Dashboard
								</h2>
							</li>

							<li className="items-center cursor-pointer">
								<h2
									className={
										"text-xs uppercase py-3 font-bold block " +
										(window.location.href.indexOf("/dashboard/settings") !== -1
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-slate-700 hover:text-slate-500")
									}
									onClick={() => setCollapseShow("hidden")}
								>
									<i
										className={
											"fas fa-tools mr-2 text-sm " +
											(window.location.href.indexOf("/dashboard/settings") !==
											-1
												? "opacity-75"
												: "text-slate-300")
										}
									></i>{" "}
									Settings
								</h2>
							</li>

							<li className="items-center">
								<h2
									className={
										"text-xs uppercase py-3 font-bold block " +
										(window.location.href.indexOf("/dashboard/settings") !== -1
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-slate-700 hover:text-slate-500")
									}
									onClick={() => setCollapseShow("hidden")}
								>
									<i
										className={
											"fas fa-table mr-2 text-sm " +
											(window.location.href.indexOf("/dashboard/settings") !==
											-1
												? "opacity-75"
												: "text-slate-300")
										}
									></i>{" "}
									Results
								</h2>
							</li>
						</ul>

						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
						{/* Heading */}

						{/* Heading */}
						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Github
						</h6>
						<button
							className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							type="button"
						>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;
