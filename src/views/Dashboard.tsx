import React from "react";
import { Stats } from "../components/dashboard/Stats";

const Dashboard: React.FC<DashboardProps> = (props) => {
	return (
		<>
			<Stats />

			<div className="flex flex-wrap">
				<div className="w-full mb-12 xl:mb-0 px-4"></div>
			</div>
			<div className="flex flex-wrap">
				<div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4"></div>
				<div className="w-full xl:w-6/12 px-4"></div>
			</div>
			<div className="flex flex-wrap mt-4">
				<div className="w-full mb-12 xl:mb-0 px-4"></div>
				<div className="w-full xl:w-4/12 px-4"></div>
			</div>
		</>
	);
};

type DashboardProps = {};

export { Dashboard };
