import React, { useState } from "react";
import "./LeaderBoard.css";
import Navbar from "../components/Navbar";
import LeaderBoardNav from "../components/LeaderBoardNav";
import { leaderBoardData } from '../data/leaderBoardData';
import { popupDetails } from "../components/themeDetails";
import { cardDetails } from "../components/themeDetails";


function LeaderBoard() {
  const [active,setActive] = useState(0);
  const { bgLeft,bgRight } = popupDetails[active];
  const {color} = cardDetails[active];
	const LeaderBoardItem = ({ rank, name, points }) => {
		return (
			<div className="leaderBoard__stats_content_item p-2">
				<h1>{rank}</h1>
				<h1>{name}</h1>
				<h1 className="text-right">{points}</h1>
			</div>
		);
	};
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
						<h1 className="text-right">POINTS</h1>
					</div>
					<div className="leaderBoard__stats_contentWrap">
            <div className="leaderBoard__stats_content my-6 spy1 flex-1">
              {leaderBoardData[active].map((item, index) => {
                return <LeaderBoardItem key={index} rank={item.rank} name={item.name} points={item.points} />
              })}
    
            </div>
          </div>
          <div className="w-[60%]" >
            <LeaderBoardNav style={{backgroundColor : bgRight}} active={active} setActive={setActive} />
          </div>
				</div>
			</div>
		</div>
	);
}

export default LeaderBoard;
