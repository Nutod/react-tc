import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 1.3rem;
	background: #fff;
	margin-bottom: 0.5rem;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}
`;

const ProfileDetails = styled.div`
	padding: 1rem;
	border-bottom: 1px solid #ccc;
`;

const CompleteProfileButton = styled.button`
	background: #fff;
	border: none;
	color: blueviolet;
	padding: 1rem;
	text-transform: uppercase;
	font-weight: 500;
`;

export default function ProfileInfo() {
	return (
		<ProfileWrapper>
			<ProfileDetails>
				<p>Profile Info</p>
				<p>Range Component</p>
				<p>Education - Where did you go to School?</p>
				<p>Bio - Let people know more about you by adding a short bio</p>
				<p>City - Where do you live?</p>
			</ProfileDetails>
			<CompleteProfileButton>Complete your Profile</CompleteProfileButton>
		</ProfileWrapper>
	);
}
