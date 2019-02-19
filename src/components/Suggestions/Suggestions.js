import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Follow from "../Follow/Follow";
import Experts from "../Experts/Experts";

export default function Suggestions() {
	return (
		<div>
			<ProfileInfo />
			<Follow />
			<Experts />
		</div>
	);
}
