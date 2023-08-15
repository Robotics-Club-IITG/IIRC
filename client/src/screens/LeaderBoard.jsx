import React, { useState } from "react";
import "./LeaderBoard.css";
import Navbar from "../components/Navbar";
import leaderData from '../data/leaderboard'
import LeaderBoardNav from "../components/LeaderBoardNav";
import { leaderBoardData } from '../data/leaderBoardData';
import { popupDetails } from "../components/themeDetails";
import { cardDetails } from "../components/themeDetails";


function LeaderBoard() {
  const [active,setActive] = useState(0);
  const { bgLeft,bgRight } = popupDetails[active];
  const {color} = cardDetails[active];
	const LeaderBoardItem = ({ rank, name, points,course }) => {
		return (
			<div className="leaderBoard__stats_content_item p-2 my-1">
				<h1>{rank}</h1>
				<h1>{name}</h1>
				<h1>{course}</h1>
				<h1 className="text-right">{points}</h1>
			</div>
		);
	};
	console.log(leaderData);
	return (
		<div className="leaderBoard" style={{backgroundColor : bgLeft}}>
			<div className="w-full">
				<Navbar color={color} />
			</div>
			<div className="leaderBoard__stats">
				<div className="leaderBoard__stats_inner">
					<div className="leaderBoard__stats_title p-2">
						<h1>RANK</h1>
						<h1>NAME</h1>
						<h1>COURSE</h1>
						<h1 className="text-right">POINTS</h1>
					</div>
					<div className="leaderBoard__stats_contentWrap">
            <div className="leaderBoard__stats_content my-6 spy1 flex-1">
              {leaderData.map((item, index) => {
                return <LeaderBoardItem key={index} rank={index+1} name={item.name} points={item.total} course={item.course} />
              })}
    
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default LeaderBoard;
