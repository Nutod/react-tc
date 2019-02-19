import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Follow from "../Follow/Follow";
import Experts from "../Experts/Experts";
import FooterNav from "../FooterNav/FooterNav";

export default function Suggestions() {
	return (
		<div>
			<ProfileInfo />
			<Follow />
			<Experts />
			<FooterNav />
		</div>
	);
}
