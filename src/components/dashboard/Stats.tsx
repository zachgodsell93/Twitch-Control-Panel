import React, { useEffect, useState } from "react";
import { getFollowers, getSubscribers } from "../../utils/twitchAPI";

type StatsProps = {};

export const Stats: React.FC<StatsProps> = (props) => {
	const [followerCount, setFollowerCount] = useState(0);
	const [subscriberCount, setSubscriberCount] = useState(0);

	useEffect(() => {
		getFollowers().then((res: any) => {
			setFollowerCount(res.total);
		});
		getSubscribers().then((res: any) => {
			console.log(res);
			setSubscriberCount(res.total);
		});
	}, []);
	return (
		<>
			{/* Header */}
			<div className="relative md:pt-8 pb-16 pt-36">
				<div className="px-4 md:px-0 mx-auto w-full">
					<div>
						{/* Card stats */}
						<div className="flex flex-wrap">
							<div className="w-full py-2 px-4">
								<span className="text-white uppercase font-bold text-lg">
									Monthly Stats
								</span>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats title="Followers" stat={followerCount} />
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats title="Subscribers" stat={subscriberCount} />
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats title="Followers" stat="2" />
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats title="Back Orders" stat="8" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

type CardStatsProps = {
	title: string;
	stat: number | string;
};

const CardStats: React.FC<CardStatsProps> = (props) => {
	const { title, stat } = props;
	return (
		<>
			<div className="relative flex flex-col text-center min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
				<div className="flex-auto p-4">
					<div className="relative w-full pr-4 max-w-full flex-grow flex-1 pb-2">
						<h5 className="text-slate-600 uppercase font-bold text-md">
							{title}
						</h5>
					</div>
					<div className="flex flex-wrap">
						<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
							<span className="font-semibold text-xl text-slate-700">
								{stat}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
