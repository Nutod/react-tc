import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
	background: green;
	color: #fff;
	font-size: 1.3rem;
	font-weight: bold;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.5rem;
	border-radius: 3px;

	span {
		font-size: 1rem;
	}
`;

export default function Logo() {
	return (
		<LogoWrapper>
			T<span>C</span>
		</LogoWrapper>
	);
}
